let fontSizeControl = document.getElementById('font-size-control');
let textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
    textElement.style.fontSize = `${fontSizeControl.value}px`;

});