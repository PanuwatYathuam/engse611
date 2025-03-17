let button = document.getElementById("changeTextButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    paragraph.textContent = "New Text Content";
});