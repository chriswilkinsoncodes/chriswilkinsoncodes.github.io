let deckId
let card1
let card2

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(deckId)
            })
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=8`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                card1 = data.cards[0].code
                card2 = data.cards[1].code
                console.log('cards: ', card1, card2)
            } else {
                console.log('not enough cards')
            }
        })

}

document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw").addEventListener("click", drawCards)
