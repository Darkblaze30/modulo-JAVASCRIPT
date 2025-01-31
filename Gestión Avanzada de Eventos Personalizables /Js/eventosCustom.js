const btnEjemplo = document.querySelector("#ejemplo");
const divContenedor = document.querySelector("#contenedor");
const divNieto = document.querySelector("#nieto");


// function alerta() {
//     alert("Hola!")
//     btnEjemplo.removeEventListener("click", alerta)
// }

// btnEjemplo.addEventListener("click", alerta);
const miEvento = new CustomEvent("mi-evento",{
    detail:{
        number: 1,
        name: "evento propio"
    },
    bubbles: true
})

btnEjemplo.addEventListener("click", event => {
    btnEjemplo.dispatchEvent(miEvento)
});

// btnSubmit.addEventListener('click', event => {
//     event.preventDefault()
//     console.log('No se envio la data', event.defaultPrevented)
// })


divContenedor.addEventListener("mi-evento", (event => {
    console.log("Evendo abuelo")
}))

divNieto.addEventListener("mi-evento", (event => {
    console.log("Evento en el nieto")
},{capture:false, bubbles:true}))