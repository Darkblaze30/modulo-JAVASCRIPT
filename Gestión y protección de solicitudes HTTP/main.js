const url = new URL("http://spiderman08:12345@subdom.mipagina.com:5234/imagenes/paisajes/escocia.jpg?pais=colombia&region=caribe#cascadas")

console.log(url.host)           //nos da la direccion y el puerto si esta 
console.log(url.hostname)       //nos da solo la direccion
console.log(url.protocol)       // nos da el protocolo, es decir http o alguna otra
console.log(url.origin)         //nos da toda la url
console.log(url.username)       //nos da el nombre de usuario
console.log(url.password)       //nos da la contraseña del usuario
console.log(url.port)           //nos da el puerto
console.log(url.pathname)       //nos devuelve lo que sigue despues del "/"
console.log(url.hash)           //nos devuelve el hash o la almoadilla
console.log(url.href)           //nos da la direccion completa

const query = url.searchParams
query.append("ciudad", "Barranquilla")  //agregamos otra variable al query
query.append("pais", "Peru")    
query.delete("region")                  //borramos una variable del query
query.set("pais", "Venezuela")          //cambiamos el valor de una variable del query
console.log(url.search)
query.sort()                            //organizamos alfabeticamente las query
console.log(url.search)
console.log(query)                      //organizamos alfabeticamente las query
console.log(query.has("pais"))          //nos dice si encuentra o no la variable en query, devuelve un booleano
console.log(query.get("pais"))          //nos trae el valor de la primera variable que encontramos
query.append("pais", "Peru")    
console.log(query.getAll("pais"))       //nos trae el valor de todas las variables que encuentre en un array

console.log([...query.keys()])          //nos trae las keys o llaves de las query
console.log([...query.values()])        //nos trae los valores de las query
console.log([...query.entries()])       //nos trae las llaves y los valores

query.forEach((valor, llave) => {
    console.log(`llave: ${llave} -- valor: ${valor}`)
})

console.log(URL.canParse("https://mariobross.com/juegos"))  //nos dice si la url es correcta o no

const url2 = "https://pataconesdelcaribe.acme.com"
const x = new URL(url2)

if(URL.canParse(url2)){
    console.log("Redirigiendo al dominio...")
}
else{
    console.log("Dominio Invalido!")
}