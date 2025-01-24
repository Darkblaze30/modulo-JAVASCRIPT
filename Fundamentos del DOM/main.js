const titulo = document.getElementById("titulo")

//------------------cambiar el texto-------------
// const nuevoTitulo = prompt("Ingrese el nuevo  Titulo") 
// titulo.innerText = nuevoTitulo

//------------------cambiar el html-------------
const texto = prompt("texto en el titulo")
titulo.innerHTML = `${texto}`

//-----------------.getElementsByClassName-----------------
//me trae todos los objetos que tengan esta clase y lo trae como un iterable
// const parrafos = document.getElementsByClassName("parrafo")

// // for(let i = 0; i < parrafos.length; i++){
// //     parrafos[i].innerHTML = "Parrafo "+i
// // }

// const textoParrafo = prompt("texto en el parrafo")


// for (const parrafo of parrafos) {
//     console.log(parrafo.innerText)
//     parrafo.innerText = textoParrafo
// }

// console.log(titulo)
// console.log(parrafos)

// const parrafosEtiqueta = document.getElementsByTagName("p")
// const textoParrafo = prompt("texto en el parrafo")

// for (const parrafo of parrafosEtiqueta) {
//     console.log(parrafo.innerText)
//     parrafo.innerText = textoParrafo
// }

const parrafo1 = document.querySelector(".parrafo")

const parrafos = document.querySelectorAll(".parrafo")
for (const parrafo of parrafos) {
    parrafo.innerHTML = "<h1>El Nuevo titulo QS</h1>"    
}