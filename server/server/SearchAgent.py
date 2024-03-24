from llms.LLM import LLM
from llms.OpenAILLM import OpenAILLM
from llms.LLMConfig import LLMConfig
from OutputParser import OutputParser
from SearchPromptFactory import SearchPromptFactory
from models import ResponseModel


class SearchAgent():
    def __init__(self, num_results, llm: LLM = None):
        self.parser = OutputParser()
        self.prompt_factory = SearchPromptFactory()
        if llm:
            self.llm = llm
        else:
            self.llm = OpenAILLM(LLMConfig())
        self.llm.add_sys_prompt(
            self.prompt_factory.generate_initial_prompt(num_results))

    def search(self, reference_text, query):
        prompt = self.prompt_factory.generate_user_prompt(
            reference_text, query)
        response = self.llm.run(prompt)
        try:
            llm_query, matches = self.parser.parse_output(response)
            self.validate_response(matches, reference_text)
            return ResponseModel(query=llm_query, results=matches)
        except KeyError as e:
            exit()
        except Exception:
            return self.reprompt(reference_text, query)

    def research(self, reference_text, query):
        prompt = self.prompt_factory.generate_user_prompt(
            reference_text, query)
        response = self.llm.run(prompt)
        try:
            llm_query, matches = self.parser.parse_output(response)
            self.validate_response(matches, reference_text)
            return ResponseModel(query=llm_query, results=matches)
        except KeyError:
            return ResponseModel(query=llm_query, results=[])
        except ValueError:
            return ResponseModel(query=llm_query, results=[])
        except Exception:
            return ResponseModel(query=llm_query, results=[])

    def validate_response(self, matches, reference_text):
        for match in matches:
            if (not match.matched_text in reference_text):
                matches.remove(match)
        if len(matches) < 1:
            raise ValueError('No valid matches - likely halluciantion.')

    def reprompt(self, reference_text, query):
        self.llm.delete_last_message()
        self.llm.add_sys_prompt(
            "Reminder that matched_text must EXACTLY match the reference text.")
        return self.research(reference_text, query)
