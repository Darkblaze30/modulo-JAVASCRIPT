let db;

// Abrir la base de datos o crearla si no existe
const request = indexedDB.open("BancoACME_DB", 1);

// Crear el esquema de la base de datos
request.onupgradeneeded = function(event) {
    db = event.target.result;

    // Crear una object store para usuarios
    const usuariosStore = db.createObjectStore("usuarios", { keyPath: "numCt" });

    // Crear un índice para buscar por número de documento
    usuariosStore.createIndex("numeroDocumento", "numeroDocumento", { unique: true });

    // Crear una object store para movimientos
    const movimientosStore = db.createObjectStore("movimientos", { keyPath: "numCt" });
};

// Manejar errores al abrir la base de datos
request.onerror = function(event) {
    console.error("Error al abrir la base de datos:", event.target.error);
};

// Conexión exitosa
request.onsuccess = function(event) {
    db = event.target.result;
    console.log("Base de datos abierta con éxito.");
};

function agregarUsuario(nombre, numeroDocumento, clave) {
    const transaction = db.transaction(["usuarios"], "readwrite");
    const store = transaction.objectStore("usuarios");
    const nuevoUsuario = {
        numCt: (new Date()).getTime().toString(), // Número de cuenta generado
        nombre: nombre,
        numeroDocumento: numeroDocumento,
        clave: clave,
        saldo: 0
    };

    const request = store.add(nuevoUsuario);

    request.onsuccess = function() {
        console.log("Usuario agregado correctamente.");
    };

    request.onerror = function(event) {
        console.error("Error al agregar usuario:", event.target.error);
    };
}

function agregarMovimiento(numCt, tipo, descripcion, saldo) {
    const transaction = db.transaction(["movimientos"], "readwrite");
    const store = transaction.objectStore("movimientos");

    const movimiento = {
        numCt: numCt,
        movimientos: [{
            tipo: tipo,
            descripcion: descripcion,
            saldo: saldo
        }]
    };

    const request = store.add(movimiento);

    request.onsuccess = function() {
        console.log("Movimiento registrado.");
    };

    request.onerror = function(event) {
        console.error("Error al agregar movimiento:", event.target.error);
    };
}

function obtenerMovimientos(numCt) {
    const transaction = db.transaction(["movimientos"], "readonly");
    const store = transaction.objectStore("movimientos");

    const request = store.get(numCt);

    request.onsuccess = function(event) {
        const result = event.target.result;
        if (result) {
            console.log("Movimientos de la cuenta:", result.movimientos);
        } else {
            console.log("No se encontraron movimientos para esta cuenta.");
        }
    };

    request.onerror = function(event) {
        console.error("Error al obtener los movimientos:", event.target.error);
    };
}


