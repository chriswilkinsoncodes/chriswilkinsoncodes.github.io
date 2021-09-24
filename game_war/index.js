
const imageContainer = document.querySelector('.image-container')
const cardOne = document.getElementById('card-one')
const cardTwo = document.getElementById('card-two')
const cardsRemaining = document.getElementById('cards-remaining')

const numCards = 2
let deckId

function shuffleCards() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            // console.log(deckId)
            cardOne.innerHTML = ""
            cardTwo.innerHTML = ""
            document.getElementById("draw").style.visibility = 'visible';
            document.getElementById("card-container").style.visibility = 'visible';
            cardsRemaining.innerText = `${data.remaining} cards remaining`
            })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${numCards}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // imageContainer.innerHTML = ""
                for (let i = 0; i < numCards; i++) {
                    imageContainer.children[i].innerHTML = 
                    `<img src="${data.cards[i].image}" alt="card ${data.cards[i].code}">`

                // cardOne.innerHTML =  `<img src="${data.cards[0].image}" alt="card ${data.cards[0].code}">`
                // cardTwo.innerHTML =  `<img src="${data.cards[1].image}" alt="card ${data.cards[1].code}">`
                
                cardsRemaining.innerText = `${data.remaining} cards remaining`
                }
            } else {
                displayWinner()
            }
        })
    }
    
    function displayWinner() {
      console.log('not enough cards');
    }
    
document.getElementById("draw").style.visibility = 'hidden';
document.getElementById("card-container").style.visibility = 'hidden';
document.getElementById("new-deck").addEventListener("click", shuffleCards)
document.getElementById("draw").addEventListener("click", drawCards)
