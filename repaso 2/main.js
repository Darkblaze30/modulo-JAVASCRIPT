const  mensaje = document.getElementById("mensaje")
const  contenedor = document.getElementById("contenedor")
const  boton = document.getElementById("boton")

// const promesa1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         const productos = [
//         { id: "001", nombre: "Arroz", proveedor: "Diana"},
//         { id: "002", nombre: "Cafe", proveedor: "Aguila Roja"},
//         { id: "003", nombre: "Azucar", proveedor: "Riopaila"}
//     ];
//     // resolve(productos)
//     reject("No ahi datos")
// },4000)
// });
// promesa1.then((productos) => {
//     let prd = ""
//     productos.forEach(prod => {
//         prd += `<div class = "item"><strong>  Codigo:</strong> ${prod.id}<strong>  nombre:</strong> ${prod.nombre}<strong>      Proveedor:</strong> ${prod.proveedor}</div>`
//     })
//     contenedor.innerHTML = prd
// }).catch((error) => {
//     mensaje.innerText = "Error: " + error
// })


boton.addEventListener("click", () => {
    cargarDatos();
})

async function cargarDatos(){
    const datosAPI = await (await fetch("https://jsonplaceholder.typicode.com/todos"))
    datosAPI.json().then( datos => {
        let html = ""
        datos.forEach(tarea => {
            html += `<div class="item">
                <p><strong>id: ${tarea.id}</strong></p>
                <p><strong>titulo: ${tarea.title}</strong></p>
                <p><strong>completa: ${tarea.completed ? "SI" : "NO"}</strong></p>
            </div>`
        });
        contenedor.innerHTML = html
    }).catch(error => {"Error:" + error})
    console.log(datosAPI)
}





