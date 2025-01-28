const mensaje = document.getElementById('mensaje');

//PROPIEDAD classList
//Sintaxis general: elemento.classList

//obteniendo elemento del DOM
const elemento = document.getElementById('item1')

// //classList.lenght
// //Devuelve la cantindad de clases que tiene un elemento

// mensaje.innerText = `Cantidad de clases en el elemento: ${elemento.classList.length}`;


// // classList.item
// // Devuelve la clase en la posicion n de la lista de clases de un elemento.

// mensaje.innerText = `Clase en la posicion 2 del elemento: ${elemento.classList.item(2)}`;

// // classList.contains
// // Devuelve true si la clase esta presente y false si no lo esta.

// mensaje.innerText = `Existe la clase container en el item 1?: ${elemento.classList.contains("container") ? "SI" : "NO"}`

// classList.add
// Agrega una o mas clases a los atributos de clases de un elemento HTML
// elemento.classList.add('clase1', 'clase2');

const txtClase = document.getElementById("clase")
const txtClaseNueva = document.getElementById("claseNueva")
const btnAdd = document.getElementById("btnAdd")
const btnRemove = document.getElementById("btnRemove")
const btnReplace = document.getElementById("btnReplace")
mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`


btnAdd.addEventListener('click', () => {
    elemento.classList.add(txtClase.value)
    mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`
})
btnRemove.addEventListener('click', () => {
    console.log(txtClase.value)
    elemento.classList.remove(txtClase.value)
    mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`
    
})

btnToggle.addEventListener('click', () => {
    console.log(txtClase.value)
    elemento.classList.toggle(txtClase.value)
    mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`

})
btnReplace.addEventListener('click', () => {
    console.log(txtClaseNueva.value)
    elemento.classList.replace(txtClase.value, txtClaseNueva.value)
    mensaje.innerHTML = `Clases en el item 1: ${elemento.getAttribute("class")}`

})


//classList.toggle;
//Alterna la presencia, si esta la borra y si no esta la agrega

//ClassList.replace;
//Reemplaza una clase por otra