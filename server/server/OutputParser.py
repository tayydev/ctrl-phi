import json
from models import ResultModel


class OutputParser():
    def parse_output(self, output_string):
        start_index = output_string.find('{')  # Find the first '{'
        if start_index != -1:
            # Find the last '}' and include it
            end_index = output_string.rfind('}') + 1
            # Extract the JSON part
            json_part = output_string[start_index:end_index]

            try:
                output_dict = json.loads(json_part)  # Load the JSON part

                results = output_dict['results']
                query = output_dict['query']

                matched_results = []

                for result in results:
                    matched_results.append(ResultModel(
                        matched_text=result['matched_text'], explanation=result['explanation']))
            except Exception as e:
                raise KeyError(e) from e  # Preserve original exception context

            return query, matched_results  # Return parsed results
        else:
            raise ValueError("Invalid output_string: No starting '{' found.")
