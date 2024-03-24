chrome.runtime.onConnect.addListener(function(port) {
    console.log("Connected .....", port);
    if(port.name === "popup") {
        port.onDisconnect.addListener(function() {
            console.log("Popup has been closed");

            wipeDiv()
        });
    }
});

function wipeDiv() {
    function wipeDivHelper() {
        const items = document.querySelectorAll('.injected-highlighter');

        items.forEach((item) => {
            const highlightedElements = document.querySelectorAll(`span#${item.id}`);
            highlightedElements.forEach(element => {
                const textNode = document.createTextNode(element.textContent);
                element.parentNode.replaceChild(textNode, element);
            });
        });
    }

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: wipeDivHelper,
            args: []
        });
    });
}