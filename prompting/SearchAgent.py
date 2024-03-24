from openai import OpenAI
from llms.LLM import LLM
from llms.OpenAILLM import OpenAILLM
from llms.LLMConfig import LLMConfig
from OutputParser import OutputParser
from SearchPromptFactory import SearchPromptFactory


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
            matches = self.parser.parse_output(response)
            self.validate_response(matches, reference_text)
            return query, matches
        except KeyError as e:
            print(e)
            exit()
        except ValueError:
            return self.reprompt(query)

    def research(self, reference_text, query):
        prompt = self.prompt_factory.generate_user_prompt(
            reference_text, query)
        response = self.llm.run(prompt)
        try:
            matches = self.parser.parse_output(response)
            self.validate_response(matches, reference_text)
            return query, matches
        except KeyError as e:
            return query, []
        except ValueError:
            return query, []

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
        self.research(reference_text, query)
        return query, []
