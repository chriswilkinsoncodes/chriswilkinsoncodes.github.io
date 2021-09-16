const width = 28; //
// const height = 31;
const leftExit = 364;
const rightExit = 391;
const startPosition = 490;
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let score = 0;

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty
// 5 - wall-top-left
// 6 - wall-top-right
// 7 - wall-bottom-left
// 8 - wall-bottom-right
// 9 - side-top
// 10 - side-bottom
// 11 - side-left
// 12 - side-right
// 14 - inner-wall (blank)
// 15 - inner-top-left
// 16 - inner-top-right
// 17 - inner-bottom-left
// 18 - inner-bottom-right


const layout = [
 15,10,10,10,10,10,10,10,10,10,10,10,10,16,15,10,10,10,10,10,10,10,10,10,10,10,10,16,
 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,
 12, 0, 5, 9, 9, 6, 0, 5, 9, 9, 9, 6, 0,11,12, 0, 5, 9, 9, 9, 6, 0, 5, 9, 9, 6, 0,11,
 12, 3,11,14,14,12, 0,11,14,14,14,12, 0,11,12, 0,11,14,14,14,12, 0,11,14,14,12, 3,11,
 12, 0, 7,10,10, 8, 0, 7,10,10,10, 8, 0, 7, 8, 0, 7,10,10,10, 8, 0, 7,10,10, 8, 0,11,
 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,
 12, 0, 5, 9, 9, 6, 0, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 0, 5, 9, 9, 6, 0,11,
 12, 0, 7,10,10, 8, 0, 7,10,10,10,10,10,16,15,10,10,10,10,10, 8, 0, 7,10,10, 8, 0,11,
 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,
 17, 9, 9, 9, 9, 6, 0, 5, 9, 9, 9, 6, 0, 7, 8, 0, 5, 9, 9, 9, 6, 0, 5, 9, 9, 9, 9,18,
 14,14,14,14,14,12, 0,11,15,10,10, 8, 0, 4, 4, 0, 7,10,10,16,12, 0,11,14,14,14,14,14,
 14,14,14,14,14,12, 0,11,12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,11,12, 0,11,14,14,14,14,14,
 10,10,10,10,10, 8, 0, 7, 8, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 7, 8, 0, 7,10,10,10,10,10,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
  9, 9, 9, 9, 9, 6, 0, 5, 6, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 5, 6, 0, 5, 9, 9, 9, 9, 9,
 14,14,14,14,14,12, 0,11,12, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4,11,12, 0,11,14,14,14,14,14,
 15,10,10,10,10, 8, 0, 7, 8, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 7, 8, 0, 7,10,10,10,10,16,
 12, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0,11,
 12, 0, 5, 9, 9, 6, 0, 5, 9, 9, 9, 6, 0, 5, 6, 0, 5, 9, 9, 9, 6, 0, 5, 9, 9, 6, 0,11,
 12, 0, 7,10,16,12, 0, 7,10,10,10, 8, 0, 7, 8, 0, 7,10,10,10, 8, 0,11,15,10, 8, 0,11,
 12, 3, 0, 0,11,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,12, 0, 0, 3,11,
 17, 9, 6, 0,11,12, 0, 5, 6, 0, 5, 9, 9, 9, 9, 9, 9, 6, 0, 5, 6, 0,11,12, 0, 5, 9,18,
 15,10, 8, 0, 7, 8, 0,11,12, 0, 7,10,10,16,15,10,10, 8, 0,11,12, 0, 7, 8, 0, 7,10,16,
 12, 0, 0, 0, 0, 0, 0,11,12, 0, 0, 0, 0,11,12, 0, 0, 0, 0,11,12, 0, 0, 0, 0, 0, 0,11, 
 12, 0, 5, 9, 9, 9, 9,18,17, 9, 9, 6, 0,11,12, 0, 5, 9, 9,18,17, 9, 9, 9, 9, 6, 0,11,
 12, 0, 7,10,10,10,10,10,10,10,10, 8, 0, 7, 8, 0, 7,10,10,10,10,10,10,10,10, 8, 0,11,
 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11,
 17, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,18,
];

//create board
function createBoard() {
  //for loop
  for (let i = 0; i < layout.length; i++) {
    //create a square
    const square = document.createElement('div');
    //put square in grid
    grid.appendChild(square);
    //put square in squares array
    squares.push(square);

    if (layout[i] === 0) {
      squares[i].classList.add('pac-dot');
    } else if (layout[i] === 1) {
      squares[i].classList.add('wall', 'full-wall');
    } else if (layout[i] === 2) {
      squares[i].classList.add('ghost-lair');
    } else if (layout[i] === 3) {
      squares[i].classList.add('power-pellet');
    } else if (layout[i] === 5) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="corner-div top-left"></div>';
    } else if (layout[i] === 6) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="corner-div top-right"></div>';
    } else if (layout[i] === 7) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="corner-div bottom-left"></div>';
    } else if (layout[i] === 8) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="corner-div bottom-right"></div>';
    } else if (layout[i] === 9) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="side-div top-side"></div>';
    } else if (layout[i] === 10) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="side-div bottom-side"></div>';
    } else if (layout[i] === 11) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="side-div left-side"></div>';
    } else if (layout[i] === 12) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="side-div right-side"></div>';
    } else if (layout[i] === 14) {
      squares[i].classList.add('wall');
    } else if (layout[i] === 15) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="inner-corner-div top-left"></div>';
    } else if (layout[i] === 16) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="inner-corner-div top-right"></div>';
    } else if (layout[i] === 17) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="inner-corner-div bottom-left"></div>';
    } else if (layout[i] === 18) {
      squares[i].classList.add('wall', 'outer-wall');
      squares[i].innerHTML = '<div class="inner-corner-div bottom-right"></div>';
    }
  }
}
createBoard();

