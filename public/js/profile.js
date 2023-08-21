document.getElementById("submitButton").addEventListener("click", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstNameInput').value;
  const lastName = document.getElementById('lastNameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  // Check if email is valid before proceeding
  if (!isValidEmail(email)) {
      console.error('Invalid email address');
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
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });

      if (!response.ok) {
        alert ('Update user request failed');
          throw new Error('create user request failed');
      }

      window.location = '/profile'; // Redirect to a different page after successful submission
  } catch (error) {
      console.error('Error creating user:', error);
  }
});

function isValidEmail(email) {
  // Regular expression pattern for basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}