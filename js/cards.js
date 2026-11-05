export const cards = []
export function loadCards() {
    const collection = JSON.parse(
        localStorage.getItem("mythoriaCollection")) || [];

    cards.length = 0
    cards.push(...collection)
    return cards
}