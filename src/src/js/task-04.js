let counterValue = 0;
const valueElement = document.getElementById('value');

const updateCounter = () => {
  valueElement.textContent = counterValue;
};

const updateCounterAndRender = (increment) => {
  counterValue += increment ? 1 : -1;
  updateCounter();
};

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', () => updateCounterAndRender(false));
incrementButton.addEventListener('click', () => updateCounterAndRender(true));