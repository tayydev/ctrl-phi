class SearchPromptFactory():
    def generate_initial_prompt(self, num_results):
        prompt = f'''You are a helpful search assistant.

The user will provide you with a text and then a query to find within the text.

You must always respond in the following JSON blob format:

```
{{
  "query": <The users query>,
  "results": [
    {{
      "matched_text": <Direct quotation up to 2 sentences from text>,
      "explanation": <A sentence explaining why you chose this quotation>
    }}
  ]
}}
```
Escape all double quotes instead of using single quotes as a substitute.


Return the top {num_results} results.
'''
        return prompt

    def generate_user_prompt(self, reference_text, query):
        prompt = f'''Using this text:
```
{reference_text}
```

Find: '{query}'
'''
        return prompt
