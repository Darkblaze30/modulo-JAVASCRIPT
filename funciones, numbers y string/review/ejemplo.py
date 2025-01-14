print(""""
      ==============================================
      ======= Welcome to picas and fijas game ======
      ==============================================
      """)

NUMERO = "9410"
numeroEncontrado = False
numeroEvaluar = ""

while not numeroEncontrado:
    numContrincante = input("Ingrese el numero a evaluar: ")
    numeros_repetidos = False
    for num in numContrincante:
        if numContrincante.count(num) > 1:
            numeros_repetidos = True
    if numeros_repetidos:
        print("No se pueden ingresar numeros repetidos")
    else:
        picas = 0
        fijas = 0

        if NUMERO == numContrincante:
            numeroEncontrado = True
        else:
            #Buscar las fijas
            for i in range(0, 4):
                x = NUMERO.find(numContrincante[i])
                if x == i:
                    fijas += 1
                elif x != -1:
                    picas += 1
            print(f"Tiene {picas} picas y {fijas} fijas.")

        #para arreglar
        #numeroEncontrado = True

    if numeroEncontrado:
        print( "Has encontrado el numero!")