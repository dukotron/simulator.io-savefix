var enterButton = $(".bigTeaser").find("button");

enterButton.on("click", function(e) {
    window.location.href = "https://simulator.io/board";
    e.stopPropagation();
});