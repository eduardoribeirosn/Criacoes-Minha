import { attButtonBosses } from "../Bosses/bossUnlocked.js"

// Função para colocar algum delay
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function fight(person, boss) {
    while (true) {

        // if para ver quem começa de acordo com a velocidade do personagem contra o boss
        if (boss.getVelocidade >= person.getVelocidade) {

            console.log(`--- ${boss.getName} VS Personagem ---`)

            // if para ver se o boss tem mais dano que a defesa do personagem
            if (boss.getDano > person.getDefesa) {
                person.setVida = person.getVida - (boss.getDano - person.getDefesa)
                console.log(`O ${boss.getName} Atacou e deu ${(boss.getDano - person.getDefesa)} de Dano!`)
            } else {
                console.log(`O ${boss.getName} Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            // Verificar se o Player morreu
            if (person.getVida <= 0) {
                console.log(`Personagem Morreu! ${boss.getName} Venceu a Batalha!`)
                return
            }
            // if para ver se o personagem tem mais dano que a defesa do boss
            if (person.getDano > boss.getDefesa) {
                boss.setVida = boss.getVida - (person.getDano - boss.getDefesa)
                console.log(`O Personagem atacou e deu ${(person.getDano - boss.getDefesa)} de Dano!`)
            } else {
                console.log(`O Personagem Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            //  Verificar se o Boss morreu
            if (boss.getVida <= 0) {
                console.log(`${boss.getName} Morreu! Personagem Venceu a Batalha!`)
                boss.setVivo = "Derrotado"
                attButtonBosses()
                return
            }
        } else {

            console.log(`--- Personagem VS ${boss.getName} ---`)

            // if para ver se o personagem tem mais dano que a defesa do boss
            if (person.getDano > boss.getDefesa) {
                boss.setVida = boss.getVida - (person.getDano - boss.getDefesa)
                console.log(`O Personagem atacou e deu ${(person.getDano - boss.getDefesa)} de Dano!`)
            } else {
                console.log(`O Personagem Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            //  Verificar se o Boss morreu
            if (boss.getVida <= 0) {
                console.log(`${boss.getName} Morreu! Personagem Venceu a Batalha!`)
                boss.setVivo = "Derrotado"
                attButtonBosses()
                return
            }
            // if para ver se o boss tem mais dano que a defesa do personagem
            if (boss.getDano > person.getDefesa) {
                person.setVida = person.getVida - (boss.getDano - person.getDefesa)
                console.log(`O ${boss.getName} Atacou e deu ${(boss.getDano - person.getDefesa)} de Dano!`)
            } else {
                console.log(`O ${boss.getName} Atacou e deu 0 de Dano!`)
            }
            
            await delay(1000)

            // Verificar se o Player morreu
            if (person.getVida <= 0) {
                console.log(`Personagem Morreu! ${boss.getName} Venceu a Batalha!`)
                return
            }
        }
    }
}