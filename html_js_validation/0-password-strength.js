
function validatePassword() {
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('error');

    if (password === 0) {
        alert('There is no password input');
        return false;
    }

    /*
        Password validation and their meaning
    Password RegEx	Meaning
        ^	        The password starts
        (?=.*[a-z])	The password must contain at least one lowercase character
        (?=.*[A-Z])	The password must contain at least one uppercase character
    (?=.*[0-9])	    The password must contain at least one number
    (?=.*[!@#$%^&*])	The password must contain at least one special character.
    (?=.{8,})	    The password must be eight characters or longer
    */
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (!password.match(passwordRegex)) {
        passwordError.innerHTML = 'Password is invalid';
        return false;
    }

    // code to check if password meets a certain criteria

    passwordError.innerHTML = 'valid';
    return true

}