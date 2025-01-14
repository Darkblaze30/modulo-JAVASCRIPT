// var saldo = 0

// const cuentaBancaria = {
//     saldo:0,
//     numeroCuenta:0,
//     movimientos:[],
//     titular:{
//         nombre:"",
//         identificacion:"",
//         dirrecion:"",
//         telefono:"",
//         email:"",
//     },
//     activa:true,
//     consignar:function(monto){
//         this.saldo += monto;
//         return {saldo:this.saldo,monto};
//     },
//     retirar:function(monto){},
//     inactivar(){},
//     cerrar:() => {
//         let x = "***";
//         return this.x
//     }
// }

// cuentaBancaria.numeroCuenta = 1000
// console.log(cuentaBancaria.numeroCuenta);
// console.log(cuentaBancaria.consignar(500));
// console.log(saldo);


// function hola(){
//     return this.saldo
// }

// const bye = () =>{
//     return this.saldo
// }

// console.log(hola())
// console.log(cuentaBancaria())


//-------------Json.stringify--------------
const person = {
    "nombre": "Eduardo",
    edad:38,
    telefono: 123456789,
    direccion:{
        ciudad: "Cali",
        zipCode: 5485
    }
};
// function cambio (llave, valor) {
//     if(typeof valor === 'number'){
//         return String(valor)}
//     else return valor
// }
// const convertir = (llave, valor) => {
//     if(!isNaN(valor)){
//         return Number(valor)}
//     else return valor
// }
// const jsonObj = JSON.stringify(person, cambio, 4)   //recibe tres parametros, el primero es el objeto a pasar a JSON, el segundo es una funcion con 
// console.log(jsonObj, person)                        //la que podemos reemplazar datos, la tercera la forma de organizacio
// console.log(JSON.parse(jsonObj, convertir))         //.parse hace que un objeto JSON paso a objeto de javascript de nuevo

//-----------------------DESTRUCTURACION-----------------------
// ----------------------de objetos--------------------------
// let{nombre: nombreObj, edad, telefono, direccion:{ciudad, zipCode}} = person  //podemos sacar variables de los objetos de esta forma
// console.log(nombreObj, edad, telefono, ciudad)

const arreglo = [1,50,51,10]
const [a,,b,] = arreglo                         //para desctructurar los arrays utilizamos los corchetes
console.log(a,b)

const c = ['a', 'b']
const [] = c
const nuevoArreglo = [...arreglo,...c]          //con los tres puntos podemos traer todo lo de un array y juntarlo con otro
console.log(nuevoArreglo)

const{nombre,...restante} = person              //cuando destructuramos pordemos sacar todas las propiedades que nos hemos sacado en un nuevo objeto
console.log(nombre,restante)

const person2 = {...person}                     //podemos clonar un objeto para no modificar el original