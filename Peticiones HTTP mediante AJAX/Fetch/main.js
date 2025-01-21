const peticion = (fetch("usuarios.json", {
    method: "GET",
    headers: {
        "content-Type": "application/json"
    }
}))
peticion.then(response => {
    return response.json()}).then(data =>   console.log(data))
  

console.log(peticion)
