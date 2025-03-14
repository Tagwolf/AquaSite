async function register() {
    try {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // E-Mail-Validierung
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Passwortüberprüfung
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Lokale Speicherung der Benutzerdaten
        const userData = {
            username,
            email,
            password, // Achtung: Passwörter sollten niemals im Klartext gespeichert werden!
            code: Math.random().toString(36).substring(2, 10).toUpperCase() // Generiere einen zufälligen Code
        };

        // Speichere die Benutzerdaten im localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Erfolgsmeldung
        alert(`Registration successful! Your code is: ${userData.code}\nPlease save this code!`);
        window.location.href = 'login.html'; // Weiterleitung zur Login-Seite
    } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again.');
    }
}
