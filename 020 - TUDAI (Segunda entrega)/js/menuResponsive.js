"use strict";

document.querySelector("#btn-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigator").classList.toggle("show");
}


//para hacer el menu resposive primero referenciamos el boton menu, y le agregamos el addEventListener, 
// cuando se hace click sobre el , llama a la funcion togglemenu. 

//declaramos la funcion y referenciamos a la lista del menu de navegacion, luego le agrega la clase "show". 