let count = 0
let salir = false
let cuentas = []
let movimientos = []

const Menu = document.getElementById("Menu")
const Inputs = document.getElementById("Inputs")
const Mensajes = document.getElementById("Mensajes")
const container = document.getElementById("container")
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



function consignacion() {
    container.innerHTML = `
    <div id="Menu">
        <p>====== Consignación ======</p>
    </div>
    <div id="Inputs">
        <input id="respuesta" placeholder="Número de documento o número de cuenta" type="text">
        <input id="enviar" type="button" value="Enviar">
        <input id="regresar" type="button" value="Regresar">
    </div>
    <div id="Mensajes"></div>
    `;

    const codigo = document.getElementById("respuesta");
    const enviar = document.getElementById("enviar");
    const regresar = document.getElementById("regresar");
    const mensaje = document.getElementById("Mensajes");

    enviar.addEventListener('click', () => {
        console.log("Buscando cuenta con:", codigo.value);
        let cuentaEncontrada = cuentas.find(cuenta => 
            cuenta["numCt"] === codigo.value || cuenta["numeroDocumento"] === codigo.value
        );

        if (cuentaEncontrada) {
            console.log("Cuenta encontrada:", cuentaEncontrada);
            mensaje.innerHTML = `
                <p>La cuenta a la que va a hacer la consignación es ${cuentaEncontrada["numCt"]}</p>
                <input id="saldo" type="text" placeholder="¿Cuánto desea consignar?">
                <input id="enviar2" type="button" value="Enviar">
            `;

            const saldo = document.getElementById("saldo");
            const enviar2 = document.getElementById("enviar2");

            enviar2.addEventListener('click', () => {
                let valor = Number(saldo.value);

                if (isNaN(valor) || valor <= 0) {
                    mensaje.innerHTML = `<p style="color:red;">Ingrese un valor válido para consignar.</p>`;
                    return;
                }

                cuentaEncontrada["saldo"] += valor;

                let movimiento = movimientos.find(mov => mov["numCt"] === cuentaEncontrada["numCt"]);
                if (movimiento) {
                    movimiento["movimientos"].push({
                        "tipo": "consignación",
                        "referencia": "",
                        "descripcion": `Se ha consignado $${valor}`,
                        "saldo": `${cuentaEncontrada['saldo']}`
                    });
                }

                console.log(movimientos);
                mensaje.innerHTML = `<p style="color:green;">Consignación exitosa. Nuevo saldo: $${cuentaEncontrada['saldo']}</p>`;
            });

        } else {
            console.log("Cuenta no encontrada.");
            mensaje.innerHTML = `<p style="color:red;">No se encontró una cuenta o no se pudo hacer la consignación.</p>`;
        }
    });

    regresar.addEventListener('click', () => {
        renderizarMenu();  // Regresar al menú principal correctamente
    });
}

