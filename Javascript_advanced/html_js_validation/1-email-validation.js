function validateEmail() {
    // get the value of email input field
    let email = document.getElementById('email').value;

    // get the error element where we'll display error messages
    let emailError = document.getElementById('error');

    // check if email is empty
    if (email.length === 0) {
        // display an error message in the error element
        emailError.innerHTML = 'Email is required';
        // return false to prevent form submission
        return false;
    }

    // check if email matches a regular expression
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        // Display an error message in the error element
        emailError.innerHTML = 'Email is invalid';
        // // Return false to prevent form submission
        return false;
    }
    // display a valid statement to show that the email is valid
    emailError.innerHTML = 'valid';
    // Return true if the password meets all criteria, allowing form submission
    return true;
}