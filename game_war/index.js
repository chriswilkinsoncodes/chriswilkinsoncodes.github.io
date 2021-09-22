
const cardOne = document.getElementById('card1')
const cardTwo = document.getElementById('card2')
const cardThree = document.getElementById('card3')
const cardFour = document.getElementById('card4')
const cardFive = document.getElementById('card5')

let deckId
// let card1
// let card2

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
            })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=5`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                cardOne.innerHTML = `<img src="${data.cards[0].image}" alt="card ${data.cards[0].code}">`
                cardTwo.innerHTML = `<img src="${data.cards[1].image}" alt="card ${data.cards[1].code}">`
                cardThree.innerHTML = `<img src="${data.cards[2].image}" alt="card ${data.cards[2].code}">`
                cardFour.innerHTML = `<img src="${data.cards[3].image}" alt="card ${data.cards[3].code}">`
                cardFive.innerHTML = `<img src="${data.cards[4].image}" alt="card ${data.cards[4].code}">`
            } else {
                console.log('not enough cards')
            }
        })

}

document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw").addEventListener("click", drawCards)
