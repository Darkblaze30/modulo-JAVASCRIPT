

def calcularPromedio(numeros):
  prom = 0
  for numero in numeros:
    prom += numero
  prom /= len(numeros)
  return prom
