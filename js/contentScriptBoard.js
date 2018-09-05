var forkButton = $(".button.openFork.iconFork.buttonIconText");
var linkButton = $(".button.openLink.iconLink.buttonIconText");

linkButton.hide();

forkButton.on("click", function(e) {
    linkButton.click();

    var uiOverlayLink = $("#uiOverlayLink");
    var createSnapshot = uiOverlayLink.find("button");
    
    createSnapshot.click();

    uiOverlayLink.find(".close").click();

    setTimeout(function() {
        chrome.storage.sync.get(['boards'], function(result) {
            if (result.boards[window.location.href.split('/')[4]] === undefined) {
                result.boards[window.location.href.split('/')[4]] = [window.location.href];
            } else {
                result.boards[window.location.href.split('/')[4]].push(window.location.href);
            }

            chrome.storage.sync.set({boards: result.boards});
        });
    }, 1000);

    e.stopPropagation();
});