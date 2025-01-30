const contenedor = document.getElementById("contenedor")

function inicializar(){
    for (const item of contenedor.children) {
        item.setAttribute("onmouseover", `resaltarItemMenu(event)`)        
        item.setAttribute("onmouseout", `quitarResaltarItemMenu(event)`)        
        item.setAttribute("onclick", `seleccionarItem(event)`)        
    }
}

function resaltarItemMenu(item){
    item.target.classList.add("overItem")
}

function quitarResaltarItemMenu(item){
    item.target.classList.remove("overItem")
}

function seleccionarItem(item){
    console.log(item)
    for (const hijo of item.target.parentElement.children) {
        hijo.classList.remove("seleccionar")
    }
    item.target.classList.add("seleccionar")
    switch (item.target.textContent.trim()) {
        case "Crear Producto":
            moduloProducto()
            break;
        case "Agregar Producto a stock":
            moduloAgregarProducto()            
            break;
        case "Sacar Producto de Stock":
            moduloSacarProducto()            
            break;
    
        default:
            break;
    }
}

inicializar()