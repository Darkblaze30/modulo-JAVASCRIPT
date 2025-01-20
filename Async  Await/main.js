// const promesa1 = new Promise(function(resolve, reject) {
//     const cumplir = true;
//     const data = [
//       {id:1, username:"pepe", password:"123456"},
//       {id: 2, username:"juana", password:"123456"}
//     ]
//     if (cumplir){
//       setTimeout(()=>{
//         console.log("Promesa ejecutada con exito");
//         resolve(data);
//       }, 3000)
//     }
//     else {
//       console.error("Error en la maquina");
//       reject(null);
//     }
//   })

//   promesa1.then(res=> {
//     console.log("promesa devuelve:",res);
//   })
//   .catch(res =>{
//     console.log("Promsea rechazada",res)
//     reject("Error")
//   })

const prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promsea 1"),5000);
});
const prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("promsea 2"),3000);
});
const prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject("promsea e rechazada"),1000);
});

//-------------------race-----------------
//me devuelve la promesa que se resuelva primero
Promise.race([prom1,prom2,prom3]).then(valor => {
    console.log(valor)
})

//-------------------all-------------------
//devuelve un array con todas las promesas resueltas o un error con la que no
//resolvio
Promise.all([prom1,prom2,prom3]).then(valor => {
    console.log(valor)
})
.catch(res => {
    console.log(res)
})

Promise.any([prom1,prom2,prom3]).then(valor => {
    console.log(valor)
})
.catch(res => {
    console.log(res)
})

async function usuarios(){
    const users=[
        {id: 1, nombre: "Pepe", password: 123456},
        {id: 2, nombre: "Juan", password: 123457},
        {id: 3, nombre: "Maria", password: 123458},
    ] 
    setTimeout(() =>{
        console.log("Resuelto funcion async")
        return users
    });
}


console.log(usuarios())