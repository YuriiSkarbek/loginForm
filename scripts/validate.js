// validation register form
function validateRegisterForm() {
    var registerFormIsValid = true;
    // validate input name with id='register_name'
    var nameValue = document.getElementById('register_name').value;
    var nameRGEX = /^[A-Za-z]{2,14}$/;
    var nameResult = nameRGEX.test(nameValue);

    if (nameResult == false) {
        document.getElementById('register_name').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_name').style.borderLeft = '2px solid rgb(255, 179, 179)';
        registerFormIsValid = false;
    } else {
        document.getElementById('register_name').style.background = 'white';
        document.getElementById('register_name').style.borderLeft = 'white';
    }

    // validate input email with id='register_email'
    var emailValue = document.getElementById('register_email').value;
    var emailRGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    var emailResult = emailRGEX.test(emailValue);

    if (emailResult == false) {
        document.getElementById('register_email').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_email').style.borderLeft = '2px solid rgb(255, 179, 179)';
        registerFormIsValid = false;
    } else {
        document.getElementById('register_email').style.background = 'white';
        document.getElementById('register_email').style.borderLeft = 'white';
    }

    // validate input phone with id='register_phone'
    var phoneValue = document.getElementById('register_phone').value;
    var phoneRGEX = /^(\+){0,1}\d{10,12}$/;
    var phoneResult = phoneRGEX.test(phoneValue);

    if (phoneResult == false) {
        document.getElementById('register_phone').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_phone').style.borderLeft = '2px solid rgb(255, 179, 179)';
        registerFormIsValid = false;
    } else {
        document.getElementById('register_phone').style.background = 'white';
        document.getElementById('register_phone').style.borderLeft = 'white';
    }

    // validate input password with id='register_password'
    var passwordValue = document.getElementById('register_password').value;
    var passwordRGEX = /^.{5,256}$/;
    var passwordResult = passwordRGEX.test(passwordValue);

    if (passwordResult == false) {
        document.getElementById('register_password').style.background = 'rgb(255, 179, 179)';
        document.getElementById('register_password').style.borderLeft = '2px solid rgb(255, 179, 179)';
        registerFormIsValid = false;
    } else {
        document.getElementById('register_password').style.background = 'white';
        document.getElementById('register_password').style.borderLeft = 'white';
    }

    // check the checkbox 'i agree with terms'
    if (document.getElementById('register_terms').checked) {

    } else {
        document.getElementsByClassName('label_container')[0].style.color = 'red';
        registerFormIsValid = false;
    }

    if (registerFormIsValid == true) {
        return true;
    } else {
        return false;
    }
}

