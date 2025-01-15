// const arr = [1, 'Juan', true, {"ciudad": "Barranquilla"}];

// //------.push()------
// //Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
// arr.push(["a", "b"]);

// console.log(arr)

// arr.push(2,3,4);

// //------.pop()------
// //Elimina el último elemento de un array y lo devuelve.
// console.log(arr.pop())

// arr.splice(3, 1, "Nuevo 1", "Nuevo 2");


// const arr = ["uno", "dos", "tres", "cuatro", "cinco"];
// //------------.toString()------------
// //Devuelve un string con los elementos del array separados por comas.
// // console.log(arr.toString());
// //----------------.join()----------------
// //Devuelve un string con los elementos del array separados por el separador que se le pase como argumento.
// console.log(arr.join("**"));

// //----------------.fill()----------------
// //Rellena todos los elementos de un array con un valor estático.
// const arr3 = new Array(5).fill("X");
// //-------------.preventExtensions()-------------
// //Previene que se añadan más elementos al array.
// Object.preventExtensions(arr3);
// // arr3.push("YZ");
// // arr3.pop();
// arr3[2] = 1
// console.log(arr3);

// const arr = [1, 'Juan', true, {"ciudad": "Barranquilla"}];
// //cambiar valor de un elemento
// arr[3].ciudad = "Bogotá";
// //agregar un nuevo elemento
// arr[3].zipcode = "123456";

// console.log(arr)

// const arr = ["uno", "dos", "tres","dos", "cuatro", "cinco","dos"];
// //-------------.indexOf()-------------
// //Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.
// console.log(arr.indexOf("dos",1));
// //-------------.lastIndexOf()-------------
// //Devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.
// console.log(arr.lastIndexOf("dos"));

// //-------------.find()-------------
// //Devuelve el primer elemento del array que cumple con la condición dada.
// const elemento = arr.find((val, i) => val == "tres");
// console.log(elemento);

// const arr2 = [
//     {id: 1, nombre: "Pepe"},
//     {id: 2, nombre: "Maria"},
//     {id: 3, nombre: "Juan"},
//     {id: 4, nombre: "Peter"},
//     {id: 5, nombre: "Santiago"},
//     {id: 6, nombre: "Peter"},
// ]

// const elemento1 = arr2.find((val, i) => val.nombre == "Peter");
// console.log(elemento1);


// const arr4 = [1,4,10,2,5,3]
// //------------.sort()-------------
// //Ordena los elementos de un array localmente y devuelve el array.
// arr4.sort((a,b) => a - b);

// //------------.reverse()-------------
// //Invierte el orden de los elementos de un array.
// arr4.reverse()
// console.log(arr4);

// //---------------set----------------
// // es para crear conjuntos y en los conjuntos no se pueden repetir elementos
// const conj = new Set();
// const lista =  ["camilo",
// "laura",
// "camilo",
// "pedro",
// "laura",
// "laura",
// "pedro"
// ];

// for(val of lista){
//     conj.add(val);
// }

// conj.clear()

// console.log(conj.size);


//-----------------Map----------------
// llave = {id: 1}
// llave2 = [1,2,3]
// const mapa = new Map();
// mapa.set("nombre", "Juana");
// mapa.set(llave ,[1,2,3]);
// console.log(mapa.get("nombre"));
// console.log(mapa.get(llave));
// console.log(mapa.has(llave2));
// console.log(mapa.delete(llave));
// console.log(mapa);

const form = document.querySelector("form");

console.log(form)

const formD = new FormData(form);

formD.append("edad", 38);
formD.append("nombre", "luis");
console.log(formD)

console.log(formD.has("edad"))
console.log(formD.getAll("nombre"))
formD.delete("edad")

console.log(formD)



