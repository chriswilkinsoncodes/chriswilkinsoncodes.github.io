const width = 28;
const leftExit = 364
const rightExit = 391
const startPosition =490
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

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,5,1,1,6,0,5,1,1,1,6,0,1,1,0,5,1,1,1,6,0,5,1,1,6,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,7,1,1,8,0,7,1,1,1,8,0,7,8,0,7,1,1,1,8,0,7,1,1,8,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,5,1,1,6,0,5,1,1,1,1,1,1,1,1,1,1,1,1,6,0,5,1,1,6,0,1,
    1,0,7,1,1,8,0,7,1,1,1,1,1,1,1,1,1,1,1,1,8,0,7,1,1,8,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,6,0,5,1,1,1,6,0,7,8,0,5,1,1,1,6,0,5,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,1,1,8,0,4,4,0,7,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,8,0,7,8,4,1,1,1,2,2,1,1,1,4,7,8,0,7,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,6,0,5,6,4,1,2,2,2,2,2,2,1,4,5,6,0,5,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,8,0,7,8,4,1,1,1,1,1,1,1,1,4,7,8,0,7,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,5,1,1,6,0,5,1,1,1,6,0,5,6,0,5,1,1,1,6,0,5,1,1,6,0,1,
    1,0,7,1,1,1,0,7,1,1,1,8,0,7,8,0,7,1,1,1,8,0,1,1,1,8,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,6,0,1,1,0,5,6,0,5,1,1,1,1,1,1,6,0,5,6,0,1,1,0,5,1,1,
    1,1,8,0,7,8,0,1,1,0,7,1,1,1,1,1,1,8,0,1,1,0,7,8,0,7,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,5,1,1,1,1,1,1,1,1,6,0,1,1,0,5,1,1,1,1,1,1,1,1,6,0,1,
    1,0,7,1,1,1,1,1,1,1,1,8,0,7,8,0,7,1,1,1,1,1,1,1,1,8,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
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
      squares[i].classList.add('wall');
    } else if (layout[i] === 2) {
      squares[i].classList.add('ghost-lair');
    } else if (layout[i] === 3) {
      squares[i].classList.add('power-pellet');
    } else if (layout[i] === 5) {
      squares[i].classList.add('wall');
      squares[i].classList.add('top-left');
    } else if (layout[i] === 6) {
      squares[i].classList.add('wall');
      squares[i].classList.add('top-right');
    } else if (layout[i] === 7) {
      squares[i].classList.add('wall', 'bottom-left');
    } else if (layout[i] === 8) {
      squares[i].classList.add('wall', 'bottom-right');
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
      break;
    case 'ArrowUp':
      if (
        !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
        pacmanCurrentIndex - width >= 0
      )
        pacmanCurrentIndex -= width;
      pacDotEaten();
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

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex
    this.isScared = false
    this.timerId = NaN
  }
}

const ghosts = [
  new Ghost('blinky', 376, 250),
  new Ghost('pinky', 404, 400),
  new Ghost('inky', 379, 300),
  new Ghost('clyde', 407, 500),
];

//draw my ghosts onto my grid
ghosts.forEach((ghost) =>
  squares[ghost.startIndex].classList.add(ghost.className)
);

//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost) {
  console.log(ghost.className)
  const directions = [-1, +1, -width, +width]
  let direction = directions[Math.floor(Math.random() * directions.length)]
  console.log(direction)

  ghost.timerId = setInterval(function() {
    //all our code
    //remove any ghost
    squares[ghost.currentIndex].classList.remove(ghost.className)
    //add direction to current Index
    ghost.currentIndex += direction
    //add ghost class
    squares[ghost.currentIndex].classList.add(ghost.className)
}, ghost.speed )
clearInterval(ghost.timerId)
}

