// script.js

// Function to generate input fields based on the selected value
function generateInputFields(num) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous fields

    for (let i = 1; i <= num; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    const numFields = parseInt(document.getElementById('numFields').value);
    const inputContainer = document.getElementById('inputContainer');
    const inputFields = inputContainer.getElementsByTagName('input');

    // Check if any of the fields are empty
    for (let i = 0; i < numFields; i++) {
        if (inputFields[i].value.trim() === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
            return;
        }
    }
}