document.addEventListener("DOMContentLoaded", function () {
 
    let counterValue = 0;

    
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const valueElement = document.getElementById('value');

    decrementButton.addEventListener('click', function () {
        counterValue -= 1;
        updateCounter();
    });

    incrementButton.addEventListener('click', function () {
        counterValue += 1;
        updateCounter();
    });

     function updateCounter() {
        valueElement.textContent = counterValue;
    }
});