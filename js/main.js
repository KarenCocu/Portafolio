function activarPanel(){
const contendor = document.querySelector(".cont-colores");
const boton = document.querySelector(".open-panel");


contendor.classList.toggle("active");
boton.classList.toggle("active");
}

var link = document.getElementById("FileCss");

function fucsia(){
    link.href="css/style.css";
}

function morado(){
    link.href="css/style-segundo.css";
}

function rosado(){
    link.href="css/style-tercero.css";
}