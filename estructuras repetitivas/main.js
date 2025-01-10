// --------------------------filter---------------------
// const cuentas = [
//   { "cuenta": "001", clave: "123"},
//   { "cuenta": "002", clave: "124"},
//   { "cuenta": "003", clave: "125"},
//   { "cuenta": "004", clave: "126"},
// ]

// const cta = prompt("cuenta")
// const clv = prompt("clave")

// const login = cuentas.filter(cuenta => {
//   return cuenta.cuenta == cta && cuenta.clave == clv
// })

// if(login.length > 0){
//   alert("login Exitoso")
// }
// else{
//   alert("Acceso denegado")
// }

// const libros = [
//   {titulo: 'Libro 1', paginas:150},
//   {titulo: 'Libro 2', paginas:220},
//   {titulo: 'Libro 3', paginas:180},
//   {titulo: 'Libro 4', paginas:250},
// ]

// const librosMasDe200Paginas = libros.filter(libro => {
//   return libro.paginas > 150;
// }) 

// console.log(librosMasDe200Paginas)


//-------------------------busqueda codigo----------------------
// const ciudades = {
//   "BAQ" : "Barranquilla",
//   "BGA" : "Bucaramanga",
//   "BOG" : "Bogota",
//   "CLO" : "Cali",
//   "CTG" : "Cartagena",
//   "MDE" : "Medellin",
//   "PEI" : "Pereira",
//   "PSO" : "Pasto",
// }

// const codigo = prompt("Ingrese codigo")
// console.log(codigo)
// code = codigo.toUpperCase()
// console.log(code)
// if (code in ciudades){
//   alert(`la ciudad es ${ciudades[code]}`)
// }
// else{
//   alert("No se encontro la ciudad")
// }


//-----------------------EVERY---------------------
// si todo el arreglo cumple devuelve TRUE de lo contrario devuelve FALSE
// const numeros = [
//   1000,
//   2000,
//   3000,
//   4000
// ]

// alert(numeros.every(numero => {return numero < 3500}))
//----------------------SOME------------------
// si al menos un dato coincide devuelve TRUE si ninguno coincide devuelve FALSE
// const cuentas = [
//   { "cuenta": "001", clave: "123"},
//   { "cuenta": "002", clave: "124"},
//   { "cuenta": "003", clave: "125"},
//   { "cuenta": "004", clave: "126"},
// ]

// const cta = prompt("cuenta")
// const clv = prompt("clave")

// const login = cuentas.some(cuenta => {
//   return cuenta.cuenta == cta && cuenta.clave == clv
// })

// if(login){
//   alert("login Exitoso")
// }
// else{
//   alert("Acceso denegado")
// }


//-------------------------------REDUCE----------------------------
//recorre todo el array y hace cada cosa por este mismo
// const x = [5,4,9,1,10]

// const resultado = x.reduce(function(total,valor){
//   return total + valor
// })

// alert(resultado)

//----------------------------MAP---------------------------------
const x = [5,4,9,1,10]

const resultado = x.map(numero => {return numero * 2})

console.log(resultado)