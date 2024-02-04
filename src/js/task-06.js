const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function () {
    const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);

    validationInput.classList.toggle('valid', validationInput.value.length === expectedLength);
    validationInput.classList.toggle('invalid', validationInput.value.length !== expectedLength);
});