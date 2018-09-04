var greeting = "hola, ";
var button = $(".button.openFork.iconFork.buttonIconText");

button.on("click", function(e) {
    alert(greeting + "bob.");
    e.stopPropagation();
});