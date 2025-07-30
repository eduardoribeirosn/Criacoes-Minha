// Abrir e Fechar o Menu de Upgrades de Stats
export function menuUpgradeStats() {
    let areaUpgradeStats = document.getElementById("areaUpgradeStatsId")
    let buttonUpgradeStats = document.getElementById("buttonUpgradeStatsOpen")
    if (areaUpgradeStats.classList.contains("dsNone")) {
        areaUpgradeStats.classList.remove("dsNone")
        buttonUpgradeStats.classList.add("dsNone")
    } else {
        areaUpgradeStats.classList.add("dsNone")
        buttonUpgradeStats.classList.remove("dsNone")
    }
}

// Abrir e Fechar o Menu de Stats
export function menuStats() {
    let areaStats = document.getElementById("areaStatsId")
    let buttonStats = document.getElementById("buttonStatsOpen")
    if (areaStats.classList.contains("dsNone")) {
        areaStats.classList.remove("dsNone")
        buttonStats.classList.add("dsNone")
    } else {
        areaStats.classList.add("dsNone")
        buttonStats.classList.remove("dsNone")
    }
}

// Abrir e Fechar o Menu de Bosses
export function menuBoss() {
    let areaBoss = document.getElementById("areaBossId")
    let buttonBoss = document.getElementById("buttonBossOpen")
    if (areaBoss.classList.contains("dsNone")) {
        areaBoss.classList.remove("dsNone")
        buttonBoss.classList.add("dsNone")
    } else {
        areaBoss.classList.add("dsNone")
        buttonBoss.classList.remove("dsNone")
    }
}