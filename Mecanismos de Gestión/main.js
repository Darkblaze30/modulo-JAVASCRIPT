localStorage.setItem("nombre", "Juan")                      //agregamos llave y valor al local storage con el setItem
localStorage.setItem("apellido", "Chiquiza")
localStorage.setItem("email", "ejemplo@email.com")
console.log(localStorage.getItem("nombre"))                 //para obtener el valor de una llave se utiliza el getItem
localStorage.removeItem("apellido")                         //para eliminar un valor del local storage
// localStorage.clear()                                     //para eliminar todo lo que halla en el local storage
sessionStorage.setItem("nombre", "Juan")                    //agregamos llave y valor al local storage con el setItem
sessionStorage.setItem("apellido", "Chiquiza")
sessionStorage.setItem("email", "ejemplo@email.com")
console.log(sessionStorage.getItem("nombre"))               //para obtener el valor de una llave se utiliza el getItem
sessionStorage.removeItem("apellido")                       //para eliminar un valor del local storage
// sessionStorage.clear()                                   //para eliminar todo lo que halla en el local storage
let openRequest = indexedDB.open("usuario", 1.0);           //crea una base de datos
let db = openRequest.result;
db.createObjectStore('books', {keyPath: 'id', autoIncrement: true});

console.log(openRequest)
