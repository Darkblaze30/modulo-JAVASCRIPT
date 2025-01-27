const btnGuardar = document.getElementById("btnGuardar")
const frmProducto = document.querySelector("#formulario")

btnGuardar.addEventListener("click", () => {
    const frmData = new FormData(frmProducto)
    agregarProducto(frmData.get("codigo"), frmData.get("nombre"), frmData.get("proveedor"))
    console.log(frmData)
})

function initDB(){
    const openDB = window.indexedDB.open('inventario', 1);

    openDB.onupgradeneeded = (init) => {
        let inventarioDB = init.target.result

        inventarioDB.onerror = () => {
            console.log('Error cargando la base de datos')
        }

        let table = inventarioDB.createObjectStore('productos', {keyPath: 'id', autoIncrement: true})
        table.createIndex('codigo', 'codigo', {unique: true})
    };

    openDB.onerror = () => console.log('Error abriendo la base de datos');

    openDB.onsuccess = () => {
        console.log('Base de datos abierta!')
    }
}


function agregarProducto(codigo,nombre,proveedor){
    const openDB = window.indexedDB.open('inventario', 1)
    openDB.onsuccess = () => {
        let inventarioDB = openDB.result
        const transaction = inventarioDB.transaction(["productos"], "readwrite")
            const productoStore = transaction.objectStore("productos")

        const nuevoProducto = {codigo, nombre, proveedor}
        const agregarRequest = productoStore.add(nuevoProducto)

        agregarProducto.onsuccess = () => {
            console.log("producto agregado correctamente")
        };

        agregarRequest.onerror = (error) => {
            if(error.target.error.name == "ConstraintError")
            console.log("Error: El codigo del  producto  ya esta registrado")
            else
                console.log("Error desconocido.", error.target.error.name)
        }
    }
}


initDB()