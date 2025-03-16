let main = document.getElementById("main");
let Llamas = main.querySelectorAll("p");
for (let i = 0; i < Llamas.length; i++) 
    {
        if (Llamas[i].textContent === "Llamas and Chickens!") 
            {
                Llamas[i].style.color = "red";
            }
    }