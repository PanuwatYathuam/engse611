const moveonimg2 = document.getElementById("img2");
const popupimg2 = document.createElement("img");

popupimg2.src = "555.jpg";
popupimg2.style.position = "absolute"; 
popupimg2.style.display = "none";
popupimg2.style.width = "300px";
document.body.appendChild(popupimg2);

moveonimg2.addEventListener("mousemove", function(event) {
    let x = event.clientX - 300;
    let y = event.clientY + 0;

    popupimg2.style.left = x + "px";
    popupimg2.style.top = y + "px";
    popupimg2.style.display = "block";
});

moveonimg2.addEventListener("mouseleave", function() {
    popupimg2.style.display = "none";
});
