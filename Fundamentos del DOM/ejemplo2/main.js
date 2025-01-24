const container = document.getElementById("container")
const mensaje = document.getElementById("mensaje")
const boton = document.getElementById("boton")
const campo = document.getElementById("nombre")
let setFlex = true


boton.addEventListener("click", () => {
    setFlex = !setFlex
    //-------------.toggleAttribute--------
    //agreaga el atributo si no esta o lo elimina si si esta
    container.toggleAttribute("style")
    if(setFlex){
        //--------------.setAttribute------------
        //agrega los atributos que le pasamos
        container.setAttribute(
            "style",
            "display: flex; flex-direction: row-reverse"
            )
    }
    //----------------.getAttributeNames-------
    mensaje.innerText = container.getAttributeNames();
})



boton.addEventListener("click", () => {
    campo.toggleAttribute('disabled')
})

// container.setAttribute(
//     "style",
//     "display: flex; flex-direction: row-reverse"
// )

// container.removeAttribute("name")
mensaje.innerHTML = campo.value

