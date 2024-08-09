# Dano = a cada 1 ponto, é 1 dano, 
# Vida = a cada 1 ponto, é 1 vida,
# Defesa = a cada 1 ponto, é -0.5 de dano que toma,
# veloAta = 1 ponto = 1 ataque por segundo,
# danoCrit = a cada 1 ponto, +10% de dano,
# chanceCrit = a cada 1 ponto, 1% do critico dar certo

def atacar(player, dano=0):
    listaP[player]['vida'] -= dano
    print(f'O jogador {listaP[player]['nome']} tomou {dano} de dano!')

def todosVivos():
    for player in listaP:
        if player['vida'] <= 0:
            player['vivo'] = False
            return False
    return True



player1 = {
    'nome': 'Eduardo',
    'dano': 2,
    'vida': 10,
    'defesa': 0,
    'veloAta': 1,
    'danoCrit': 1,
    'chanceCrit': 1,
    'vivo': True
}

player2 = {
    'nome': 'Gustavo',
    'dano': 2,
    'vida': 10,
    'defesa': 0,
    'veloAta': 1,
    'danoCrit': 1,
    'chanceCrit': 1,
    'vivo': True
}

listaP = [player1, player2]

