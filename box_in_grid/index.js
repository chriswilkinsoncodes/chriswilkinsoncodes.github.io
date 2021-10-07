// loop through grid indexes to move box through grid
// as single element box, then double width/height, triple, etc.

const gridItem = document.querySelector('.grid-item');

let i = 1;
let j = 1;
let k = 0;
const max = 3;
const maxLoop = Math.pow(max, max)
let timerID = 0


function moveBox() {
    k++
    if (k > maxLoop)
        return clearInterval(timerID);

    gridItem.style.gridRow = `${i}`;
    gridItem.style.gridColumn = `${j}`;
    j++
    if (j > max) {
        j = 1
        i++
        if (i > max)
            i = 1
    }
    
    clearInterval(timerID)
    timerID = setInterval(moveBox, 750)
}

moveBox()
// clearInterval(timerID)
