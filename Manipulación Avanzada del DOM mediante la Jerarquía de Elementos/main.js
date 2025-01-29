const mensaje = document.getElementById('mensaje');

function nuevo_item(id) {
    const div = document.createElement("div");
    div.textContent = `Item ${id} en el contenedor`;
    div.setAttribute("class", "item borde fuente");
    div.setAttribute("id", `item ${id}`);
    return div;
}

// obteniendo elemento del DOM
const elemento = document.getElementById('content');

// Inserción de elementos en el DOM - Administración de Nodos

// appendChild(child)
// Inserta un elemento nuevo como hijo de un elemento existente.
// El elemento nuevo se agrega al final de la lista de hijos del elemento.

// let div = nuevo_item(4);
// elemento.appendChild(div);

// // removeChild(child)
// // Elimina un elemento DOM de su padre.
// // El elemento eliminado se devuelve como resultado.
// let item = document.querySelector("#item2");
// mensaje.textContent = elementp.removeChild(item);

// replaceChild(new, old)
// Reemplaza un elemento hijo de un elemento por otro
// item = document.querySelector("#item1");
// div = nuevo_item(5);
// elemento.replaceChild(div, item);

// insertBefore(new, node)
// Inserta un elemento nuevo antes de otro elemento.
// item = document.querySelector("#item3");
// div = nuevo_item(6);
// elemento.insertBefore(div, item);

// Cuando el nodo es nulo agrega el elemento al final.
// div = nuevo_item(7);
// elemento.insertBefore(div, null);

// propiedades pra modificacion de elementos

//.remove, elimina el elemento

// function nuevo_item(nombre) {
//     const div = document.createElement("div");
//     div.textContent = nombre
//     div.setAttribute("class", "item borde fuente");
//     div.setAttribute("id", `${nombre}`);
//     return div;
// }

// document.getElementById("btnAppend").addEventListener("click", () => {
//     elemento.appendChild(nuevo_item(document.querySelector("#persona1").value))
// })

// document.getElementById("btnPrepend").addEventListener("click", () => {
//     elemento.prepend(nuevo_item(document.querySelector("#persona1").value))
// })
// document.getElementById("btnReplace").addEventListener("click", () => {
//     const nombre = document.getElementById("persona1").value
//     const paraReemplazar = document.getElementById(nombre)
//     const p2 = nuevo_item(document.querySelector("#persona2").value)
//     elemento.replaceChild(p2,paraReemplazar)
// })

//insertAdjecentElement(position, element)
//Inserta un elemento DOM nuevo en una posicion especifica
// position: La posición en la que se desea insertar el HTML nuevo. Puede ser una de las siguientes constantes:
// beforebegin: El HTML nuevo se inserta antes del primer hijo del elemento que llama al método.
// afterbegin: El HTML nuevo se inserta después del primer hijo del elemento que llama al método.
// beforeend: El HTML nuevo se inserta antes del último hijo del elemento que llama al método.
// afterend: El HTML nuevo se inserta después del último hijo del elemento que llama al método.

// div = nuevo_item(15)
// elemento.insertAdjacentElement("afterend", div)

//insertAdjecentHTML(position, html)

elemento.insertAdjacentHTML(
    "beforeend",
    '<div id="item3" class="item borde fuente">Item 3 en el contenedor</div>'

)
