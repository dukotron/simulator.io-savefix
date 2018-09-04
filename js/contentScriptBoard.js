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
        var saveLink = window.location.href;
        alert(saveLink);
    }, 1000);

    e.stopPropagation();
});