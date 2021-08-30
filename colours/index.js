const body = document.querySelector('body');

function changeBG() {
  // from https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // end css-tricks code
  body.style.backgroundColor = `#${randomColor}`;
}
