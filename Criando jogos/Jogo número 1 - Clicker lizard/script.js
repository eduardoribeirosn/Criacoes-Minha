let sumPont = 1
let upgradePont = 0


// Botão para adicionar Pontos | Alterar texto de ganhar pontos
attButtonPontos()
// -----

// Valor para fazer upgrade de ganhar Pontos | Alterar texto de upgrade de ganhar Pontos
attUpgradePonts()
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

// Fazer upgrade de ganhar Pontos
function upgradePonts() {
    if (getIntPonts() >= getValueUpPonts()) {
        getPonts().textContent = getIntPonts() - getValueUpPonts
        sumPont += 1
        upgradePont += 1
        attUpgradePonts()
        attButtonPontos()
    }
}

// Atualizar o preço para Upgrade de ganhar Pontos
function attUpgradePonts() {
    document.getElementById("valorUpPontos").textContent = getValueUpPonts()
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