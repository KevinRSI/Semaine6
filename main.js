let color = document.querySelector(".square");

let button = document.getElementById("button");

button.addEventListener("click", function(event){
    event.color.style.backgroundColor = "red";
});