"use strict";

//-----------------------EventListeners----------------------------

//cuando carga el html se llama a la funcion precarga
document.addEventListener("DOMContentLoaded", preLoad); 
document.querySelector("#btn-add1").addEventListener("click", add1);
document.querySelector("#btn-add3").addEventListener("click", add3);
document.querySelector("#btn-delete").addEventListener("click", reset);


//array de objetos Json 
let table = [
    {
        excursion: "Visita al Vaticano",
        name: "Roger",
        age: 25,
        time: 15,
        language: "Español",
    },
    {
        excursion: "Coliseo, Foro y Palatino",
        name: "Rafa",
        age: 16,
        time: 12,
        language: "Italiano",
    },
    {
        excursion: "Excursión a las Catacumbas",
        name: "Novak",
        age: 11,
        time: 14,
        language: "Inglés",
    },
    {
        excursion: "Tour Gastronómico",
        name: "Andy",
        age: 52,
        time: 11,
        language: "Italiano",
    },
    {
        excursion: "Tour Nocturno",
        name: "Dominic",
        age: 30,
        time: 21,
        language: "Español",
    }
]

//-------------------------PRECARGA----------------------------

//llama a la funcion mostrar tabla 
function preLoad() { //precarga
    displayTable();
}

//------------------------MOSTRAR TABLA------------------------


function displayTable() {
    let tableExcursions = document.querySelector("#table");//referencia a la tabla 
    tableExcursions.innerHTML = '';//limpia el contenido de la tabla 
    for (let i = 0; i < table.length; i++) { //se itera el array de objetos 
        if (table[i].age <= 12) { //si la edad ingresa es menor o igual que 12 
            tableExcursions.innerHTML += // se carga la tabla y se agrega la clase resaltado a los td
                `<tr>
                    <td class="highlighted">${table[i].excursion}</td>
                    <td class="highlighted">${table[i].name}</td>
                    <td class="highlighted">${table[i].age}</td>
                    <td class="highlighted">${table[i].time}</td>
                    <td class="highlighted">${table[i].language}</td>
                </tr>`;
        }
        else { // si no se carga la tabla sin agregar la clase
            tableExcursions.innerHTML +=
                `<tr>
                    <td>${table[i].excursion}</td>
                    <td>${table[i].name}</td>
                    <td>${table[i].age}</td>
                    <td>${table[i].time}</td>
                    <td>${table[i].language}</td>
                </tr>`;
        }
    }
}

//----------------------AGREGAR UN REGISTRO--------------------

function add1() {
    //refencia a los inputs 
    let excursion = document.querySelector("#input-excursion").value;
    let name = document.querySelector("#input-name").value;
    let age = document.querySelector("#input-age").value;
    let time = document.querySelector("#input-time").value;
    let language = document.querySelector("#input-language").value;

    //creamos una variable con un objeto json 
    let newRecord = {
        excursion: excursion,
        name: name,
        age: parseInt(age),
        time: parseInt(time),
        language: language,
    }

    table.push(newRecord); // pushiamos el nuevo registro y los agregamos al array de objetos tabla 
    document.querySelector("form").reset(); // se limpian los inputs 
    displayTable(); // muesta la tabla 
}

//-------------------AGREGAR TRES REGISTROS--------------

function add3() {
    // creamos 3 variables con objetos json 
    let firstRecord = {
        excursion: "Tour de las leyendas",
        name: "Serena",
        age: 29,
        time: 8,
        language: "Italiano",
    }

    table.push(firstRecord); // pushiamos los tres al array de objetos 

    let secondRecord = {
        excursion: "Crucero por el Río Tiber",
        name: "Maria",
        age: 34,
        time: 13,
        language: "Inglés",
    }

    table.push(secondRecord);

    let thirdRecord = {
        excursion: "Tour por las Iglesias Barrocas",
        name: "Simona",
        age: 8,
        time: 12,
        language: "Español",
    }

    table.push(thirdRecord);

    document.querySelector("form").reset(); // limpiamos el formulario 
    displayTable(); // se muestra la tabla 
}

//-------------------BORRAR REGISTROS--------------------

function reset() {
    table = []; // le asiganmos un array vacio a la tabla 
    displayTable(); // se muestra la tabla sin los datos 
}
