from SearchAgent import SearchAgent

agent = SearchAgent(3)

with open('../reference.txt', 'r') as file:
    reference_text = file.read()

results = agent.search(reference_text, input("user prompt:"))

print(results)
