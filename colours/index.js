// from https://css-tricks.com/snippets/javascript/random-hex-color/
// randomColor assignment

const container = document.querySelector('.container');
const body = document.querySelector('body');

function setPanels() {
  container.innerHTML = '';
  container.classList = 'container';
  const numColors = document.querySelector(
    'input[name="num-colors"]:checked'
  ).value;
  if (numColors === '1') {
    container.classList.add('cols-1');
  } else if (numColors === '2' || numColors === '4') {
    container.classList.add('cols-4');
  } else {
    container.classList.add('cols-8');
  }
  for (let i = 0; i < numColors; i++) {
    container.innerHTML += `
        <div class="panel">
        <div class="color-code"></div>
      </div>
        `;
  }
}

function changeBG(panel) {
  setPanels();
  const panelSet = document.querySelectorAll('.panel');
  panelSet.forEach((panel) => {
    const colorCode = panel.querySelector('.color-code');
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    while (randomColor.length < 6) {
      randomColor = '0' + randomColor;
    }
    panel.style.backgroundColor = `#${randomColor}`;

    colorCode.style.border = '1px solid';
    colorCode.textContent = `#${randomColor}`;
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

// remember to run with console open to see if there are any otherwise unnoticable errors
