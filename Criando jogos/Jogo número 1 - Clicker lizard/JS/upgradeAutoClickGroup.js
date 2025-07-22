import { getNivelAutoC, setNivelAutoC, getUpgradeAutoC, setUpgradeAutoC, getIdFuncAutoC, setIdFuncAutoC } from "../script.js"
import { getPonts, getIntPonts, clickButtonPonts } from "./clickerButtonPontsGroup.js"

// Fazer upgrade de Auto Click
export function upgradeAutoClick() {
    if (getIntPonts() >= getValueUpAutoClick()) {
        if (getUpgradeAutoC() < 25) {
            getPonts().textContent = getIntPonts() - getValueUpAutoClick()
            setNivelAutoC((getNivelAutoC() + 1))
            setUpgradeAutoC((getUpgradeAutoC() + 1))
            attUpgradeAutoC()
        }
    }
}

// Auto Click
export function autoClick() {
    if (getIdFuncAutoC()) {
        setTimeout(() => {
            clearInterval(getIdFuncAutoC())
            setIdFuncAutoC(setInterval(() => {
                if (getNivelAutoC() > 0) {
                    clickButtonPonts()
                    console.log(5000 - ((200 * getNivelAutoC()) - 200))
                }
            }, (5000 - ((200 * getNivelAutoC()) - 200)))) 
        }, 0);
    } else {
        setIdFuncAutoC(setInterval(() => {
            if (getNivelAutoC() > 0) {
                clickButtonPonts()
                console.log(5000 - ((200 * getNivelAutoC()) - 200))
            }
        }, (5000 - ((200 * getNivelAutoC()) - 200))))
    }
}

// Atualizar o preço para Upgrade de Auto Click
export function attUpgradeAutoC() {
    document.getElementById("valorUpAutoC").textContent = getValueUpAutoClick()
    document.getElementById("nivelUpAutoC").textContent = getUpgradeAutoC()
    autoClick()
}

// Pegar valor para fazer upgrade de Auto Click
export function getValueUpAutoClick() {
    return (500 + (500 * getUpgradeAutoC()))
}