import { getSumPont, setSumPont, getUpgradePont, setUpgradePont } from "../script.js"
import { attButtonPontos, getIntPonts, getPonts } from "./clickerButtonPontsGroup.js"

// Fazer upgrade de ganhar Pontos
export function upgradePonts() {
    if (getIntPonts() >= getValueUpPonts()) {
        getPonts().textContent = getIntPonts() - getValueUpPonts()
        setSumPont((getSumPont() + 1))
        setUpgradePont((getUpgradePont() + 1))
        attUpgradePonts()
        attButtonPontos()
    }
}

// Atualizar o preço para Upgrade de ganhar Pontos
export function attUpgradePonts() {
    document.getElementById("valorUpPontos").textContent = getValueUpPonts()
    document.getElementById("levelUpPontos").textContent = getUpgradePont()
}

// Pegar valor para fazer upgrade de ganhar Pontos
export function getValueUpPonts() {
    return (10 + (5 * getUpgradePont()))
}