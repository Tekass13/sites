const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

function verifying() {
    const textPassword = password.value;
    const textConfirmPassword = confirmPassword.value;

    password.classList.remove('valid', 'invalid');
    confirmPassword.classList.remove('valid', 'invalid');
    if (textPassword !== "" && textConfirmPassword !== "") {
        if (textPassword === textConfirmPassword) {
            password.classList.toggle('valid');
            confirmPassword.classList.toggle('valid');
        } else {
            password.classList.toggle('invalid');
            confirmPassword.classList.toggle('invalid');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    password.addEventListener('input', verifying);
    confirmPassword.addEventListener('input', verifying);
});