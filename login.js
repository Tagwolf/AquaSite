function login() {
    // Hole die eingegebenen Werte
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hole die gespeicherten Benutzerdaten aus dem localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Überprüfe, ob Benutzerdaten existieren
    if (!userData) {
        alert('No user found. Please register first.');
        return;
    }

    // Überprüfe Benutzername und Passwort
    if (userData.username === username && userData.password === password) {
        alert('Login successful! Redirecting to dashboard...');

        // Weiterleitung zur dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
}
