chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    let msg = {
        txt: "calcular"
    }

    chrome.tabs.sendMessage(tab.id, msg);
}