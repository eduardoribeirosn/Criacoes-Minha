let sumPont = 1

let nivelAutoC = 0
let upgradeAutoC = 0

let upgradePont = 1

let level = 1

let idFuncAutoC

import { clickButtonPonts, attButtonPontos, getPonts, getIntPonts } from "./JS/clickerButtonPontsGroup.js"
import { upgradePonts, attUpgradePonts, getValueUpPonts } from "./JS/upgradePontsGroup.js"
import { upgradeAutoClick, autoClick, attUpgradeAutoC, getValueUpAutoClick } from "./JS/upgradeAutoClickGroup.js"
import { upgradeLeveis, attUpgradeLeveis, getValueUpLeveis } from "./JS/systemLeveisGroup.js"

import { menuUpgradeStats, menuStats, menuBoss} from "./JS/SystemMenuBoss/menus.js"
import { fightPersonBossGoblin, fightPersonBossLobo, fightPersonBossUrso } from "./JS/SystemMenuBoss/ScriptsBosses/scriptsBosses.js"
import { attButtonBosses } from "./JS/SystemMenuBoss/Bosses/bossUnlocked.js"

document.getElementById("buttonPontos").addEventListener("click", clickButtonPonts)
document.getElementById("buttonUpPontos").addEventListener("click", upgradePonts)
document.getElementById("buttonUpAutoC").addEventListener("click", upgradeAutoClick)
document.getElementById("buttonUpLeveis").addEventListener("click", upgradeLeveis)

document.getElementById("buttonUpgradeStatsOpen").addEventListener("click", menuUpgradeStats)
document.getElementById("buttonUpgradeStatsClose").addEventListener("click", menuUpgradeStats)
document.getElementById("buttonStatsOpen").addEventListener("click", menuStats)
document.getElementById("buttonStatsClose").addEventListener("click", menuStats)
document.getElementById("buttonBossOpen").addEventListener("click", menuBoss)
document.getElementById("buttonBossClose").addEventListener("click", menuBoss)


document.getElementById("bossLobo").addEventListener("click", fightPersonBossLobo)
document.getElementById("bossUrso").addEventListener("click", fightPersonBossUrso)

// Botão para adicionar Pontos | Alterar texto de ganhar pontos
attButtonPontos()
// -----

// Valor para fazer upgrade de Level | Alterar texto de Upgrade de Level
attUpgradeLeveis()
// -----

// Valor para fazer upgrade de ganhar Pontos | Alterar texto de upgrade de ganhar Pontos
attUpgradePonts()
// -----

// Valor para fazer upgrade no Auto Click | Alterar texto de upgrade do Auto Click
attUpgradeAutoC()
// -----

// Valor para atualizar as imagens dos bosses | Alterar Imagem dos bosses para Batalha
attButtonBosses()
// -----


// Funções para pegar e modificar váriveis deste arquivo...
export function getSumPontOrigin() {
    return sumPont
}

export function getSumPont() {
    if (level < 5) {
        return sumPont
    } else if  (level < 10) {
        return (sumPont * 1.5)
    } else {
        return (sumPont * 2)
    }
}

export function setSumPont(newSumPont) {
    sumPont = newSumPont
}

export function getNivelAutoC() {
    return nivelAutoC
}

export function setNivelAutoC(newNivelAutoC) {
    nivelAutoC = newNivelAutoC
}

export function getUpgradePont() {
    return upgradePont
}

export function setUpgradePont(newUpgradePont) {
    upgradePont = newUpgradePont
}

export function getUpgradeAutoC() {
    return upgradeAutoC
}

export function setUpgradeAutoC(newUpgradeAutoC) {
    upgradeAutoC = newUpgradeAutoC
}

export function getIdFuncAutoC() {
    return idFuncAutoC
}

export function setIdFuncAutoC(newIdFuncAutoC) {
    idFuncAutoC = newIdFuncAutoC
}

export function getLevel() {
    return level
}

export function setLevel(newLevel) {
    level = newLevel
}