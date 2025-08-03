export class MyPerson {
    #level
    #dano
    #defesa
    #vida
    #velocidade
    #critico
    #chanceCritico

    constructor(level, dano, defesa, vida, velocidade, critico, chanceCritico) {
        this.#level = level
        this.#dano = dano
        this.#defesa = defesa
        this.#vida = vida
        this.#velocidade = velocidade
        this.#critico = critico
        this.#chanceCritico = chanceCritico
    }





    get getLevel() {
        return this.#level
    }
    
    set setLevel(newLevel) {
        this.#level = newLevel
        return
    }
    
    get getDano() {
        return this.#dano
    }
    
    set setDano(newDano) {
        this.#dano = newDano
        return
    }

    get getDefesa() {
        return this.#defesa
    }
    
    set setDefesa(newDefesa) {
        this.#defesa = newDefesa
        return
    }

    get getVida() {
        return this.#vida
    }
    
    set setVida(newVida) {
        this.#vida = newVida
        return
    }

    get getVelocidade() {
        return this.#velocidade
    }
    
    set setVelocidade(newVelocidade) {
        this.#velocidade = newVelocidade
        return
    }

    get getCritico() {
        return this.#critico
    }
    
    set setCritico(newCritico) {
        this.#critico = newCritico
        return
    }

    get getChanceCritico() {
        return this.#chanceCritico
    }
    
    set setChanceCritico(newChanceCritico) {
        this.#chanceCritico = newChanceCritico
        return
    }
}