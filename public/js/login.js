document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("login_email").value.trim();
    const password = document.getElementById("login_password").value.trim();

    fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            "email" : name,
            "password" : password
        }),
    }).then((result) => {
        if (!result.ok) {
            alert("Invalid username or password");
            return;
        }

        result.json().then(() => {
            window.location = '/dashboard';
        });
    });
});