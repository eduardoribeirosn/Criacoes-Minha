let sumPont = 1
let nivelAutoC = 0
let upgradePont = 0
let upgradeAutoC = 0

let idFuncAutoC


// Botão para adicionar Pontos | Alterar texto de ganhar pontos
attButtonPontos()
// -----

// Valor para fazer upgrade de ganhar Pontos | Alterar texto de upgrade de ganhar Pontos
attUpgradePonts()
// -----

// Valor para fazer upgrade no Auto Click | Alterar texto de upgrade do Auto Click
attUpgradeAutoC()
// -----






// Pegar valor inteiro de Pontos atuais
function getIntPonts() {
    let valuePonts = document.getElementById("spanPontos").textContent
    return parseInt(valuePonts);
}

// Pegar o campo de Pontos atuais
function getPonts() {
    return document.getElementById("spanPontos");
}

// Pegar valor para fazer upgrade de ganhar Pontos
function getValueUpPonts() {
    return (10 + (5 * upgradePont))
}

// Pegar valor para fazer upgrade de Auto Click
function getValueUpAutoClick() {
    return (50 + (50 * upgradeAutoC))
}

// Adicionar Pontos a cada clique
function clickButtonPonts() {
    // Campo dos Pontos
    let spanPontos = document.getElementById("spanPontos")
    // Pontos
    let pontos = parseInt(spanPontos.textContent)
    pontos += sumPont

    spanPontos.textContent = pontos

    return pontos
}

// Auto Click
function autoClick() {
    if (idFuncAutoC) {
        setTimeout(() => {
            clearInterval(idFuncAutoC)
            idFuncAutoC = setInterval(() => {
                if (nivelAutoC > 0) {
                    clickButtonPonts()
                    console.log(5000 - ((200 * nivelAutoC) - 200))
                }
            }, (5000 - ((200 * nivelAutoC) - 200)));
        }, 0);
    } else {
        idFuncAutoC = setInterval(() => {
            if (nivelAutoC > 0) {
                clickButtonPonts()
                console.log(5000 - ((200 * nivelAutoC) - 200))
            }
        }, (5000 - ((200 * nivelAutoC) - 200)));
    }
}


// Fazer upgrade de ganhar Pontos
function upgradePonts() {
    if (getIntPonts() >= getValueUpPonts()) {
        getPonts().textContent = getIntPonts() - getValueUpPonts()
        sumPont += 1
        upgradePont += 1
        attUpgradePonts()
        attButtonPontos()
    }
}

// Fazer upgrade de Auto Click
function upgradeAutoClick() {
    if (getIntPonts() >= getValueUpAutoClick()) {
        if (upgradeAutoC < 25) {
            getPonts().textContent = getIntPonts() - getValueUpAutoClick()
            nivelAutoC += 1
            upgradeAutoC += 1
            attUpgradeAutoC()
        }
    }
}

// Atualizar o Botão para adicionar Pontos
function attButtonPontos() {
    let buttonPontos = document.getElementById("buttonPontos")
    if (sumPont == 1) {
        buttonPontos.textContent = `Ganhe ${sumPont} Ponto`
    } else {
        buttonPontos.textContent = `Ganhe ${sumPont} Pontos`
    }
}

// Atualizar o preço para Upgrade de ganhar Pontos
function attUpgradePonts() {
    document.getElementById("valorUpPontos").textContent = getValueUpPonts()
    document.getElementById("levelUpPontos").textContent = upgradePont
}

// Atualizar o preço para Upgrade de Auto Click
function attUpgradeAutoC() {
    document.getElementById("valorUpAutoC").textContent = getValueUpAutoClick()
    document.getElementById("levelUpAutoC").textContent = upgradeAutoC
    autoClick()
}
