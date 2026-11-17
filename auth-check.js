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
    }

    // Load the optional interactive lesson additions only on the three course pages.
    const page = window.location.pathname.split('/').pop();
    if (['html.html', 'css.html', 'js.html'].includes(page)) {
        const stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = 'course-interactions.css';
        document.head.append(stylesheet);

        const lessonScript = document.createElement('script');
        lessonScript.src = 'course-interactions.js';
        lessonScript.defer = true;
        document.head.append(lessonScript);
    }
})();
