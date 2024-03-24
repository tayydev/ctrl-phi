from .LLMConfig import LLMConfig
from .LLM import LLM
from openai import OpenAI


class OpenAILLM(LLM):
    def __init__(self, config: LLMConfig, messages=[]):
        super().__init__(config, messages)
        self.client = OpenAI(api_key=self.config.api_key)

    def run(self, prompt):
        self.add_messages([{"role": "user", "content": prompt}])
        completion = self.client.chat.completions.create(
            model=self.config.model,
            messages=self.messages
        )
        response = completion.choices[0].message.content
        self.delete_last_message()
        return response

    def add_sys_prompt(self, sys_prompt):
        self.messages.extend([
            {"role": "system", "content": sys_prompt},
        ])

    def add_messages(self, messages):
        self.messages.extend(messages)

    def delete_last_message(self):
        if len(self.messages) > 1:
            self.messages.pop()
