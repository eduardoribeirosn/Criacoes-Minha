import { MyPerson } from "../Personagem/myPerson.js";
import { CreateBoss } from "../Bosses/CreateBoss.js";
import { fight } from "../Fighters/fight.js";

export let myPersonGame = new MyPerson(1, 50000, 1, 20, 100, 101, 0.1)

export let bossGoblin = new CreateBoss(1, "Boss Goblin", 2, "Vivo", 20, 5, 100, 10, 100, 0.01)
export let bossLobo = new CreateBoss(1, "Boss Lobo", 5, "Vivo", 80, 30, 500, 30, 150, 1)
export let bossUrso = new CreateBoss(1, "Boss Urso", 12, "Vivo", 150, 80, 5000, 25, 300, 5)

export function fightPersonBossGoblin() {
    fight(myPersonGame, bossGoblin)
}

export function fightPersonBossLobo() {
    fight(myPersonGame, bossLobo)
}

export function fightPersonBossUrso() {
    fight(myPersonGame, bossUrso)
}