function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let numero = String(getRandomInt(20))
do{
  numero = String(getRandomInt(99999))
  for (let i = 0; i < numero.length; i++) {
    const element = numero[i];
    element
  }
  console.log("es menor")
  console.log(numero)
  console.log(numero.length)

}while(numero.length < 5 || repetido === true)

console.log(numero);
  // Expected output: 0, 1 or 2

let picas = 0
let fijas = 0
do{
    alert("hola")
    break
}while(true)

const generatedNumbers = new Set();

// Función para generar un número aleatorio de 5 cifras
function generateRandomNumber() {
  if (generatedNumbers.size === 90000) {
    return "Se han generado todos los números posibles de 5 cifras.";
  }

  let number;
  do {
    number = Math.floor(Math.random() * 90000) + 10000; // Números entre 10000 y 99999
  } while (generatedNumbers.has(number));

  generatedNumbers.add(number);
  return number;
}
