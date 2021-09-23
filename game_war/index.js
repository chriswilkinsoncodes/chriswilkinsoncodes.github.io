
const imageContainer = document.querySelector('.image-container')
const cardsRemaining = document.getElementById('cards-remaining')

const numCards = 2
let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            // console.log(deckId)
            imageContainer.innerHTML = ""
            document.getElementById("draw").hidden = false;
            cardsRemaining.innerText = `${data.remaining} cards remaining`
            })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${numCards}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                imageContainer.innerHTML = ""
                for (let i = 0; i < numCards; i++) {
                    imageContainer.innerHTML += 
                    `<img src="${data.cards[i].image}" alt="card ${data.cards[i].code}">`
                }
                cardsRemaining.innerText = `${data.remaining} cards remaining`
            } else {
                console.log('not enough cards')
            }
        })
    }
    
document.getElementById("draw").hidden = true;
document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw").addEventListener("click", drawCards)