function retiro(recibo) {
    container.innerHTML = `
        <div id="Menu">
            <p>====== ${recibo ? "Pago de Servicios" : "Retiro"} ======</p>
        </div>
        <div id="Inputs">
            <input id="numCuenta" placeholder="Número de cuenta" type="text">
            <input id="clave" placeholder="Clave" type="password">
            <input id="enviar" type="button" value="Ingresar">
            <input id="regresar" type="button" value="Regresar">
        </div>
        <div id="Mensajes"></div>
    `;

    const enviar = document.getElementById("enviar");
    const regresar = document.getElementById("regresar");
    const mensaje = document.getElementById("Mensajes");

    enviar.addEventListener("click", () => {
        const numCuenta = document.getElementById("numCuenta").value;
        const clave = document.getElementById("clave").value;

        // Buscar la cuenta
        let cuenta = cuentas.find(c => c.numCt === numCuenta && c.clave === clave);

        if (!cuenta) {
            mensaje.innerHTML = `<p style="color:red;">Cuenta no encontrada o clave incorrecta.</p>`;
            return;
        }

        // Si es pago de servicios, mostrar opciones adicionales
        let tipo = "retiro";
        let descripcion = "Se ha retirado ";
        let referencia = "";
        let mensajeRetiro = "¿Cuánto dinero desea retirar?";

        let reciboHTML = ""; // Variable para almacenar HTML adicional si es pago de servicios

        if (recibo === "recibo") {
            tipo = "Pago servicios";
            mensajeRetiro = "¿Cuál es el valor del recibo?";

            reciboHTML = `
                <p>Seleccione el tipo de recibo:</p>
                <select id="tipoRecibo">
                    <option value="1">Energía</option>
                    <option value="2">Agua</option>
                    <option value="3">Gas</option>
                </select>
                <input id="referencia" type="text" placeholder="Referencia del recibo">
            `;
        }

        // Mostrar input para ingresar monto y botón confirmar
        mensaje.innerHTML = `
            <p>Cuenta encontrada: ${cuenta.nombre} (${cuenta.numCt})</p>
            ${reciboHTML}
            <input id="saldo" type="text" placeholder="${mensajeRetiro}">
            <input id="confirmar" type="button" value="Confirmar">
            <input id="regresar2" type="button" value="Regresar">
        `;

        // Si es pago de servicios, actualizar la descripción dependiendo del recibo seleccionado
        if (recibo === "recibo") {
            document.getElementById("tipoRecibo").addEventListener("change", (e) => {
                switch (e.target.value) {
                    case "1": descripcion = "Pago de servicio de energía por "; break;
                    case "2": descripcion = "Pago de servicio de agua por "; break;
                    case "3": descripcion = "Pago de servicio de gas por "; break;
                }
            });
        }

        const confirmar = document.getElementById("confirmar");
        const regresar2 = document.getElementById("regresar2");

        confirmar.addEventListener("click", () => {
            let saldo = Number(document.getElementById("saldo").value);
            referencia = recibo === "recibo" ? document.getElementById("referencia").value : "";

            if (isNaN(saldo) || saldo <= 0) {
                mensaje.innerHTML += `<p style="color:red;">Ingrese un valor válido.</p>`;
                return;
            }

            if (cuenta.saldo < saldo) {
                mensaje.innerHTML += `<p style="color:red;">No tiene suficiente saldo.</p>`;
                return;
            }

            cuenta.saldo -= saldo;

            let movimiento = movimientos.find(mov => mov.numCt === cuenta.numCt);
            if (movimiento) {
                movimiento.movimientos.push({
                    "tipo": tipo,
                    "referencia": referencia,
                    "descripcion": `${descripcion} $${saldo}`,
                    "saldo": `${cuenta.saldo}`
                });
            }

            mensaje.innerHTML = `
                <p style="color:green;">Transacción exitosa. Nuevo saldo: $${cuenta.saldo}</p>
                <input id="regresar3" type="button" value="Regresar">
            `;

            document.getElementById("regresar3").addEventListener("click", () => {
                renderizarMenu();
            });
        });

        regresar2.addEventListener("click", () => {
            renderizarMenu();
        });
    });

    regresar.addEventListener("click", () => {
        renderizarMenu();
    });
}




