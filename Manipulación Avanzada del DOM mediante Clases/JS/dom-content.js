const mensaje = document.getElementById('mensaje');
const elemento = document.querySelector('#contenedor')

//Devuelve el contenido
// mensaje.innerText = `Contenido del elemento: ${elemento.innerHTML}`

//Modificar el contenido
// elemento.innerHTML = "<strong>Nuevo Texto</strong>"

//Eliminar el contenido con comillas vacias
// elemento.innerHTML = ""

//me regresa el nombre del nodo (div, p, span)
// mensaje.innerHTML =  `Nombre del nodo: ${elemento.nodeName}`

//textContent

//Devuelve el contenido de texto del elemento
mensaje.innerText = `Contenido de texto del elemento: ${elemento.textContent}`

//Modificar el contenido del texto del elemento
// elemento.textContent = "Nuevo Texto"

//Eliminar el contenido de texto del elemento
// elemento.textContent = ""

//.outherHTMl
//Devuelve no solo el contenido si no la etiqueta tambien
// mensaje.innerText = `Contenido de texto del elemento: ${elemento.outerHTML}`

//Modifica el contenido desaparecion la etiqueta normal
// elemento.outerHTML = "<strong id = container>Nuevo texto</strong>"
// const container = document.getElementById("container")
// container.innerHTML = `<p>hola mundo</p>`

//setHTML()
//es una forma segura de agregar HTML a un elemento en el DOM.
//A diferencia de .innerHTML, que puede inyectar codigo malicioso,
//.setHTML() desinfecta el codigo HTML para que no contenga codigo
//JavaScript o cualquier otro codigo potencialmente dañino

//element,setHTML(htmlCode, options)
//htmlCode:
//  Una cadena de texto que representa el codigo HTML que se agregara al elemento
//options: Un objeto opcional que puede contener las siguientes propiedades:
//      -->sanitize:  Un valor booleano que indica si el codigo HTML debe
//                    desinfectarse (el valor predeterminado es true)
//      -->AllowAttributes: Una matriz de nombres de atributos HTML que se
//                          permitiran en el codigo HTML
//                          (el valor predeterminado es una matriz vacia)

//Modificar el contenido
elemento.setHTML("<strong>Nuevo Texto</strong>")