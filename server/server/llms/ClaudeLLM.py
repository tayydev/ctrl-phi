from .LLMConfig import LLMConfig
from .LLM import LLM
import anthropic


class ClaudeLLM(LLM):
    def __init__(self, config: LLMConfig, messages=[]):
        super().__init__(config, messages)
        self.client = anthropic.Anthropic()
        self.sys_prompt = None

    def run(self, prompt):
        self.add_messages([{"role": "user", "content": prompt}])
        message = self.client.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=1000,
            temperature=0.7,
            system=self.sys_prompt,
            messages=self.messages
        )
        message.content[0].text

    def add_sys_prompt(self, sys_prompt):
        if self.sys_prompt:
            self.sys_prompt += "\n" + sys_prompt
        else:
            self.sys_prompt = sys_prompt

    def add_messages(self, messages):
        self.messages.extend(messages)

    def delete_last_message(self):
        if len(self.messages) > 1:
            self.messages.pop()
