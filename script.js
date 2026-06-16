
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            toggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
        });
    }

});

function simulateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirm  = document.getElementById('confirm-password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const confirmError  = document.getElementById('confirm-error');
    const generalError  = document.getElementById('general-error');

    usernameError.textContent = '';
    passwordError.textContent = '';
    confirmError.textContent  = '';
    generalError.textContent  = '';
    generalError.classList.add('hidden');

    let hasError = false;

    if (username === '') {
        usernameError.textContent = 'Username cannot be blank.';
        hasError = true;
    }
    // 2. Username too short
    else if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters.';
        hasError = true;
    }
    // 3. Spaces in username
    else if (username.includes(' ')) {
        usernameError.textContent = 'Username cannot contain spaces.';
        hasError = true;
    }

    // 4. Blank password
    if (password === '') {
        passwordError.textContent = 'Password cannot be blank.';
        hasError = true;
    }
    // 5. Password too short
    else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        hasError = true;
    }

    // 6. Confirm password blank
    if (confirm === '') {
        confirmError.textContent = 'Please confirm your password.';
        hasError = true;
    }
    // 7. Passwords don't match
    else if (password !== confirm) {
        confirmError.textContent = 'Passwords do not match.';
        hasError = true;
    }

    // --- STOP HERE IF ANY ERROR ---
    if (hasError) return;

    // --- ALL GOOD: show welcome box with user's name ---
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welcome, ${username}! 👋`;

    document.getElementById('login-box').classList.add('hidden');
    document.getElementById('homepage-content').classList.remove('hidden');
}

// Runs when user clicks "Continue to Notes" — saves session and redirects
function registerUser() {
    // Mark user as logged in for this browser session
    sessionStorage.setItem("isRegistered", "true");

    // Check if there was a page they originally wanted
    const savedPage = sessionStorage.getItem("redirectTarget");

    if (savedPage) {
        // Clear the saved target then send them there
        sessionStorage.removeItem("redirectTarget");
        window.location.href = savedPage;
    } else {
        // No saved target — just go home
        window.location.href = "index.html";
    }
}

// Logs the user out and returns to home
function logOutUser() {
    sessionStorage.removeItem("isRegistered");
    sessionStorage.removeItem("redirectTarget");
    window.location.href = "index.html";
}
