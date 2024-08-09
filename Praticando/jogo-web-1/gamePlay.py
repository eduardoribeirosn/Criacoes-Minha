from script import listaP, atacar, todosVivos

continuar = True
while continuar:
    continuar = todosVivos()
    for player in listaP:
        if player['vida'] <= 0:
            print(f'O jogador {player['nome']} morreu!')
    if continuar == False:
        break
    atacar(1, 2)
    