#!/usr/bin/node
function validatePassword() {

const checkPassword = () => {

    let valid = false;

    const password = checkPassword.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};
}

const password = document.getElementById('password');
password.addEventListener("input", (event) => {
    const value = event.target.value;
    updateRequirement("length", value.length >= 8)
    updateRequirement("lowercase", /[a-z]/.test(value))
    updateRequirement("uppercase", /[A-Z]/.test(value))
    updateRequirement("number", /\d/.test(value))
    updateRequirement("characters", /[#.?!@$%^&*-]/.test(value))
})

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};