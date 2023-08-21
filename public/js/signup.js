document.getElementById("submitButton").addEventListener("click", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Check if email is valid before proceeding
    if (!isValidEmail(email)) {
        console.error('Invalid email address'); //Alerts user of invalid input
        return;
    }

    const userData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    };

    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            alert ('create user request failed');
            throw new Error('create user request failed');
        }

        window.location = '/dashboard'; // Redirect to a different page after successful submission
    } catch (error) {
        console.error('Error creating user:', error);
    }
});

function isValidEmail(email) {
    // Regular expression pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Add event listener for email input field
const emailInput = document.getElementById('emailInput');
const emailValidationMessage = document.querySelector('.help.is-danger');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const isValid = isValidEmail(email);

    // Update the styling or show a validation message based on the validity
    if (isValid) {
        emailInput.classList.remove('is-danger');
        emailInput.classList.add('is-success'); // Add success class
        emailValidationMessage.textContent = ''; // Clear validation message
    } else {
        emailInput.classList.remove('is-success'); // Remove success class
        emailInput.classList.add('is-danger'); // Add danger class
        emailValidationMessage.textContent = 'This email is invalid';
    }
});
