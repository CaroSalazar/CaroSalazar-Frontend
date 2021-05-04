
"use strict";

//referencio el boton enviar
let btnenviar = document.querySelector("#btn-enviar");

//nombro la funcion validarcaptcha
btnenviar.addEventListener("click", validarcaptcha);

//defino la funcion validarcaptcha
function validarcaptcha() {

    //referencio el input captcha
    let inputcaptcha = document.querySelector("#input-captcha");

    //referencio el div resultado
    let divresultado = document.querySelector("#resultado");

    //si el captcha es correcto
    if (inputcaptcha.value == "CAPTCHA") {
        divresultado.innerHTML = "Eres un Humano :)"
    }

    //si el captcha es incorrecto
    else {
        divresultado.innerHTML = "Eres un Robot :("
    }
}