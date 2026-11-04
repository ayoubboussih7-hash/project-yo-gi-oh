export function generateId() {
    return Date.now() + Math.random()
}

export function formatDate(date) {
    return new Date(date).toLocaleString("fr-FR")
}