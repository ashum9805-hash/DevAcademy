(function () {
    // Demo-only auth check: allow browsing without forcing registration.
    // Users can still sign in to save progress, and that state persists in localStorage.
    const savedUser = (() => {
        try {
            const raw = localStorage.getItem('devacademy-user');
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    })();

    if (savedUser && savedUser.loggedIn) {
        // Keep the user in their demo-signed-in state.
        return;
    }
})();
