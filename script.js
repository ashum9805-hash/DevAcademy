
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

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Mobile dropdown menu toggle
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    dropdownMenu.classList.toggle('active');
                }
            }
        });
    });
    
    // Close mobile menu when link is clicked
    const navLinks2 = document.querySelectorAll('.nav-links a');
    navLinks2.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (hamburger) hamburger.textContent = '☰';
            }
        });
    });
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
    else if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters.';
        hasError = true;
    }
    else if (username.includes(' ')) {
        usernameError.textContent = 'Username cannot contain spaces.';
        hasError = true;
    }

    if (password === '') {
        passwordError.textContent = 'Password cannot be blank.';
        hasError = true;
    }
    else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        hasError = true;
    }

    if (confirm === '') {
        confirmError.textContent = 'Please confirm your password.';
        hasError = true;
    }
    else if (password !== confirm) {
        confirmError.textContent = 'Passwords do not match.';
        hasError = true;
    }

    if (hasError) return;

    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welcome, ${username}! 👋`;

    document.getElementById('login-box').classList.add('hidden');
    document.getElementById('homepage-content').classList.remove('hidden');
}

function registerUser() {
    sessionStorage.setItem("isRegistered", "true");
    const savedPage = sessionStorage.getItem("redirectTarget");

    if (savedPage) {
        sessionStorage.removeItem("redirectTarget");
        window.location.href = savedPage;
    } else {
        window.location.href = "index.html";
    }
}

function logOutUser() {
    sessionStorage.removeItem("isRegistered");
    sessionStorage.removeItem("redirectTarget");
    window.location.href = "index.html";
}
