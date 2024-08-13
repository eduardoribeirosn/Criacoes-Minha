# Dano = a cada 1 ponto, é 1 dano, 
# Vida = a cada 1 ponto, é 1 vida,
# Defesa = a cada 1 ponto, é -0.5 de dano que toma,
# veloAta = 1 ponto = 1 ataque por segundo,
# danoCrit = a cada 1 ponto, +10% de dano,
# chanceCrit = a cada 1 ponto, 1% do critico dar certo

def atacar(player):
    danoR = (listaP[player]['dano'] - listaP[player]['defesa'])
    listaP[player]['vida'] -= danoR
    if player == 0:
        print(f'O jogador \033[34m{listaP[player]['nome']}\033[m tomou \033[1;31m{danoR}\033[m de dano!\n')
    else:
        print(f'O jogador \033[33m{listaP[player]['nome']}\033[m tomou \033[1;31m{danoR}\033[m de dano!\n')

def todosVivos():
    for player in listaP:
        if player['vida'] <= 0:
            player['vivo'] = False
            return False
    return True

def morreu():
    for player in listaP:
        if player['vida'] <= 0:
            print(f'O jogador {player['nome']} morreu!')



player1 = {
    'nome': 'Eduardo',
    'dano': 2,
    'vida': 10,
    'defesa': 0.75,
    'veloAta': 1,
    'danoCrit': 1,
    'chanceCrit': 1,
    'vivo': True
}

player2 = {
    'nome': 'Gustavo',
    'dano': 2,
    'vida': 10,
    'defesa': 0.5,
    'veloAta': 1,
    'danoCrit': 1,
    'chanceCrit': 1,
    'vivo': True
}

listaP = [player1, player2]

