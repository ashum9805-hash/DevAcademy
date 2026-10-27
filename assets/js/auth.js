const DEVACADEMY_USER_KEY = 'devacademy-user';

function getStoredUser() {
    try {
        const saved = localStorage.getItem(DEVACADEMY_USER_KEY);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        return null;
    }
}

function saveUser(username) {
    localStorage.setItem(DEVACADEMY_USER_KEY, JSON.stringify({
        username,
        loggedIn: true,
        savedAt: Date.now()
    }));
}

function clearSavedUser() {
    localStorage.removeItem(DEVACADEMY_USER_KEY);
    localStorage.removeItem('isRegistered');
}

function isUserLoggedIn() {
    const user = getStoredUser();
    return !!(user && user.loggedIn);
}

function simulateLogin() {
    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value;
    const confirm = document.getElementById('confirm-password')?.value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const confirmError = document.getElementById('confirm-error');
    const generalError = document.getElementById('general-error');

    if (usernameError) usernameError.textContent = '';
    if (passwordError) passwordError.textContent = '';
    if (confirmError) confirmError.textContent = '';
    if (generalError) {
        generalError.textContent = '';
        generalError.classList.add('hidden');
    }

    let hasError = false;

    if (!username) {
        if (usernameError) usernameError.textContent = 'Username cannot be blank.';
        hasError = true;
    } else if (username.length < 3) {
        if (usernameError) usernameError.textContent = 'Username must be at least 3 characters.';
        hasError = true;
    } else if (username.includes(' ')) {
        if (usernameError) usernameError.textContent = 'Username cannot contain spaces.';
        hasError = true;
    }

    if (!password) {
        if (passwordError) passwordError.textContent = 'Password cannot be blank.';
        hasError = true;
    } else if (password.length < 6) {
        if (passwordError) passwordError.textContent = 'Password must be at least 6 characters.';
        hasError = true;
    }

    if (!confirm) {
        if (confirmError) confirmError.textContent = 'Please confirm your password.';
        hasError = true;
    } else if (password !== confirm) {
        if (confirmError) confirmError.textContent = 'Passwords do not match.';
        hasError = true;
    }

    if (hasError) return;

    saveUser(username);

    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) welcomeMessage.textContent = `Welcome, ${username}! 👋`;

    const loginBox = document.getElementById('login-box');
    const homepageContent = document.getElementById('homepage-content');
    const authStatus = document.getElementById('auth-status');
    if (authStatus) authStatus.textContent = `Signed in as ${username}`;
    if (loginBox) loginBox.classList.add('hidden');
    if (homepageContent) homepageContent.classList.remove('hidden');
}

function registerUser() {
    const savedPage = sessionStorage.getItem('redirectTarget');
    const user = getStoredUser();

    if (user && user.loggedIn) {
        localStorage.setItem('isRegistered', 'true');
    }

    if (savedPage) {
        sessionStorage.removeItem('redirectTarget');
        window.location.href = savedPage;
    } else {
        window.location.href = 'index.html';
    }
}

function continueAsGuest() {
    clearSavedUser();
    sessionStorage.removeItem('redirectTarget');
    const authStatus = document.getElementById('auth-status');
    if (authStatus) authStatus.textContent = 'Guest mode';
    window.location.href = 'index.html';
}

function logOutUser() {
    clearSavedUser();
    sessionStorage.removeItem('redirectTarget');
    const authStatus = document.getElementById('auth-status');
    if (authStatus) authStatus.textContent = 'Guest mode';
    window.location.href = 'index.html';
}

window.getStoredUser = getStoredUser;
window.saveUser = saveUser;
window.clearSavedUser = clearSavedUser;
window.isUserLoggedIn = isUserLoggedIn;
window.simulateLogin = simulateLogin;
window.registerUser = registerUser;
window.continueAsGuest = continueAsGuest;
window.logOutUser = logOutUser;

window.addEventListener('DOMContentLoaded', () => {
    const authStatus = document.getElementById('auth-status');
    const savedUser = getStoredUser();

    if (authStatus) {
        authStatus.textContent = savedUser && savedUser.loggedIn
            ? `Signed in as ${savedUser.username}`
            : 'Guest mode';
    }

    const loginBox = document.getElementById('login-box');
    const homepageContent = document.getElementById('homepage-content');
    const welcomeMessage = document.getElementById('welcome-message');
    if (loginBox && homepageContent && welcomeMessage && savedUser && savedUser.loggedIn) {
        welcomeMessage.textContent = `Welcome back, ${savedUser.username}! 👋`;
        loginBox.classList.add('hidden');
        homepageContent.classList.remove('hidden');
    }
});
