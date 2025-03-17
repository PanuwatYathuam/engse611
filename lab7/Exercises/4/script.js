let button = document.getElementById("addElementButton");

button.addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    
    newParagraph.textContent = "This is a new paragraph.";
    
    let parentDiv = document.getElementById("parent");
    
    parentDiv.appendChild(newParagraph);
});