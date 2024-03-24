# Ctrl-Phi (HooHacks 2024)

## Inspiration

Ctrl + F is one of the most prominent keybinds for efficient learning. Whether it's a wikipedia page or a historical document, the ability to search through texts in a matter of seconds is a huge time-saver for anyone trying to learn.

However, Ctrl + F necessitates <i>specific</i> text input in order to search. What if you don't remember the exact content of a section? Or what if you have a question about the text you want answered? Ctrl + F can no longer help you.

<b>With Ctrl-Phi, we integrate AI with the Ctrl + F you know and love to make searching through web pages conversational.</b> Simply press `Ctrl  + Shift + .`, type in any query, like you would with ChatGPT, and Ctrl-Phi will scroll you to the part of the page you're looking for.

## How to use Ctrl-Phi

Ctrl-Phi is a chrome extension that anyone can download at [ctrl-phi.app](https://ctrl-phi.app).

No matter what webpage you're on, Ctrl-Phi is one click away. Simply type in your prompt, select the block of text you want to jump to, and Ctrl+Phi will scroll the page to your desired location.

You can see Ctrl-Phi in action on our [website](https://ctrl-phi.app).

## How we built Ctrl-Phi

[someone better at using technical terms please write this - there's a lot of stuff]

## What's next

Even in its current state, Ctrl-Phi is incredibly practical for anyone who wants to get information fast. As a better version of one of the most popular keybinds on the internet, Ctrl-Phi can be widely adopted by almost anyone using the web.

However, there is always room to improve. The first advancement would be the ability to scan and sift through PDFs, as many textbooks and educational resources are in the form of PDFs. Second would be the ability to scan and find images on a webpage. And finally, querying videos and jumping to a desired timestamp would be arguably the most distinct and time-saving use case.

## Setup

#### Installation

1. Run `poetry install`
2. Run `python server`
3. Hosts on `localhost:8000/api`

### Hello World Example

Example call (based on: https://en.wikipedia.org/wiki/Alan_Turing):

```json
{
  "query": "Turing birth place",
  "content": "Born in Maida Vale, London, Turing was raised in southern England. He graduated from King's College, Cambridge, with a degree in mathematics. Whilst he was a fellow at Cambridge, he published a proof demonstrating that some purely mathematical yes–no questions can never be answered by computation. He defined a Turing machine and proved that the halting problem for Turing machines is undecidable. In 1938, he earned his PhD from the Department of Mathematics at Princeton University."
}
```
