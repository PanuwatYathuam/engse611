let button = document.getElementById("changeStyleButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    
    paragraph.style.backgroundColor = "lightblue";
    paragraph.style.fontSize = "20px";
});