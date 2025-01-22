const username = prompt("Ingrese nombre de usuario")

// const archivo = fetch("usuarios.json")

//----------------funcion async para cargar datos ---------------------
async function cargarData(){
    const archivo = await fetch("usuarios.json");
    const data = await archivo.json()
    const usuario = data.find(
        elemento => elemento.nombre == username
    );
    console.log(usuario)
    console.log(data)
}

//-------------------manejar data con promesas---------------------
// archivo.then((response) => {
//     const data = response.json()
//     console.log(data)
//     return data
// }).then( data => {
//     const usuario = data.find(Elemento => Elemento.nombre == username)
//     console.log(usuario)
//     console.log(data[1])
// })

//--------------manejar data con async await--------------------
// archivo.then(async(response) => {
//     const data = await response.json()
//     console.log(data)
//     const usuario = data.find(elemento => elemento.nombre == username)
//     console.log(usuario)
// })

cargarData()

