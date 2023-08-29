document.addEventListener("DOMContentLoaded", () => {
var Div = document.getElementsByTagName("div");
for (var i = 0; i < Div.length; i++) {
    Div[i].addEventListener("click", Hola);
} 
})

function Hola() {
    alert("Hola! Soy el div")
}
