document.addEventListener("DOMContentLoaded", () => {
    var Div = document.getElementsByTagName("div");
    var Button = document.getElementsByTagName("button")

    for (var i = 0; i < Div.length; i++) {
        Div[i].addEventListener("click", Hola);
    }
    for (var i = 0; i < Button.length; i++) {
        Button[i].addEventListener("click", Alert);
    }

})

function Hola() {
    alert("Hola! Soy el div")
}

function Alert() {
    alert("Hola!");
    event.stopPropagation();
}