document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeNavigation();
    initializeAuthStatus();
    initializeRegistrationView();
    initializeLessonAnchors();
});

const DEVACADEMY_USER_KEY = 'devacademy-user';
const NAV_COLLAPSE_WIDTH = 1100;

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    updateThemeButton(toggleBtn, savedTheme);
    toggleBtn.addEventListener('click', () => {
        const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark'
            ? 'light'
            : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        updateThemeButton(toggleBtn, nextTheme);
    });
}

function updateThemeButton(button, theme) {
    button.textContent = theme === 'dark' ? '☀️' : '🌙';
    button.setAttribute('aria-label', 'Toggle theme');
}

function closeDropdown(dropdown) {
    if (!dropdown) return;
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    menu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
}

function closeAllDropdowns(except = null) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (dropdown !== except) closeDropdown(dropdown);
    });
}

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            hamburger.textContent = isOpen ? '✕' : '☰';
            hamburger.setAttribute('aria-expanded', String(isOpen));
            if (!isOpen) closeAllDropdowns();
        });
    }

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        const menu = toggle.nextElementSibling;
        if (!menu || !menu.classList.contains('dropdown-menu')) return;

        if (!menu.id) menu.id = `menu-${Math.random().toString(36).slice(2, 9)}`;
        toggle.setAttribute('aria-controls', menu.id);
        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', event => {
            event.preventDefault();
            const dropdown = toggle.closest('.dropdown');
            const isOpen = menu.classList.contains('active');
            closeAllDropdowns(dropdown);
            menu.classList.toggle('active', !isOpen);
            toggle.setAttribute('aria-expanded', String(!isOpen));
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => closeDropdown(toggle.closest('.dropdown')));
        });
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.dropdown')) closeAllDropdowns();
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        const openDropdown = document.querySelector('.dropdown-menu.active')?.closest('.dropdown');
        if (!openDropdown) return;
        const toggle = openDropdown.querySelector('.dropdown-toggle');
        closeDropdown(openDropdown);
        toggle?.focus();
    });

    document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            if (window.innerWidth <= NAV_COLLAPSE_WIDTH && navLinks) {
                navLinks.classList.remove('active');
                if (hamburger) {
                    hamburger.textContent = '☰';
                    hamburger.setAttribute('aria-expanded', 'false');
                }
                closeAllDropdowns();
            }
        });
    });
}

function getStoredUser() {
    try {
        const saved = localStorage.getItem(DEVACADEMY_USER_KEY);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        return null;
    }
}

function isUserLoggedIn() {
    const user = getStoredUser();
    return Boolean(user && user.loggedIn);
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

function initializeAuthStatus() {
    const authStatus = document.getElementById('auth-status');
    const user = getStoredUser();
    if (authStatus) {
        authStatus.textContent = user && user.loggedIn
            ? `Signed in as ${user.username}`
            : 'Guest mode';
    }
}

function initializeRegistrationView() {
    const user = getStoredUser();
    const loginBox = document.getElementById('login-box');
    const homepageContent = document.getElementById('homepage-content');
    const welcomeMessage = document.getElementById('welcome-message');

    if (user && user.loggedIn && loginBox && homepageContent && welcomeMessage) {
        welcomeMessage.textContent = `Welcome back, ${user.username}! 👋`;
        loginBox.classList.add('hidden');
        homepageContent.classList.remove('hidden');
    }
}

// Give lesson sections stable deep links used by the quiz review.
function initializeLessonAnchors() {
    const page = window.location.pathname.split('/').pop();
    const sectionIds = {
        'html.html': [
            'html-overview', 'html-document-structure', 'html-elements-attributes',
            'html-headings-text', 'html-links-images-lists', 'html-semantic-structure',
            'html-tables', 'html-forms-labels'
        ],
        'css.html': [
            'css-overview', 'css-syntax', 'css-selectors', 'css-colors-typography',
            'css-box-model', 'css-flexbox', 'css-responsive-design', 'css-interactive-states'
        ],
        'js.html': [
            'js-overview', 'js-variables-syntax', 'js-data-types', 'js-conditions',
            'js-functions', 'js-dom', 'js-events', 'js-arrays-loops', 'js-form-validation'
        ]
    }[page];

    if (!sectionIds) return;

    document.querySelectorAll('.notes-container .note-card').forEach((section, index) => {
        if (sectionIds[index]) section.id = sectionIds[index];
    });

    if (window.location.hash) {
        requestAnimationFrame(() => {
            document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
        });
    }
}

function simulateLogin() {
    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value;
    const confirm = document.getElementById('confirm-password')?.value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const confirmError = document.getElementById('confirm-error');
    const generalError = document.getElementById('general-error');

    [usernameError, passwordError, confirmError].forEach(error => {
        if (error) error.textContent = '';
    });
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
    const loginBox = document.getElementById('login-box');
    const homepageContent = document.getElementById('homepage-content');
    const authStatus = document.getElementById('auth-status');

    if (welcomeMessage) welcomeMessage.textContent = `Welcome, ${username}! 👋`;
    if (authStatus) authStatus.textContent = `Signed in as ${username}`;
    if (loginBox) loginBox.classList.add('hidden');
    if (homepageContent) homepageContent.classList.remove('hidden');
}

function registerUser() {
    const savedPage = sessionStorage.getItem('redirectTarget');
    if (isUserLoggedIn()) localStorage.setItem('isRegistered', 'true');

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
    window.location.href = 'index.html';
}

function logOutUser() {
    clearSavedUser();
    sessionStorage.removeItem('redirectTarget');
    window.location.href = 'index.html';
}
