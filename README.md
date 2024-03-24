# Ctrl-Phi (HooHacks 2024)

## Inspiration

Ctrl + F is one of the most prominent keybinds for efficient learning. Whether it's a wikipedia page or a historical document, the ability to search through texts in a matter of seconds is a huge time-saver for anyone trying to learn.

However, Ctrl + F necessitates <i>specific</i> text input in order to search. What if you don't remember the exact content of a section? Or what if you have a question about the text you want answered? Ctrl + F can no longer help you.

<b>With Ctrl-Phi, we integrate AI with the Ctrl + F you know and love to make searching through web pages conversational.</b> Simply press `Ctrl  + Shift + .`, type in any query, like you would with ChatGPT, and Ctrl-Phi will scroll you to the part of the page you're looking for.

## How to use Ctrl-Phi

Ctrl-Phi is a Chrome extension that anyone can download at [ctrl-phi.app](https://ctrl-phi.app).

No matter what webpage you're on, Ctrl-Phi is one click away. Simply type in your prompt, select the block of text you want to jump to, and Ctrl+Phi will scroll the page to your desired location.

You can see Ctrl-Phi in action on our [website](https://ctrl-phi.app).

## How we built Ctrl-Phi

The frontend was built with Nextjs and TailwindCSS, using select MaterialUI components. The Playground tab allows users to experiment with Ctrl-Phi using sets of example text, or any text of their own. It uses dynamic highlighting and scrolling within the text boxes and displays components using the FastAPI response.

In order to analyze text, we engineered a custom Search Agent. This agent uses an LLM alongside agentic AI logic and prompting patterns (based on the principles of "ReAct: Synergizing Reasoning and Acting in Language Models") in order to find direct matching text based on a user's query. The Search Agent can be used with any LLM (due to custom LLM and LLMConfig abstractions) and features token-based chunking to overcome context-window limitations. The SearchAgent also has robust error-handling, utilizes response validation, and relies on re-prompting strategies to reduce hallucination.

## What's next
Ctrl-Phi is already practical to almost anyone on the web, but there's always room to improve.

The first advancement would be the ability to scan and sift through PDFs, as many textbooks and educational resources are in the form of PDFs. Second would be the ability to scan and find images on a webpage. And finally, querying videos and jumping to a desired timestamp would be arguably the most distinct and time-saving use case.