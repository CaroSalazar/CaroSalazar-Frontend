"use strict";


//Declaramos la variable captcha y la dejamos vacia 
let captcha = "";

// generamos el numero random y se lo asiganmos a la variable 
function generateRandom(){
    let random = Math.floor(Math.random()*1000000); 
    let displayCaptcha = document.querySelector("#display-captcha") // referenciamos donde se muestra el numero
    displayCaptcha.innerHTML = random; // muestra el numero random 
    captcha = random; // se guarda el random en el captcha 
}

generateRandom(); // llamamos a la funcion 

let btnSend = document.querySelector("#btn-send") //refenciamos al boton enviar 
btnSend.addEventListener("click", validation); // al hacer click se llama a la funcion validar 

function validation(){
    let inputCaptcha = document.querySelector("#input-captcha"); // referencia al input captcha 
    let result = document.querySelector("#result"); //referencia al resultado 
    if (inputCaptcha.value == captcha) { // si el captcha ingresado es igual al captcha 
        result.innerHTML = "Eres un Humano :)"; // se muestra eso en el resulatdo 
        document.querySelector("#form").reset(); // se resetea el captcha 
        generateRandom(); // se llama a la funcion para que genere uno nuevo 
    }else { // sino se muetsra eso en el resultado 
        result.innerHTML = "Eres un Robot :(";
        document.querySelector("#form").reset();// se resetea el captcha
        generateRandom(); //se llama a la funcion para que genere uno nuevo 
    }
}