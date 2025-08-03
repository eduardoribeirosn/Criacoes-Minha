export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function fight(person, boss) {
    while (true) {
        if (boss.getVelocidade >= person.getVelocidade) {
            if (boss.getDano > person.getDefesa) {
                person.setVida = person.getVida - (boss.getDano - person.getDefesa)
                console.log(`O ${boss.getName} Atacou e deu ${(boss.getDano - person.getDefesa)} de Dano!`)
            } else {
                console.log(`O ${boss.getName} Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            if (person.getVida <= 0) {
                console.log(`Personagem Morreu! ${boss.getName} Venceu a Batalha!`)
                return
            }
            if (person.getDano > boss.getDefesa) {
                boss.setVida = boss.getVida - (person.getDano - boss.getDefesa)
                console.log(`O Personagem atacou e deu ${(person.getDano - boss.getDefesa)} de Dano!`)
            } else {
                console.log(`O Personagem Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            if (boss.getVida <= 0) {
                console.log(`${boss.getName} Morreu! Personagem Venceu a Batalha!`)
                boss.setVivo = "Derrotado"
                return
            }
        } else {
            if (person.getDano > boss.getDefesa) {
                boss.setVida = boss.getVida - (person.getDano - boss.getDefesa)
                console.log(`O Personagem atacou e deu ${(person.getDano - boss.getDefesa)} de Dano!`)
            } else {
                console.log(`O Personagem Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            if (boss.getVida <= 0) {
                console.log(`${boss.getName} Morreu! Personagem Venceu a Batalha!`)
                boss.setVivo = "Derrotado"
                return
            }
            if (boss.getDano > person.getDefesa) {
                person.setVida = person.getVida - (boss.getDano - person.getDefesa)
                console.log(`O ${boss.getName} Atacou e deu ${(boss.getDano - person.getDefesa)} de Dano!`)
            } else {
                console.log(`O ${boss.getName} Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            if (person.getVida <= 0) {
                console.log(`Personagem Morreu! ${boss.getName} Venceu a Batalha!`)
                return
            }
        }
    }
}