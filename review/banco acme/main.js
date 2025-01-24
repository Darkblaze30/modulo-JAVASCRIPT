let count = 0
let salir = false
let cuentas = []
let movimientos = []

// // Abrir la conexión con la base de datos (o crearla si no existe)
// const request = window.indexedDB.open("UsuariosDB", 1);

// console.log(db)
// // Configurar la estructura de la base de datos
// request.onupgradeneeded = (event) => {
//   const db = event.target.result;

//   // Crear un almacén de objetos llamado 'usuarios'
//   const usuariosStore = db.createObjectStore("usuarios", { keyPath: "id", autoIncrement: true });

//   // Crear índice para buscar por correo electrónico
//   usuariosStore.createIndex("email", "email", { unique: true });
// };

//   // Función para agregar un usuario a la base de datos
//   function agregarUsuario(nombre, email) {
//     const transaction = db.transaction(["usuarios"], "readwrite");
//     const usuariosStore = transaction.objectStore("usuarios");

//     // Agregar un nuevo usuario
//     const nuevoUsuario = { nombre: nombre, email: email };
//     const agregarRequest = usuariosStore.add(nuevoUsuario);

//     agregarRequest.onsuccess = () => {
//       console.log("Usuario agregado correctamente");
//     };
//   }

function menu (){
    let respuesta = prompt(`
        =========== Menu Bancario =============  
        ==================                                   
        1. Crear un usuario                
        2. Consignar en la cuenta         
        3. Retirar dinero                  
        4. Pagar Servicios                
        5. Mostrar movimientos              
        0. Salir                            
        
        =======================================
        `)
        return respuesta
        }
        


function login(){
    alert(`======CREACION DE USUARIO==========`
    )
    let numeroDocumento = prompt("Ingrese su numero de documento")
    let nombre = prompt("Ingrese su nombre")
    let clave = prompt("Ingrese su clave")
    count += 1
    // agregarUsuario(nombre,numeroDocumento)
    cuentas.push({
        "numeroDocumento": numeroDocumento,
        "nombre": nombre,
        "clave": clave,
        "numCt": count.toString(),
        "saldo": 0
    })

    movimientos.push({
        "numCt": count.toString(),
        "movimientos": []
    })

    console.log(cuentas)
    console.log(movimientos)
    alert(`se creara una cuenta con estos datos 
        numero de documento: ${numeroDocumento}
        nombre: ${nombre}
        clave: ${clave}
        numero de cuenta: ${count.toString()}
        saldo: $0
        `)
    alert("cuenta creada exitosamente")
}  

function consignacion (){
    const respuesta = prompt("Ingrese su numero de cuenta o documento")
    let encontrada = false
    cuentas.forEach(cuenta => {
        if(cuenta["numCt"] === respuesta || cuenta["numeroDocumento"] === respuesta){
            alert(`la cuenta a la que va a hacer la consignacion es ${cuenta["numCt"]}`)
            saldo = prompt("cuanto dinero desea consignar?")
            valor = Number(saldo)
            cuenta["saldo"] += valor
            movimientos.forEach(movimiento => {
                if(movimiento["numCt"] === cuenta["numCt"]){
                    movimiento["movimientos"].push(
                        {
                            "tipo": "consignacion",
                            "referencia": "",
                            "descripcion": `se ha consignado ${saldo}`,
                            "saldo": `${cuenta['saldo']}`,
                        }
                    )
                }
            })
            encontrada = true
        }

    });
    if(encontrada){
        alert("consignacion exitosa")
    }else alert("cuenta no encontrada intente de nuevo")
}

function retiro (){
    const respuesta1 = prompt("Ingrese su numero de cuenta")
    const respuesta2 = prompt("Ingrese su clave")
    let encontrada = false
    cuentas.forEach(cuenta => {
        if(cuenta["numCt"] === respuesta1 && cuenta["clave"] === respuesta2){
            alert(`la cuenta a la que ingreso es 
            numero de cuenta: ${cuenta["numCt"]}
            nombre: ${cuenta["nombre"]}
            `)
            saldo = prompt("cuanto dinero desea retirar?")
            valor = Number(saldo)
            if(cuenta["saldo"] < valor){
                alert("no tiene suficiente saldo")
            }else{
            cuenta["saldo"] -= valor
            movimientos.forEach(movimiento => {
                if(movimiento["numCt"] === cuenta["numCt"]){
                    movimiento["movimientos"].push(
                        {
                            "tipo": "retiro",
                            "referencia": "",
                            "descripcion": `se ha retirado ${saldo}`,
                            "saldo": `${cuenta['saldo']}`,
                        }
                    )
                }
            })
            encontrada = true
        }
    }
    });
    if(encontrada){
        alert("retiro exitosa")
    }else alert("cuenta no encontrada intente de nuevo")
}

function mostrarMovimientos(){
    const respuesta1 = prompt("Ingrese su numero de cuenta")
    const respuesta2 = prompt("Ingrese su clave")
    let encontrada = false
    cuentas.forEach(cuenta => {
        if(cuenta["numCt"] === respuesta1 && cuenta["clave"] === respuesta2){
            alert(`la cuenta a la que ingreso es 
            numero de cuenta: ${cuenta["numCt"]}
            nombre: ${cuenta["nombre"]}
            `)
            movimientos.forEach(movimiento => {
                if(movimiento["numCt"] === cuenta["numCt"]){
                    movimiento["movimiento"].forEach(Element => {
                        alert(` "tipo": "retiro",
                        "referencia": "",
                        "descripcion": se ha retirado ${saldo},
                        "saldo": ${cuenta['saldo']}`)
                        encontrada = true
                    })
    }
})
    }
    });
    if(encontrada){
        alert("retiro exitosa")
    }else alert("cuenta no encontrada intente de nuevo")
}

while (!salir) {
    let key = menu()
    console.log(key)
    switch (key) {
        case "1":
            login();
            break;
        case "2":
            consignacion()
            break;
        case "3":
            retiro()
            break;
        case "0": 
        alert("saliendo....")
        salir = true;
        break;
        default:
            alert("seleccione una opcion correcta")
            break
    }    
}
