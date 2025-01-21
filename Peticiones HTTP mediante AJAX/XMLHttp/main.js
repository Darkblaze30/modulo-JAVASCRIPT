// const xhr = new XMLHttpRequest()
// console.log(xhr.readyState)
// xhr.responseType = 'json'

// xhr.open('GET', 'usuarios.json');
// console.log(xhr.readyState)

// xhr.setRequestHeader('content-type', 'application/json')

// xhr.onload = function(){
//     if(xhr.status >= 200 && xhr.status < 300){
//         console.log("Peticion exitosa", xhr.status)
//         console.log(xhr.response)
//         console.log(xhr.readyState)
//     }
//     else console.log("Error", xhr.statusText)
// }

// xhr.send()


const client = new XMLHttpRequest()

client.addEventListener("readystatechange", () => {
    console.log("Estado: ", client.readyState)
    const isDone = client.readyState === 4
    const isOk = client.status === 200
    
    if(isDone && isOk) {
        console.log(client.responseText)
    }else console.log("no se a hecho la peticion")
})

client.open('GET', 'usuarios.json');

client.send()