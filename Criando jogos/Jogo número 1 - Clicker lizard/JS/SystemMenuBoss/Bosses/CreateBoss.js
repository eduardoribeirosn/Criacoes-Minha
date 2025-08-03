export class CreateBoss {
    #level
    #name
    #levelUnlocked
    #vivo
    #dano
    #defesa
    #vida
    #velocidade
    #critico
    #chanceCritico

    constructor(level, name, levelUnlocked, vivo, dano, defesa, vida, velocidade, critico, chanceCritico) {
        this.#level = level
        this.#name = name
        this.#levelUnlocked = levelUnlocked
        this.#vivo = vivo
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

    get getName() {
        return this.#name
    }
    
    set setName(newName) {
        this.#name = newName
        return
    }

    get getLevelUnlocked() {
        return this.#levelUnlocked
    }
    
    set setLevelUnlocked(newLevelUnlocked) {
        this.#levelUnlocked = newLevelUnlocked
        return
    }

    get getVivo() {
        return this.#vivo
    }
    
    set setVivo(newVivo) {
        this.#vivo = newVivo
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