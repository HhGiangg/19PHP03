function valideRegister() {
    var username, password;
    // lay gia tri input username
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    if (username == '') {
        username = document.getElementById('errorUsername').innerHTML =
            'please input your username';
        // alert('please input your username');
    } else {
        username = document.getElementById('errorUsername').innerHTML = '';
    }
    if (password == '') {
        password = document.getElementById('errorPassword').innerHTML =
            'please input your password';
        // alert('please input your password');
    } else {
        password = document.getElementById('password').innerHTML = '';
    }
    if ((username != '') && (password != '')) {
        // alert('Register success');
        document.getElementById('errorPassword').innerHTML = 'Register success';
    }
}