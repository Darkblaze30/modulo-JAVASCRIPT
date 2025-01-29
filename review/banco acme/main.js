let count = 0
let salir = false
let cuentas = []
let movimientos = []

const Menu = document.getElementById("Menu")
const Inputs = document.getElementById("Inputs")
const Mensajes = document.getElementById("Mensajes")
const container = document.getElementById("container")

const MenuPrincipal = ` <div id="Menu">
<p>===========Menu============</p>
<p>=1. Crear un usuario       =</p>
<p>=2. Consignar en la cuenta =</p>
<p>=3. Retirar dinero         =</p>
<p>=4. Pagar Servicios        =</p>
<p>=5. Mostrar movimientos    =</p>
<p>=0. Salir                  =</p>
</div>
<div id="Inputs">
<input id="respuesta" placeholder="que desea hacer" type="text">
<input id="btn" type="button" value="Seleccionar">
</div>
<div id="Mensajes">

</div>`

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

// function menu (){
//     let respuesta = prompt(`
//         =========== Menu Bancario =============  
//         ==================                                   
//         1. Crear un usuario                
//         2. Consignar en la cuenta         
//         3. Retirar dinero                  
//         4. Pagar Servicios                
//         5. Mostrar movimientos              
//         0. Salir                            
        
//         =======================================
//         `)
//         return respuesta
//         }
        


function login(){
    Menu.innerHTML = "<p>======CREACION DE USUARIO==========</p>"
    Inputs.innerHTML = `<input id='numeroDocumento' placeholder='numero de documento' type='text'>
    <input id='nombre' placeholder='Nombre' type='text'>
    <input id='clave' placeholder='Clave' type='text'>
    <input id="enviar" type="button" value="Enviar">
    <input id="regresar" type="button" value="Regresar">
    `

    const enviar = document.getElementById("enviar")
    const Regresar = document.getElementById("regresar")
    enviar.addEventListener("click", () => {
        console.log("btn enviar")
        const nombre = document.getElementById("nombre")
        const clave = document.getElementById("clave")
        const numeroDocumento = document.getElementById("numeroDocumento")
        // let numeroDocumento = prompt("Ingrese su numero de documento")
        // let nombre = prompt("Ingrese su nombre")
        // let clave = prompt("Ingrese su clave")
        count += 1
        // agregarUsuario(nombre,numeroDocumento)
        cuentas.push({
            "numeroDocumento": numeroDocumento.value,
            "nombre": nombre.value,
            "clave": clave.value,
            "numCt": count.toString(),
            "saldo": 0
        })
    
        movimientos.push({
            "numCt": count.toString(),
            "movimientos": []
        })
    
        console.log(cuentas)
        console.log(movimientos)
        Mensajes.innerHTML = `<p>se creara una cuenta con estos datos </p>
        <p>numero de documento: ${numeroDocumento.value}</p>
        <p>nombre: ${nombre.value}</p>
        <p>clave: ${clave.value}</p>
        <p>numero de cuenta: ${count.toString()}</p>
        <p>saldo: $0</p>
        <p>cuenta creada exitosamente</p>
    `

    })
    Regresar.addEventListener("click", () => {
        console.log("regresar")
        container.innerHTML = MenuPrincipal
    })

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

function retiro (recibo){
    const respuesta1 = prompt("Ingrese su numero de cuenta")
    const respuesta2 = prompt("Ingrese su clave")
    let encontrada = false
    let mensaje = "cuanto dinero desea retirar?"
    let referencia = ""
    let tipo = "retiro"
    cuentas.forEach(cuenta => {
        if(cuenta["numCt"] === respuesta1 && cuenta["clave"] === respuesta2){
            alert(`la cuenta a la que ingreso es 
            numero de cuenta: ${cuenta["numCt"]}
            nombre: ${cuenta["nombre"]}
            `)
            let descripcion = "se ha retirado "
            if(recibo == "recibo"){
                tipo = "Pago servicios"
                mensaje = "cual es el valor del recibo"
                let respuesta = prompt(`
                    =========== Recibos =============  
                    ==================                                   
                    1. Energia                
                    2. Agua         
                    3. Gas                                       
                    =======================================
                    `)
                referencia = prompt("cual es la referencia del recibo")
                switch (respuesta) {
                    case "1":
                        descripcion = "pago de servicio de energia por "
                        break;
                    case "2":
                        descripcion = "pago de servicio del agua por "
                        break;
                    case "3":
                        descripcion = "pago de servicio del gas por "
                        break;
                
                    default:
                        break;
                }
            }
            saldo = prompt(mensaje)
            valor = Number(saldo)
            if(cuenta["saldo"] < valor){
                alert("no tiene suficiente saldo")
            }else{
            cuenta["saldo"] -= valor
            movimientos.forEach(movimiento => {
                if(movimiento["numCt"] === cuenta["numCt"]){
                    movimiento["movimientos"].push(
                        {
                            "tipo": tipo,
                            "referencia": referencia,
                            "descripcion":  descripcion + saldo,
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
        alert("transaccion exitosa")
    }else alert("cuenta no encontrada intente de nuevo")
}



function mostrarMovimientos(){
    const respuesta1 = prompt("Ingrese su numero de cuenta")
    const respuesta2 = prompt("Ingrese su clave")
    let encontrada = false
    let mensaje = "no ahi movimientos registrados"
    cuentas.forEach(cuenta => {
        if(cuenta["numCt"] === respuesta1 && cuenta["clave"] === respuesta2){
            alert(`la cuenta a la que ingreso es 
            numero de cuenta: ${cuenta["numCt"]}
            nombre: ${cuenta["nombre"]}
            
            `)
            encontrada = true
            movimientos.forEach(movimiento => {
                if(movimiento["numCt"] === cuenta["numCt"]){
                    console.log("hola")
                    console.log(movimiento.movimientos)
                    movimiento.movimientos.forEach(Element => {
                        mensaje = "No ahi mas movimientos registrados"
                        alert(`tipo: ${Element.tipo},
                        referencia: ${Element.referencia},
                        descripcion: ${Element.descripcion},
                        saldo: ${Element.saldo}`)
                    })
    }
})
    }
    });
    if(encontrada){
        alert(mensaje)
    }else alert("cuenta no encontrada intente de nuevo")
}

// while (!salir) {
    const respuesta = document.getElementById("respuesta") 
    const btn = document.getElementById("btn")
    let arriba = ""
    btn.addEventListener("click", () => {
        console.log(respuesta.value)
        switch (respuesta.value) {
            case "1":
                login();
                break;
            case "2":
                consignacion()
                break;
            case "3":
                retiro()
                break;
            case "4":
                retiro("recibo")
                break;
            case "5":
                mostrarMovimientos()
                break;
            case "0": 
            alert("saliendo....")
            salir = true;
            break;
            default:
                // alert("seleccione una opcion correcta")
                break
        }    
    })
// }
    