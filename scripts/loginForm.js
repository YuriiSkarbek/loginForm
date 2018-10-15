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
var password_eye = document.getElementById('password_eye');
function passShow() {
    document.getElementById('login_password').type = 'text';
    password_eye.style.color = 'green';
    password_eye.classList.remove('fa-eye-slash');
    password_eye.classList.add('fa-eye');
}
function passHide() {
    document.getElementById('login_password').type = 'password';
    password_eye.style.color = 'black';
    password_eye.classList.remove('fa-eye');
    password_eye.classList.add('fa-eye-slash');
}



// validation register form
function registerValidate() {
    // validate input name with id='register_name'
    var nameValue = document.getElementById('register_name').value;
    var nameRGEX = /^[A-Za-z]{2,14}$/;
    var nameResult = nameRGEX.test(nameValue);

    if (nameResult == false) {
        console.log("name: " + nameResult);
        document.getElementById('register_name').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_name').style.borderLeft = '2px solid rgb(255, 179, 179)';
        return false;
    } else {
        document.getElementById('register_name').style.background = 'white';
        document.getElementById('register_name').style.borderLeft = 'white';
    }

    // validate input email with id='register_email'
    var emailValue = document.getElementById('register_email').value;
    var emailRGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    var emailResult = emailRGEX.test(emailValue);

    if (emailResult == false) {
        console.log("email: " + emailResult);
        document.getElementById('register_email').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_email').style.borderLeft = '2px solid rgb(255, 179, 179)';
        return false;
    } else {
        document.getElementById('register_email').style.background = 'white';
        document.getElementById('register_email').style.borderLeft = 'white';
    }

    // validate input password with id='register_password'
    var passwordValue = document.getElementById('register_password').value;
    var passwordRGEX = /^.{5,256}$/;
    var passwordResult = passwordRGEX.test(passwordValue);

    if (passwordResult == false) {
        console.log("password: " + passwordResult);
        document.getElementById('register_password').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_password').style.borderLeft = '2px solid rgb(255, 179, 179)';
        return false;
    } else {
        document.getElementById('register_password').style.background = 'white';
        document.getElementById('register_password').style.borderLeft = 'white';
    }

    // check the checkbox 'i agree with terms'
    if (document.getElementById('register_terms').checked) {
        console.log('check box CHECKED!');
    } else {
        document.getElementsByClassName('label_container')[0].style.color = 'red';
        return 0;
    }
    // if validation OK:
    alert('WELCOME');
    document.getElementById('register_name').value = '';
    document.getElementById('register_email').value = '';
    document.getElementById('register_password').value = '';
    document.getElementById('register_terms').checked = false;
    document.getElementsByClassName('label_container')[0].style.color = 'black';
}