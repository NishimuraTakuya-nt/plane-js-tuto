const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

function incrementCount() {
  count++;
  countElement.textContent = count;
}

incrementButton.addEventListener('click', incrementCount);