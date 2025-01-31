let body = document.querySelector("body");
let switchCheckbox = document.querySelector(".switch-checked3");
let textElements = document.querySelectorAll(".text-element,a"); // выбираем все элементы с классом text-element

switchCheckbox.addEventListener("change", () => {
    if (switchCheckbox.checked) {
        body.style.backgroundColor = "#333";
        body.style.color = "white";
        textElements.forEach(element => {
            element.style.color = "white"; 
        });
    } else {
        body.style.backgroundColor = "#fff";
        body.style.color = "black";
        textElements.forEach(element => {
            element.style.color = "black"; 
        });
    }
});
