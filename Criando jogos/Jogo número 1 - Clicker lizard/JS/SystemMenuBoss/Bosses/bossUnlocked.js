import { getLevel } from "../../../script.js"
import { bossGoblin, bossLobo, bossUrso, fightPersonBossGoblin, fightPersonBossLobo, fightPersonBossUrso } from "../ScriptsBosses/scriptsBosses.js"

export function attButtonBosses() {
    // Att Boss Goblin
    if (bossGoblin.getVivo == "Vivo") {
        if (getLevel() >= bossGoblin.getLevelUnlocked) {
            document.getElementById("idImgBossGoblin").src = "./img/Goblin.png"
            document.getElementById("bossGoblin").addEventListener("click", fightPersonBossGoblin)
        } else {
            document.getElementById("idImgBossGoblin").src = "./img/Level-2.png"
            document.getElementById("bossGoblin").removeEventListener("click", fightPersonBossGoblin)
        }
    } else {
        console.log("Boss Já derrotado.. ir para o próximo boss")
        document.getElementById("idImgBossGoblin").src = "./img/Correct.png"
    }
    // Att Boss Lobo
    if (bossLobo.getVivo == "Vivo") {
        if (getLevel() >= bossLobo.getLevelUnlocked) {
            document.getElementById("idImgBossLobo").src = "./img/Lobo.png"
            document.getElementById("bossLobo").addEventListener("click", fightPersonBossLobo)
        } else {
            document.getElementById("idImgBossLobo").src = "./img/Level-5.png"
            document.getElementById("bossLobo").removeEventListener("click", fightPersonBossLobo)
        }
    } else {
        console.log("Boss Já derrotado.. ir para o próximo boss")
        document.getElementById("idImgBossLobo").src = "./img/Correct.png"
    }
    // Att Boss Urso
    if (bossUrso.getVivo == "Vivo") {
        if (getLevel() >= bossUrso.getLevelUnlocked) {
            document.getElementById("idImgBossUrso").src = "./img/Urso.png"
            document.getElementById("bossUrso").addEventListener("click", fightPersonBossUrso)
        } else {
            document.getElementById("idImgBossUrso").src = "./img/level-12.png"
            document.getElementById("bossUrso").removeEventListener("click", fightPersonBossUrso)
        }
    } else {
        console.log("Boss Já derrotado.. ir para o próximo boss")
        document.getElementById("idImgBossUrso").src = "./img/Correct.png"
    }
}