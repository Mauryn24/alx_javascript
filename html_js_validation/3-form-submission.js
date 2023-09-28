function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Retrieve form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("PhoneNumber").value;
    const message = document.getElementById("message").value;
    
    // Validation
    if (name === "" || email === "" || phoneNumber === "" || message === "") {
        alert("Please fill in all required fields.");
    } else {
        // Additional validation (e.g., phone number)
        if (!isValidPhoneNumber(phoneNumber)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Form submitted successfully
        alert("Form submitted successfully!");
        // You can also choose to submit the form to a server here using AJAX, etc.
    }
}

function isValidPhoneNumber(phoneNumber) {
    // Add your phone number validation logic here
    // You can use regular expressions or any other method
    // Return true if valid, false otherwise
    return true; // Replace with your validation logic
}

// Add an event listener to the form element
const form = document.getElementById("submitForm");
form.addEventListener("submit", handleFormSubmit);
