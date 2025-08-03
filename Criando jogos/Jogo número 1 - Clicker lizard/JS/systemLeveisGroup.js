import { getLevel, setLevel } from "../script.js";
import { attButtonPontos, getIntPonts, getPonts } from "./clickerButtonPontsGroup.js";
import { attButtonBosses } from "./SystemMenuBoss/Bosses/bossUnlocked.js";

// Fazer upgrade dos Leveis
export function upgradeLeveis() {
    if (getIntPonts() >= getValueUpLeveis()) {
        getPonts().textContent = getIntPonts() - getValueUpLeveis()
        setLevel(getLevel() + 1)
        attUpgradeLeveis()
        attButtonPontos()
        attButtonBosses()
    }
}

// Atualizar o preço para Upgrade de subir de Level
export function attUpgradeLeveis() {
    document.getElementById("nivelUpLeveis").textContent = getLevel()
    document.getElementById("valorUpLeveis").textContent = getValueUpLeveis()
}

export function getValueUpLeveis() {
    return (5000 * getLevel())
}