const gameParameters = {
    MAX_LEVEL: 10,
    MAX_STAT: 99,
    MIN_STAT: 10,
}
const gameClasses = {
    Mage: "Маг",
    Knight: "Рыцарь",
    Hero: "Класс",
}

const sendToBattleButton = document.getElementById("sendToBattleButton")
const doSkillButton = document.getElementById("doSkillButton")
const getEnemyButton = document.getElementById("getEnemyButton")
const startBattleButton = document.getElementById("startBattleButton")

let enemyHero = null
let playerHero = null
