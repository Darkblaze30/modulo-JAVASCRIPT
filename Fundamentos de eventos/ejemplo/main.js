const modulo = document.getElementById("modulo")

function moduloProducto(){
    modulo.innerHTML = `
    <form id="frmProducto">
        <input type="text" name="codigo" id="codigo" placeholder="codigo">
        <input type="text" name="nombre" id="nombre" placeholder="nombre">
        <input type="text" name="proveedor" id="proveedor" placeholder="proveedor">
    </form>
    <button id="btnGuardarProducto">Guardar Producto</button>
    `

    document.getElementById("btnGuardarProducto").addEventListener("click", () =>{
        const frmProdcuto = new FormData(document.getElementById("frmProducto"))
        alert(frmProdcuto.get("codigo"))
    })
}
function moduloAgregarProducto(){
    modulo.innerHTML = `Agregar producto
    `
}
function moduloSacarProducto(){
    modulo.innerHTML = `Sacar producto
    `
}

