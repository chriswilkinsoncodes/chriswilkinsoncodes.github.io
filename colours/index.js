// from https://css-tricks.com/snippets/javascript/random-hex-color/
// randomColor assignment

const body = document.querySelector('body');

function changeBG(panel) {
  const panelSet = document.querySelectorAll('.panel');
  panelSet.forEach((panel) => {
    const colorCode = panel.querySelector('.color-code');
    const randomColor = Math.floor(Math.random() * 16777215);
    let panelBG = randomColor.toString(16);
    while (panelBG.length < 6) {
      panelBG += '0';
    }
    panel.style.backgroundColor = `#${panelBG}`;

    colorCode.style.border = '1px solid';
    colorCode.textContent = `#${randomColor.toString(16)}`;
    panel;
  });
}

// TODO:
// determine how to assign bg-color of colorCode element based on panel's bg-color (solved)
// and set text color as white or black depending on brightness(?) of colorCode's bg-color
// other color code format req'd?
//
// this works to get a new bg-color:
// const colorCodeBGColor = Math.floor(Math.abs(randomColor - 16777215 / 2));
// but this doesn't work to set text color as black/white depending on bg-color:
// if (colorCodeBGColor > 6000000) {
//   colorCode.style.color = '#fff';
// }
// colorCode.style.backgroundColor = `#${colorCodeBGColor.toString(16)}`;
