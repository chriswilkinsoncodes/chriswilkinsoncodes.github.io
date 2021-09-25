
const drawBtn = document.getElementById("draw")
const imageContainer = document.querySelector('.image-container')
const cardOne = document.getElementById('card-one')
const cardTwo = document.getElementById('card-two')
const cardsRemaining = document.getElementById('cards-remaining')
const displayWinnerMsg = document.querySelector('.display-winner')
const computerScoreDisplay = document.querySelector('.computer-score')
const playerScoreDisplay = document.querySelector('.player-score')
const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
const numCards = 2
let deckId, hand
let computerScore, playerScore

function shuffleCards() {
  (computerScore = 0), (playerScore = 0);
  fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;

      for (let i = 0; i < numCards; i++) {
        imageContainer.children[i].innerHTML = '';
      }

      document.getElementById('draw').style.visibility = 'visible';
      document.getElementById('card-container').style.visibility = 'visible';
      cardsRemaining.innerText = `${data.remaining} cards remaining`;
    });
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=${numCards}`)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                hand = data
                // imageContainer.innerHTML = ""
                for (let i = 0; i < numCards; i++) {
                    imageContainer.children[i].innerHTML = 
                    `<img src="${data.cards[i].image}" alt="card ${data.cards[i].code}">`

                // cardOne.innerHTML =  `<img src="${data.cards[0].image}" alt="card ${data.cards[0].code}">`
                // cardTwo.innerHTML =  `<img src="${data.cards[1].image}" alt="card ${data.cards[1].code}">`
                
                }
            cardsRemaining.innerText = `${data.remaining} cards remaining`
            scoreHand()
            if (!data.remaining) {
                displayWinner()
            }
            } else {
                displayWinner()
            }
        })
    }
    
    function displayWinner() {
      drawBtn.disabled = true;
      if (computerScore > playerScore) {
        displayWinnerMsg.innerText = 'Computer Wins the Game';
      } else if (computerScore < playerScore) {
        displayWinnerMsg.innerText = 'Player Wins the Game';
      } else {
        displayWinnerMsg.innerText = "It's a Tie Game";
      }
    }

    function scoreHand() {
        displayWinnerMsg.classList.remove('hidden')
        if (cards.indexOf(hand.cards[0].value) > cards.indexOf(hand.cards[1].value)) {
            displayWinnerMsg.innerText = "Computer Wins"
            computerScore++
            computerScoreDisplay.innerText = `Computer: ${computerScore}`
        } else if (cards.indexOf(hand.cards[0].value) < cards.indexOf(hand.cards[1].value)) {
            displayWinnerMsg.innerText = "Player Wins"
            playerScore++
            playerScoreDisplay.innerText = `Player: ${playerScore}`
        } else {
            displayWinnerMsg.innerText = "It's a Tie"
        }
    }
    

document.getElementById("draw").style.visibility = 'hidden';
document.getElementById("card-container").style.visibility = 'hidden';
document.getElementById("new-deck").addEventListener("click", shuffleCards)
drawBtn.addEventListener("click", drawCards)
