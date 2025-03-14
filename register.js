async function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.success) {
        alert(`Registration successful! Your code is: ${data.code}\nPlease save this code!`);
        window.location.href = '/login';
    } else {
        alert('Registration failed!');
    }
}
