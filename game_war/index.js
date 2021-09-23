
const imageContainer = document.querySelector('.image-container')

const numCards = 2
let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
            imageContainer.innerHTML = ""
            document.getElementById("draw").hidden = false;
            })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${numCards}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                imageContainer.innerHTML = 
                `<img src="${data.cards[0].image}" alt="card ${data.cards[0].code}">
                <img src="${data.cards[1].image}" alt="card ${data.cards[1].code}">`
            } else {
                console.log('not enough cards')
            }
        })
        
    }
    
document.getElementById("draw").hidden = true;
document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw").addEventListener("click", drawCards)