//starting position of pacman
let pacmanCurrentIndex = startPosition;
squares[pacmanCurrentIndex].classList.add('pacman');

function control(e) {
  const classNames = ['wall', 'ghost-lair'];
  squares[pacmanCurrentIndex].classList.remove('pacman');
  switch (e.key) {
    case 'ArrowDown':
      if (
        // check for one of multiple classes
        // solution found:
        // https://www.titanwolf.org/Network/q/22953516-b267-4212-b485-438271264f52/y
        !classNames.some((className) =>
          squares[pacmanCurrentIndex + width].classList.contains(className)
        ) &&
        pacmanCurrentIndex + width < width * width
      )
        pacmanCurrentIndex += width;
      pacDotEaten();
      powerPelletEaten();
      checkForGameOver()
      break;
    case 'ArrowUp':
      if (
        !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
        pacmanCurrentIndex - width >= 0
      )
        pacmanCurrentIndex -= width;
      pacDotEaten();
      powerPelletEaten();
      checkForGameOver()
      break;
    case 'ArrowLeft':
      if (pacmanCurrentIndex === leftExit) {
        pacmanCurrentIndex = rightExit;
        break;
      }
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
        pacmanCurrentIndex % width !== 0
      )
        pacmanCurrentIndex -= 1;
      pacDotEaten();
      powerPelletEaten();
      checkForGameOver()
      break;
    case 'ArrowRight':
      if (pacmanCurrentIndex === rightExit) {
        pacmanCurrentIndex = leftExit;
        break;
      }
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
        pacmanCurrentIndex % width < width - 1
      )
        pacmanCurrentIndex += 1;
      pacDotEaten();
      powerPelletEaten();
      checkForGameOver()
      break;
  }
  squares[pacmanCurrentIndex].classList.add('pacman');
}
document.addEventListener('keydown', control);

function pacDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++;
    squares[pacmanCurrentIndex].classList.remove('pac-dot');
    scoreDisplay.textContent = score;
  }
}

function powerPelletEaten() {
  //if square pacman is in contains a power pellet
  //code
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    squares[pacmanCurrentIndex].classList.remove('power-pellet');
    //add a score of 10
    score += 10;
    scoreDisplay.textContent = score;

    //change each of the four ghosts to isScared
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
      // console.log(ghost.className, ghost.isScared);
    });
    //use setTimeout to unscare ghosts after 10 seconds
    setTimeout(function () {
      ghosts.forEach((ghost) => {
        ghost.isScared = false;
        // console.log(ghost.isScared);
      });
    }, 10000);
  }
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost('blinky', 376, 250),
  new Ghost('pinky', 404, 400),
  new Ghost('inky', 379, 300),
  new Ghost('clyde', 407, 500),
];

//draw my ghosts onto my grid
ghosts.forEach((ghost) => {
  squares[ghost.startIndex].classList.add(ghost.className);
  squares[ghost.startIndex].classList.add('ghost');
});

//move the ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  console.log(ghost.className);
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  console.log(direction);

  const ghostMoveCheck = ['wall', 'ghost'];
  ghost.timerId = setInterval(function () {
    //all our code
    //if the next square does NOT contain a wall and does not contain a ghost

    if (
      !ghostMoveCheck.some((classCheck) =>
        squares[ghost.currentIndex + direction].classList.contains(classCheck)
      )
    ) {
      //remove any ghost
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        'ghost',
        'scared-ghost'
      );
      console.log(ghost.classList);
      //add direction to current Index
      ghost.currentIndex += direction;
      //add ghost class
      squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
      checkForGameOver()
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    //if the ghost is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add('scared-ghost');
    }

    //if the ghost is current scared AND pacman is on it
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains('pacman')
    ) {
      // console.log('scared ghost!');

      //remove classnames - ghost.className, 'ghost', 'scared-ghost'
      squares[ghost.currentIndex].classList.remove(
        ghost.className,
        'ghost',
        'scared-ghost'
      );
      // change ghosts currentIndex back to its startIndex
      ghost.currentIndex = ghost.startIndex;
      //add a score of 100
      score += 100;
      scoreDisplay.textContent = score;
    }
    //re-add classnames of ghost.className and 'ghost' to the ghosts new postion
    squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
  }, ghost.speed);
  // clearInterval(ghost.timerId);
}

//check for game over
function checkForGameOver() {
  // if the square pacman is in contains a ghost AND
  // the square does NOT contain a scared ghost

  if (
    squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
  ) {

    //for each ghost - we need to stop it moving
    ghosts.forEach((ghost) => {
      clearInterval(ghost.timerId);
    });

    //remove eventlistener from our control function
    document.removeEventListener('keydown', control);

    //tell user the game is over
    scoreDisplay.textContent += ' Game Over';
  }

}

//check for win
function checkForWin() {
  if (score >= 274) {
      //stop each ghost
      ghosts.forEach((ghost) => {
        clearInterval(ghost.timerId);
      });
      //remove the eventListener for the control function
      document.removeEventListener('keydown', control);

      //tell our user we have won
      scoreDisplay.textContent += ' You WIN!';

  }
}


// Prettier style selected code:
// Command K, F in mac.


// gameplay with no walls visible: remove innerHTML from .grid divs
// toggle solid/no fill walls - use different layout arrays
