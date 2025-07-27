// Abrir e Fechar o Menu de Upgrades de Stats
export function menuUpgradeStats() {
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