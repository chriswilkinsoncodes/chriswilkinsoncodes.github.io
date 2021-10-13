// loop through grid indexes to move box through grid
// as single element box, then double width/height, triple, etc.

const gridItem = document.querySelector('.grid-item');

const max = 10;
const maxLoop = Math.pow(max, 2) * 2
const boxesDisplayed = []
let k = 0;
let timerID = 0


function moveBox() {
    k++

    const randomRow = Math.floor(Math.random() * max) + 1;
    const randomColumn = Math.floor(Math.random() * max) + 1;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    if (k > maxLoop)
        return clearInterval(timerID);

    gridItem.style.background = `#${randomColor}`;
    gridItem.style.gridRow = `${randomRow}`;
    gridItem.style.gridColumn = `${randomColumn}`;
    
    clearInterval(timerID)
    timerID = setInterval(moveBox, 500)
}

moveBox()
// clearInterval(timerID)
