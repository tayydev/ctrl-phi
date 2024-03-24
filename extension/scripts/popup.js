// Summary: popup HTML loads, getCurrentTab called (getting tab), scrapeHtml called (scraping text), set message to text

// run when the popup's HTML has completely loaded
document.addEventListener('DOMContentLoaded', function() {
    getCurrentTabHtml().then(html => {
        if (false) {
            document.querySelector('#message').textContent = html;
        }
    }).catch(error => {
        document.querySelector('#message').textContent = 'Error: ' + error.message;
    });
});

async function getCurrentTabHtml() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (!tab) {
        throw new Error('No active tab found');
    }

    // injects scrapeHtml function into active tab
    try {
        let [result] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: scrapeHtml,
        });
        return result.result;
    } catch (error) {
        console.error('Error executing script in the current tab:', error);
        throw error;
    }
}

function scrapeHtml() {
    return document.documentElement.innerText; // returns text within HTML
}

// Define the performSearch method
function performSearch() {
    // Example functionality: log to console. You can replace this with your actual search logic.
    console.log("The search button was clicked. Implement search functionality here.");
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the search button by its ID
    var searchButton = document.getElementById('search-button');

    // Attach the click event listener to the search button
    searchButton.addEventListener('submit', performSearch);
});