document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active') ? 'true' : 'false');
        });
    }

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    dropdownMenu.classList.toggle('active');
                    const expanded = dropdownMenu.classList.contains('active');
                    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                }
            }
        });
    });

    const navItems = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }

        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks?.classList.remove('active');
                if (hamburger) {
                    hamburger.textContent = '☰';
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
});
