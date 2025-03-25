
// js-atv-dom.js

let counter = 0;

const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const textInput = document.getElementById('text-input');
const textContainer = document.getElementById('text-container');
const charCount = document.getElementById('char-count');
const addItemBtn = document.getElementById('add-item-btn');
const itemTypeSelect = document.getElementById('item-type');
const itemContainer = document.getElementById('item-container');
const resetBtn = document.getElementById('reset-btn');

function updateCounterDisplay() {
  counterDisplay.textContent = counter;
}

incrementBtn.addEventListener('click', () => {
  counter++;
  updateCounterDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    updateCounterDisplay();
  } else {
    alert('O contador já está em zero!');
  }
});

textInput.addEventListener('input', () => {
  const text = textInput.value.replace(/\s/g, '');
  charCount.textContent = text.length;
});

textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const p = document.createElement('p');
    p.textContent = textInput.value;
    textContainer.appendChild(p);
    textInput.value = '';
    charCount.textContent = '0';
  }
});

addItemBtn.addEventListener('click', () => {
  const type = itemTypeSelect.value;
  const list = document.createElement(type === 'ol' ? 'ol' : 'ul');
  const item = document.createElement('li');
  item.textContent = 'Novo item';
  list.appendChild(item);
  itemContainer.appendChild(list);
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  updateCounterDisplay();
  textContainer.innerHTML = '';
  itemContainer.innerHTML = '';
  textInput.value = '';
  charCount.textContent = '0';
});
