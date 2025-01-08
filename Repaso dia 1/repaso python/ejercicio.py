from modulos.funcion import calcularPromedio
  
numeros = []

while True:
  num = int(input ("ingrese el numero -->"))
  numeros.append(num)
  rta = input("desea ingresar otro valor? S/N").capitalize()
  if rta == "N":
    break

print(f"el promedio aritmetico es de {calcularPromedio(numeros)}")
