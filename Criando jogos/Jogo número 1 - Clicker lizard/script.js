let sumPont = 1
let nivelAutoC = 0
let upgradePont = 0
let upgradeAutoC = 0

let idFuncAutoC

import { clickButtonPonts, attButtonPontos, getPonts, getIntPonts } from "./JS/clickerButtonPontsGroup.js"
import { upgradePonts, attUpgradePonts, getValueUpPonts } from "./JS/upgradePontsGroup.js"
import { upgradeAutoClick, autoClick, attUpgradeAutoC, getValueUpAutoClick } from "./JS/upgradeAutoClickGroup.js"

document.getElementById("buttonPontos").addEventListener("click", clickButtonPonts)
document.getElementById("buttonUpPontos").addEventListener("click", upgradePonts)
document.getElementById("buttonUpAutoC").addEventListener("click", upgradeAutoClick)


// Botão para adicionar Pontos | Alterar texto de ganhar pontos
attButtonPontos()
// -----

// Valor para fazer upgrade de ganhar Pontos | Alterar texto de upgrade de ganhar Pontos
attUpgradePonts()
// -----

// Valor para fazer upgrade no Auto Click | Alterar texto de upgrade do Auto Click
attUpgradeAutoC()
// -----



// Funções para pegar e modificar váriveis deste arquivo...
export function getSumPont() {
    return sumPont
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