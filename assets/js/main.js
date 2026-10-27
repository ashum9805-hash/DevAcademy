document.addEventListener('DOMContentLoaded', () => {
    const authStatus = document.getElementById('auth-status');
    if (!authStatus) return;

    const savedUser = (() => {
        try {
            const raw = localStorage.getItem('devacademy-user');
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    })();

    authStatus.textContent = savedUser && savedUser.loggedIn
        ? `Signed in as ${savedUser.username}`
        : 'Guest mode';
});
