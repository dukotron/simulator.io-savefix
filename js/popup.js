window.onload = function() {
    chrome.storage.sync.get(['boards'], function(result) {
        var links;

        for (var index in result.boards) {
            links = '';

            for (var snapshot in result.boards[index]) {
                links += '<h4><a target="_blank" href="';
                links += result.boards[index][snapshot];
                links += '">'
                links += result.boards[index][snapshot];
                links += '</a></h4>'
            }
            $('body').append('<br><div class="card"> <div class="header"><h1>'+index+'</h1><button class="remove-button">Remove</button></div><div class="body">'+links+'</div></div>');
        }
    });
};

$('body').on('click', '.remove-button', function() {
    var removeId = $(this).parent().find('h1');
    var removeDiv = $(this).parent().parent();

    chrome.storage.sync.get(['boards'], function(result) {
        delete result.boards[removeId.text()];
        removeDiv.remove();

        chrome.storage.sync.set({boards: result.boards});
    });
});