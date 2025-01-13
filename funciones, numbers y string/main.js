// const suma = function(n1,n2,n3){
//     return n1+n2+n3;
// }

// const s = suma(1,5,8)
// console.log(s)

// function cuadrado(numero){
//     return numero*numero;
// }

// const numeros = [1,2,3,4,5];

// const nuevosNumeros = numeros.map(cuadrado);

// console.log(nuevosNumeros)
  // -------------arrow funcion---------------
// const suma = (n1,n2) => {return n1 + n2}

//------------numeros 
//todo son numero y asi sean decimales o enteros

//------------strings------------
const msj = "Esta clase es una nota y es sencilla de aprender!"
console.log(msj)
console.log(msj.length)                         //largo de la cadena
console.log(msj.slice(5, 11))                   //obtiene la parte que le pidamos del string
console.log(msj.replaceAll("clase", "Moto"))    //busca lo primero que le pasamos y lo reemplaza por lo segundo que le pasamos, pero solo la primera coincidencia
console.log(msj.replaceAll("es", "tiene"))      //lo mismo que replace pero reemplaza todas las coincidencias
console.log(msj.trim)                           //quita los espacion innecesarios del principio y el final
console.log(msj.charAt(5))                      //es para agarra el valor pasandole el index
console.log(msj.indexOf("cla"))                 //nos indica en que posicion empieza lo que le pasamos
console.log(msj.indexOf("cla"))                 //nos indica en que posicion empieza lo que le pasamos
console.log(msj.search("cla"))                  //busca una cadena y nos dice donde
console.log(msj.match("cla"))                   //busca una cadena y nos dice donde
console.log(msj.includes("us"))                 //si encuentra lo que le pasamos devuelve un TRUE pero si  no lo encuentra devuelve FALSE, osea devuelve un booleano
console.log(msj.startsWith("cla"))              //busca si la cadena empieza por lo que se le pasa


console.log(Math.floor(Math.random()))

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(99999));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1