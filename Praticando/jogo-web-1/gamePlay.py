from script import atacar, todosVivos, morreu

continuar = True
while continuar:
    continuar = todosVivos()
    morreu()
    if continuar == False:
        break
    atacar(1)
    atacar(0)
    