function mostrarMovimientos() {
    container.innerHTML = `
        <div id="Menu">
            <p>====== Movimientos ======</p>
        </div>
        <div id="Inputs">
            <input id="numCuenta" placeholder="Número de cuenta" type="text">
            <input id="clave" placeholder="Clave" type="password">
            <input id="enviar" type="button" value="Ingresar">
            <input id="regresar" type="button" value="Regresar">
        </div>
        <div id="Mensajes"></div>
    `;

    const enviar = document.getElementById("enviar");
    const regresar = document.getElementById("regresar");
    const mensaje = document.getElementById("Mensajes");

    enviar.addEventListener("click", () => {
        const numCuenta = document.getElementById("numCuenta").value;
        const clave = document.getElementById("clave").value;

        // Buscar la cuenta
        let cuenta = cuentas.find(c => c.numCt === numCuenta && c.clave === clave);

        if (!cuenta) {
            mensaje.innerHTML = `<p style="color:red;">Cuenta no encontrada o clave incorrecta.</p>`;
            return;
        }

        // Buscar movimientos de la cuenta
        let movimientosCuenta = movimientos.find(mov => mov.numCt === cuenta.numCt);

        // Si no hay movimientos
        if (!movimientosCuenta || movimientosCuenta.movimientos.length === 0) {
            mensaje.innerHTML = `
                <p style="color:blue;">No hay movimientos registrados.</p>
                <input id="regresar2" type="button" value="Regresar">
            `;
        } else {
            let htmlMovimientos = `<p><strong>Movimientos de ${cuenta.nombre} (${cuenta.numCt}):</strong></p><ul>`;
            movimientosCuenta.movimientos.forEach(mov => {
                htmlMovimientos += `
                    <li>
                        <strong>Tipo:</strong> ${mov.tipo} <br>
                        <strong>Referencia:</strong> ${mov.referencia || "N/A"} <br>
                        <strong>Descripción:</strong> ${mov.descripcion} <br>
                        <strong>Saldo:</strong> $${mov.saldo}
                    </li>
                    <hr>
                `;
            });
            htmlMovimientos += `</ul>`;

            mensaje.innerHTML = htmlMovimientos + `<input id="regresar2" type="button" value="Regresar">`;
        }

        document.getElementById("regresar2").addEventListener("click", () => {
            renderizarMenu();
        });
    });

    regresar.addEventListener("click", () => {
        renderizarMenu();
    });
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

function renderizarMenu() {
    container.innerHTML = `
        <h2>Banco ACME</h2>

        <div class="menu">
            <p>1. Crear un usuario</p>
            <p>2. Consignar en la cuenta</p>
            <p>3. Retirar dinero</p>
            <p>4. Pagar Servicios</p>
            <p>5. Mostrar movimientos</p>
            <p>0. Salir</p>
        </div>

        <div class="inputs">
            <input id="respuesta" placeholder="¿Qué desea hacer?" type="text">
            <button id="btn">Seleccionar</button>
        </div>

        <div id="mensajes" class="mensajes">
            <p>Bienvenido al cajero automático</p>
        </div>
    </div> `;

    // Llamar a la función para asignar eventos después de renderizar
    asignarEventosMenu();
}


function asignarEventosMenu() {
    const btn = document.getElementById("btn");
    const respuesta = document.getElementById("respuesta");

    if (btn) {
        btn.addEventListener("click", () => {
            console.log("Opción seleccionada:", respuesta.value);
            switch (respuesta.value) {
                case "1":
                    login();
                    break;
                case "2":
                    consignacion();
                    break;
                case "3":
                    retiro();
                    break;
                case "4":
                    retiro("recibo");
                    break;
                case "5":
                    mostrarMovimientos();
                    break;
                case "0":
                    alert("Saliendo...");
                    salir = true;
                    break;
                default:
                    alert("Seleccione una opción válida.");
                    break;
            }
        });
    }
}


function login() {
    container.innerHTML = `
        <div id="Menu">
            <p>====== CREACIÓN DE USUARIO ======</p>
        </div>
        <div id="Inputs">
            <input id="numeroDocumento" placeholder="Número de documento" type="text">
            <input id="nombre" placeholder="Nombre" type="text">
            <input id="clave" placeholder="Clave" type="password">
            <input id="enviar" type="button" value="Enviar">
            <input id="regresar" type="button" value="Regresar">
        </div>
        <div id="Mensajes"></div>
    `;

    const enviar = document.getElementById("enviar");
    const regresar = document.getElementById("regresar");
    const mensajes = document.getElementById("Mensajes")

    enviar.addEventListener("click", () => {
        console.log("Botón Enviar presionado");

        const nombre = document.getElementById("nombre").value;
        const clave = document.getElementById("clave").value;
        const numeroDocumento = document.getElementById("numeroDocumento").value;

        count += 1;
        cuentas.push({
            "numeroDocumento": numeroDocumento,
            "nombre": nombre,
            "clave": clave,
            "numCt": count.toString(),
            "saldo": 0
        });

        movimientos.push({
            "numCt": count.toString(),
            "movimientos": []
        });

        console.log(cuentas);
        console.log(movimientos);
        mensajes.innerHTML = `<p style="color: green;">Cuenta creada exitosamente</p>`;
    });

    regresar.addEventListener("click", () => {
        console.log("Regresando al menú...");
        renderizarMenu();  // Regresa al menú principal correctamente
    });
}

