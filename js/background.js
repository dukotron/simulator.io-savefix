chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get(['boards'], function(result) {
        if (result.boards === undefined) {
            result.boards = {}
        }

        chrome.storage.sync.set({boards: result.boards});
    });
});