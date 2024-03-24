// Summary: popup HTML loads, getCurrentTab called (getting tab), scrapeHtml called (scraping text), set message to text
// // run when the popup's HTML has completely loaded
// document.addEventListener('DOMContentLoaded', function() {
//     getCurrentTabHtml().then(html => {
//         if (false) {
//             document.querySelector('#message').textContent = html;
//         }
//     }).catch(error => {
//         document.querySelector('#message').textContent = 'Error: ' + error.message;
//     });
// });

//scraping
async function getCurrentTabHtml() {
    //helper function runs on the main dom
    function scrapeHTMLHelper() {
        return document.documentElement.innerText; // returns text within HTML
    }

    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (!tab) {
        throw new Error('No active tab found');
    }

    // injects scrapeHtml function into active tab
    try {
        let [result] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: scrapeHTMLHelper,
        });
        return result.result;
    } catch (error) {
        console.error('Error executing script in the current tab:', error);
        throw error;
    }
}

// Add event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('search-form')
        .addEventListener('submit', performSearch);
});

async function performSearch(event) {
    event.preventDefault()

    const searchText = document.getElementById("search-input").value;
    const websiteContent = await getCurrentTabHtml()

    const results = await makeRequest(searchText, websiteContent)
    console.log("results", results)


    const outputsDiv = document.getElementById("outputs");
    outputsDiv.innerHTML = ''; // Clear existing content

    for (const row of results.results) {
        const text = row.matched_text
        console.log(row)
        const newDiv = document.createElement("div");
        newDiv.className = "result-item"; // Assign a class name for styling
        newDiv.textContent = text;

        newDiv.addEventListener('click', function() {
            highlightText(text, true); // the second parameter shows we want to scroll to the highlighted text
        });

        outputsDiv.appendChild(newDiv);
        highlightText(text)
    }
}

function highlightText(text, scroll) {
    //helper function runs on the main dom
    function highlightTextHelper(helperText, scroll) {
        function highlightTextHelperHelper(helperHelperText, scroll) { //naming functions is hard
            const searchRegExp = new RegExp(helperHelperText, 'g');
            const bodyText = document.body.innerHTML;

            if (!bodyText.match(searchRegExp)) {
                return false;
            }

            document.body.innerHTML = bodyText.replace(searchRegExp, `<span class="highlighted">${helperHelperText}</span>`);

            // actual scroll functionality
            if (scroll) {
                const highlightedElements = document.querySelectorAll('.highlighted');
                if (highlightedElements.length > 0) {
                    highlightedElements[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            return true;
        }
        while (true) {
            console.log("loop running")
            console.log("helper_text", helperText)
            const spaceIndex = helperText.indexOf(" ")
            if(spaceIndex === -1) {
                console.log("space break")
                break;
            }
            const attempt = highlightTextHelperHelper(helperText, scroll)
            console.log("attempt", attempt)
            if(attempt) {
                console.log("attempt break")
                break;
            }

            helperText = helperText.substring(0, helperText.lastIndexOf(" "))
        }
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: highlightTextHelper,
            args: [text, scroll] // Replace 'textToHighlight' with the actual text you want to highlight
        });
    });
}

async function makeRequest(query, content) {
    const requestBody = {
        query: query,
        content: content // Replace this with the actual article content
    };
    console.log("request body", requestBody)
    try {
        const response = await fetch('https://api.ctrl-phi.app/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.6.1', // User-Agent header might not be allowed by browsers for security reasons
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json()
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}