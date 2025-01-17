const promesa1 = new Promise(function(resolve,reject){
  console.log("Ejecutando promesa ...")
  const cumplir= true;
  if(cumplir){
    setTimeout(() => {
      resolve("Promesa ejecutada con exito")
    },3000);
  }
  else reject ("Promesa rechazada")
})
console.log("")