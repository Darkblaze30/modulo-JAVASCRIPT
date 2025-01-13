alert('-----------MENU---------- \n (1)Area de un cuadrado\n (2)Area de un triangulo\n (3)Area de un circulo\n (4)Area de un rombo')
const rta = prompt('-Que desea hacer-')

if(rta == "1"){
    alert(`calculare el area de un cuadrado \n altura de ${ num1 = prompt ("altura") } \n ancho de ${num2 = prompt("ancho")} \n el area de este cuadrado es de ${num1 * num2}`)
}else if (rta == "2"){
    alert(`calculare el area de un triangulo \n altura de ${ num1 = prompt ("altura") } \n ancho de ${num2 = prompt("ancho")} \n el area de este triangulo es de ${num1 * num2 / 2}`)

}else if (rta == "3"){
    alert(`calculare el area de un circulo \n radio de ${ radio = prompt ("radio") } \n el area de este circulo es de ${Math.PI * (radio * radio) }`)

}else if (rta == "4"){
    alert(`calculare el area de un rombo \n diagonal mayor de ${ num1 = prompt ("diagonal mayor") } \n diagonal menor de ${num2 = prompt("diagonal menor")} \n el area de este rombo es de ${num1 * num2 / 2}`)

}else{
    alert("seleccion incorrecta, vuelva a intentar")
}