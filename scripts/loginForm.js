// toogle button for switch between login/register form.
function formToggle() {
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var formToggle = document.getElementById('formToggle');
    if (login.style.display == 'none') {
        login.style.display = 'block';
        register.style.display = 'none';
        formToggle.innerHTML = 'SIGN UP';
    } else {
        login.style.display = 'none';
        register.style.display = 'block';
        formToggle.innerHTML = 'SIGN IN'
    }
}

// Toggle Password Visibility

function passwordShow() {
    var password_eye = document.getElementById('password_eye');
    document.getElementById('login_password').type = 'text';
    password_eye.style.color = 'green';
    password_eye.classList.remove('fa-eye-slash');
    password_eye.classList.add('fa-eye');
}

function passwordHide() {
    var password_eye = document.getElementById('password_eye');
    document.getElementById('login_password').type = 'password';
    password_eye.style.color = 'black';
    password_eye.classList.remove('fa-eye');
    password_eye.classList.add('fa-eye-slash');
}

//
function onClickRegister() {
    validateRegisterForm();
    // if form is validate
    if (validateRegisterForm() == true) {
        document.getElementById('register_name').value = '';
        document.getElementById('register_email').value = '';
        document.getElementById('register_phone').value = '';
        document.getElementById('register_password').value = '';
        document.getElementById('register_terms').checked = false;
        document.getElementsByClassName('label_container')[0].style.color = 'black';
        alert('WELCOME');
    } 
    // if form is NOT validate
    else {
        console.error('VALIDATION IS NOT OK');
    }
}