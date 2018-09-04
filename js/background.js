chrome.runtime.onInstalled.addListener(function() {
    var json = [
        {
            "name": "4-bit ALU",
            "snapshots": ["snapshot0", "snapshot1", "snapshot2"]
        },
        {
            "name": "2-bit ALU",
            "snapshots": ["snapshot0"]
        }
    ];

    chrome.storage.sync.set({items: /*JSON.stringify(*/json/*)*/}, function() {
        console.log(json);
    });

    chrome.storage.sync.get(['items'], function(result) {
        console.log(result.items[0].name);
    });
    

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'simulator.io', pathContains: '/board'},
            })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});