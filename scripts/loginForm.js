function formToggle(){
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var formToggle = document.getElementById('formToggle');
    if(login.style.display == 'none'){
        login.style.display = 'block';
        register.style.display = 'none';
        formToggle.innerHTML = 'SIGN UP';
    }
    else{
        login.style.display = 'none';
        register.style.display = 'block';
        formToggle.innerHTML = 'SIGN IN'
    }
    
}