import { cards } from "./cards.js"

export const gameState = {
    playerHP: 3000,
    opponnentHP: 3000,
    currentTurn: "player",
    gameOver: false
}
export function saveCards() {
    localStorage.setItem("mythoriaCollection", JSON.stringify(cards))
}
export function addCard(card) {
    cards.push(card)
    saveCards()
}
export function removeCart(id) {
    const index = cards.findIndex(card => card.id === id)

    if (index !== -1) {
        cards.splice(index, 1)
        saveCards()
    }
}
export function updateCart(id, newData) {
    const index = cards.findIndex(card => card.id === id)

    if (index !== -1) {
        cards[index] = {...cards[index], ...newData }
        saveCards()
    }
}
export function resetGames() {
    gameState.playerHP = 3000
    gameState.opponnentHP = 3000
    gameState.currentTurn = "player"
    gameState.gameOver = false
}
export function switchTurn() {
    if (gameState.gameOver) return


    if (gameState.currentTurn === "player") {
        gameState.currentTurn = "opponent"
    } else {
        gameState.currentTurn = "player"
    }
}

export function attack(damage) {
    if (gameState.currentTurn !== "player") return
    if (gameState.gameOver) return
    gameState.opponnentHP -= damage
    if (gameState.opponnentHP <= 0) {
        gameState.opponnentHP = 0
        gameState.gameOver = true
    }
}

export function opponentAttack(damage) {
    if (gameState.currentTurn !== "opponent") return
    if (gameState.gameOver) return

    gameState.playerHP -= damage

    if (gameState.playerHP <= 0) {
        gameState.playerHP = 0
        gameState.gameOver = true
    }
}