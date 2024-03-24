from dotenv import load_dotenv
import os


class LLMConfig:

    def __init__(self, model="gpt-3.5-turbo", api_key=None, path="https://api.openai.com/v1/", temperature=0.7, max_tokens=2000):
        load_dotenv()
        if api_key:
            self.api_key = api_key
        else:
            self.api_key = os.environ['OPENAI_API_KEY']
        self.temperature = temperature
        self.max_tokens = max_tokens
        self.path = path
        self.model = model
