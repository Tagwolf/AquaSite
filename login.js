async function checkSession() {
    const response = await fetch('/api/check-auth');
    const data = await response.json();

    if (data.authenticated) {
        window.location.href = '/dashboard';
    }
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (data.success) {
        window.location.href = '/dashboard';
    } else {
        alert('Login failed!');
    }
}

document.addEventListener('DOMContentLoaded', checkSession);
