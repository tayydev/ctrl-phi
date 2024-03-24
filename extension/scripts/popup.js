window.onload = function() {
    document.getElementById('search-input').focus();
};

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

let ids = []
let iter = 0

async function performSearch(event) {
    event.preventDefault()

    const searchText = document.getElementById("search-input").value;
    const websiteContent = await getCurrentTabHtml()

    // show spinner
    const spinner = document.querySelector('.spinner');
    spinner.style.display = "block";

    const results = await makeRequest(searchText, websiteContent)
    console.log("results", results)

    // hide spinner
    spinner.style.display = "none";

    const outputsDiv = document.getElementById("outputs");
    outputsDiv.innerHTML = ''; // Clear existing content


    //cleanup from older searches
    ids.forEach(item => {
        wipeDiv(item)
    })
    ids = []
    for (const row of results.results) {
        const text = row.matched_text

        const customDivId = `customInject${iter++}`
        ids.push(customDivId)
        console.log("Generated id", customDivId)

        console.log(row)


        //Make the divs in popup
        const newDiv = document.createElement("button");
        newDiv.className = "result-item"; // Assign a class name for styling
        newDiv.textContent = '"' + text + '"';
        newDiv.style.fontWeight = 'bold'

        const explanationDiv = document.createElement("div")
        explanationDiv.className = "explanation-item"
        explanationDiv.textContent = row.explanation
        explanationDiv.style.fontWeight = 'normal'
        newDiv.appendChild(explanationDiv)

        newDiv.addEventListener('click', function() {
            ids.forEach(item => {
                changeDivBackgroundColor(item, "yellow")
            })
            scrollToDiv(customDivId)
            changeDivBackgroundColor(customDivId, "orange")
        })

        outputsDiv.appendChild(newDiv);
        highlightText(text, customDivId)
        changeDivBackgroundColor(customDivId, "yellow")
    }
}

function scrollToDiv(divID) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: function(divID) {
                const element = document.getElementById(divID);
                if (element) {
                    element.scrollIntoView({behavior: "smooth", block: "center"});
                }
            },
            args: [divID]
        });
    });
}

function changeDivBackgroundColor(divID, color) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: function(divID, color) {
                document.getElementById(divID).style.backgroundColor = color;
            },
            args: [divID, color]
        });
    });
}

function wipeDiv(divID) {
    function wipeDivHelper(divId) {
        const highlightedElements = document.querySelectorAll(`span#${divId}`);
        highlightedElements.forEach(element => {
            const textNode = document.createTextNode(element.textContent);
            element.parentNode.replaceChild(textNode, element);
        });
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: wipeDivHelper,
            args: [divID]
        });
    });
}

function highlightText(text, divId) {
    //helper function runs on the main dom
    function highlightTextHelper(helperText, divId) {
        function highlightTextHelperHelper(helperHelperText, divId) { //naming functions is hard
            const searchRegExp = new RegExp(helperHelperText, 'g');
            const bodyText = document.body.innerHTML;

            if (!bodyText.match(searchRegExp)) {
                return false;
            }

            document.body.innerHTML = bodyText.replace(
                searchRegExp,
                `<span id=${divId}>${helperHelperText}</span>`
            );

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
            const attempt = highlightTextHelperHelper(helperText, divId)
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
            args: [text, divId]
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