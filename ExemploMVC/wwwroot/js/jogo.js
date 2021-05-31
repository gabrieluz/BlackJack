let victoriesOne = document.getElementById("victoriesOne")
let cardOne = document.getElementById("cardOne")
let pointsPlayerOne = document.getElementById("pointsPlayerOne")
let playOne = document.getElementById("playOne")
let stopOne = document.getElementById("stopOne")

let victoriesTwo = document.getElementById("victoriesTwo")
let cardTwo = document.getElementById("cardTwo")
let pointsPlayerTwo = document.getElementById("pointsPlayerTwo")
let playTwo = document.getElementById("playTwo")
let stopTwo = document.getElementById("stopTwo")

let aTie = document.getElementById("aTie")


let totalOfPointsOne = 0
let totalOfPointsTwo = 0

let totalOfVictoriesPlayerOne = 0
let totalOfVictoriesPlayerTwo = 0

let totalOfATie = 0

$(playOne).attr('disabled', 'disabled')
$(stopOne).attr('disabled', 'disabled')

$(playTwo).attr('disabled', 'disabled')
$(stopTwo).attr('disabled', 'disabled')

function start() {

    $(cardOne).attr("src", "/images/0.png")
    $(cardTwo).attr("src", "/images/0.png")

    $(playOne).removeAttr('disabled')
    $(stopOne).removeAttr('disabled')

    $(pointsPlayerOne).text(0)
    $(pointsPlayerTwo).text(0)

    totalOfPointsOne = 0
    totalOfPointsTwo = 0
}

function restart() {
    start()
    $(victoriesOne).text(0)
    $(victoriesTwo).text(0)
    $(aTie).text(0)
}

function victoryPlayerOne() {
    alert("Jogador um ganhou")
    totalOfVictoriesPlayerOne = totalOfVictoriesPlayerOne + 1
    $(victoriesOne).text(totalOfVictoriesPlayerOne)
}
function victoryPlayerTwo() {
    alert("Jogador dois ganhou")
    totalOfVictoriesPlayerTwo = totalOfVictoriesPlayerTwo + 1
    $(victoriesTwo).text(totalOfVictoriesPlayerTwo)
}

function winner() {
    if (totalOfPointsOne === 19 && totalOfPointsTwo === 20) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne === 19 && totalOfPointsTwo === 21) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne === 20 && totalOfPointsTwo === 21) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne < 19 && totalOfPointsTwo === 19) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne < 19 && totalOfPointsTwo === 20) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne > 21 && totalOfPointsTwo >= 19 && totalOfPointsTwo <= 21) {
        victoryPlayerTwo()
    } else if (totalOfPointsOne < 19 && totalOfPointsTwo === 21) {
        victoryPlayerTwo()
    } else if (totalOfPointsTwo === 19 && totalOfPointsOne === 20) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo === 19 && totalOfPointsOne === 21) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo === 20 && totalOfPointsOne === 21) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo < 19 && totalOfPointsOne === 19) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo < 19 && totalOfPointsOne === 20) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo < 19 && totalOfPointsOne === 21) {
        victoryPlayerOne()
    } else if (totalOfPointsTwo > 21 && totalOfPointsOne >= 19 && totalOfPointsOne <= 21) {
        victoryPlayerOne()
    } else {
        alert("EMPATE!!!")
        totalOfATie = totalOfATie + 1
        $(aTie).text(totalOfATie)
    }
}

function randomNumber() {
    let random = Math.random() * (13 - 1) + 1

    return Math.floor(random)
}

function playClickOne() {
    let number = randomNumber()
    totalOfPointsOne = totalOfPointsOne + number

    $(cardOne).attr("src", `/images/${number}.png`)
    $(pointsPlayerOne).text(totalOfPointsOne)

    if (totalOfPointsOne > 21) stopClickOne()
}

function stopClickOne() {
    $(playOne).attr('disabled', 'disabled')
    $(stopOne).attr('disabled', 'disabled')

    $(playTwo).removeAttr('disabled')
    $(stopTwo).removeAttr('disabled')
}


function playClickTwo() {
    let number = randomNumber()
    totalOfPointsTwo = totalOfPointsTwo + number

    $(cardTwo).attr("src", `/images/${number}.png`)
    $(pointsPlayerTwo).text(totalOfPointsTwo)

    if (totalOfPointsTwo > 21) stopClickTwo()
}

function stopClickTwo() {
    $(playTwo).attr('disabled', 'disabled')
    $(stopTwo).attr('disabled', 'disabled')

    winner()
}

