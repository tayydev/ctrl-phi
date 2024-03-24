from llms.LLM import LLM
from llms.OpenAILLM import OpenAILLM
from llms.LLMConfig import LLMConfig
from OutputParser import OutputParser
from SearchPromptFactory import SearchPromptFactory
from models import ResponseModel
import tiktoken


class SearchAgent():
    def __init__(self, num_results, llm: LLM = OpenAILLM(LLMConfig()), max_tokens=15800):
        self.num_results = num_results
        self.parser = OutputParser()
        self.prompt_factory = SearchPromptFactory()
        self.llm = llm
        self.max_tokens = max_tokens

    def search(self, reference_text, query):
        # Chunk content to avoid context limit
        chunks = self.chunk_content(reference_text)
        # Add system prompt to llm to ensure response format
        self.llm.add_sys_prompt(
            self.prompt_factory.generate_initial_prompt(self.num_results))
        result = ResponseModel(query="", results=[])
        for chunk in chunks:
            # Make prompt based on chunks
            prompt = self.prompt_factory.generate_user_prompt(
                chunk, query)
            try:
                # Try to extend array with responses from chunk
                response = self.llm.run(prompt)
                llm_query, matches = self.parser.parse_output(response)
                matches = self.validate_response(matches, chunk)
                result.results.extend(matches)
                result.query = llm_query
            # In case of errors reprompt
            except KeyError:
                result.query = query
                result.results.extend(self.reprompt(chunk, query))
            except Exception as e:
                result.query = query
                result.results.extend(self.reprompt(chunk, query))
        # return collected matches
        return result

    def research(self, reference_text, query):
        # Reprompts the llm
        prompt = self.prompt_factory.generate_user_prompt(
            reference_text, query)
        try:
            response = self.llm.run(prompt)
            llm_query, matches = self.parser.parse_output(response)
            matches = self.validate_response(matches, reference_text)
            return matches
        except KeyError:
            return []
        except ValueError:
            return []
        except Exception:
            return []

    def validate_response(self, matches, reference_text):
        valid_matches = []
        for match in matches:
            inner_norm = match.matched_text.replace(
                "\n", " ").replace("'", "\"")
            outer_norm = reference_text.replace("\n", " ").replace("'", "\"")
            if inner_norm in outer_norm:
                valid_matches.append(match)

        if len(valid_matches) < 1:
            raise ValueError('No valid matches - likely hallucination.')

        return valid_matches

    def reprompt(self, reference_text, query):
        self.llm.delete_last_message()
        self.llm.add_sys_prompt(
            "Reminder that matched_text must EXACTLY match the reference text.")
        return self.research(reference_text, query)

    def chunk_content(self, content: str) -> list[str]:
        # Encode the content using batch encoding to handle large texts efficiently
        tokenizer = tiktoken.encoding_for_model("gpt-3.5-turbo")
        encodings = tokenizer.encode(content)
        total_tokens = len(encodings)

        if total_tokens <= self.max_tokens:
            # Content fits within the limit, return it as a single chunk
            return [content.strip()]
        else:
            # Get the number of chunks required
            num_chunks = total_tokens // self.max_tokens
            if total_tokens % self.max_tokens != 0:
                num_chunks += 1

            chunks = []

            tokens_per_chunk = self.max_tokens
            for i in range(num_chunks):
                start_index = i * tokens_per_chunk
                end_index = min((i + 1) * tokens_per_chunk,
                                start_index + total_tokens)
                chunk_text = tokenizer.decode(
                    encodings[start_index:end_index])
                chunks.append(chunk_text.strip())
                if (len(chunks) > 5):
                    return chunks
                if total_tokens > self.max_tokens:
                    total_tokens -= self.max_tokens
                else:
                    total_tokens = 0

            return chunks
