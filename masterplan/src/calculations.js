const currentDate = new Date()

function randomCalculator() {
    return (
    (Math.round(Math.random() * 100) + Math.round(Math.random() * 100))
    )
}

function squareRoot() {
    return (
        (Math.sqrt((Math.random() * 100) + Math.random() * 100))
    )
}

function date() {
    return (
        currentDate.toLocaleDateString()
    )
}

export default { /* export Methode, wenn mehrere Funktionen exportiert werden sollen */ 
    randomCalculator,
    squareRoot,
    date
}