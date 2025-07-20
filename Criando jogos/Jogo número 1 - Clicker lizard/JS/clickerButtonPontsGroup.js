import { getSumPont } from "../script.js"

// Adicionar Pontos a cada clique
export function clickButtonPonts() {
    // Campo dos Pontos
    let spanPontos = document.getElementById("spanPontos")
    // Pontos
    let pontos = parseInt(spanPontos.textContent)
    pontos += getSumPont()

    spanPontos.textContent = pontos

    return pontos
}

// Atualizar o Botão para adicionar Pontos
export function attButtonPontos() {
    let buttonPontos = document.getElementById("buttonPontos")
    if (getSumPont() == 1) {
        buttonPontos.textContent = `Ganhe ${getSumPont()} Ponto`
    } else {
        buttonPontos.textContent = `Ganhe ${getSumPont()} Pontos`
    }
}

// Pegar o campo de Pontos atuais
export function getPonts() {
    return document.getElementById("spanPontos");
}

// Pegar valor inteiro de Pontos atuais
export function getIntPonts() {
    let valuePonts = document.getElementById("spanPontos").textContent
    return parseInt(valuePonts);
}