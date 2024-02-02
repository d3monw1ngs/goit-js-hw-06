let loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        email: loginForm.elements['email'].value,
        password: loginForm.elements['password'].value
    };

    if (!formData.email || !formData.password) {
        alert('All fields must be filled in.');
        return;
    }
    console.log(formData);
    loginForm.reset();

});