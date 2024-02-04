let nameInput = document.getElementById('name-input');
let nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() === '' ? 'Anonymous' : nameInput.value;
});