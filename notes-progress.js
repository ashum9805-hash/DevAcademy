(function () {
    'use strict';

    const STORAGE_KEY = 'devacademy-learning-progress-v1';
    const LESSONS = {
        html: ['html-overview', 'html-document-structure', 'html-elements-attributes', 'html-headings-text', 'html-links-images-lists', 'html-semantic-structure', 'html-tables', 'html-forms-labels'],
        css: ['css-overview', 'css-syntax', 'css-selectors', 'css-colors-typography', 'css-box-model', 'css-flexbox', 'css-responsive-design', 'css-interactive-states'],
        js: ['js-overview', 'js-variables-syntax', 'js-data-types', 'js-conditions', 'js-functions', 'js-dom', 'js-events', 'js-arrays-loops', 'js-form-validation']
    };
    const TITLES = {
        'html-overview': 'HTML introduction', 'html-document-structure': 'Document structure', 'html-elements-attributes': 'Elements and attributes', 'html-headings-text': 'Headings and text', 'html-links-images-lists': 'Links, images, and lists', 'html-semantic-structure': 'Semantic page structure', 'html-tables': 'Tables', 'html-forms-labels': 'Forms and labels',
        'css-overview': 'CSS introduction', 'css-syntax': 'CSS syntax', 'css-selectors': 'Selectors and specificity', 'css-colors-typography': 'Color and typography', 'css-box-model': 'The box model', 'css-flexbox': 'Flexbox layout', 'css-responsive-design': 'Responsive design', 'css-interactive-states': 'Interactive states',
        'js-overview': 'JavaScript introduction', 'js-variables-syntax': 'Syntax and variables', 'js-data-types': 'Data types', 'js-conditions': 'Operators and conditions', 'js-functions': 'Functions', 'js-dom': 'DOM manipulation', 'js-events': 'Event listeners', 'js-arrays-loops': 'Arrays and loops', 'js-form-validation': 'Form validation'
    };
    const COURSES = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

    function readProgress() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            return { lastLesson: parsed.lastLesson || '', completed: Array.isArray(parsed.completed) ? parsed.completed : [] };
        } catch (error) {
            return { lastLesson: '', completed: [] };
        }
    }

    function writeProgress(progress) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (error) { /* Keep the page usable if storage is blocked. */ }
    }

    function courseForLesson(id) { return Object.keys(LESSONS).find(course => LESSONS[course].includes(id)); }
    function lessonUrl(id) { const course = courseForLesson(id); return course ? `${course}.html#${id}` : 'notes.html'; }

    function recordLastLesson(id) {
        if (!id || !courseForLesson(id)) return;
        const progress = readProgress();
        progress.lastLesson = id;
        writeProgress(progress);
    }

    function updateDashboard() {
        const progress = readProgress();
        const allLessons = Object.values(LESSONS).flat();
        const total = allLessons.length;
        const completed = progress.completed.filter(id => allLessons.includes(id));
        const percent = total ? Math.round(completed.length / total * 100) : 0;
        const count = document.getElementById('progress-count');
        const fill = document.getElementById('progress-fill');
        const meter = document.querySelector('.progress-meter');
        const summary = document.getElementById('progress-summary');
        if (count) count.textContent = `${completed.length} / ${total}`;
        if (fill) fill.style.width = `${percent}%`;
        if (meter) meter.setAttribute('aria-label', `${completed.length} of ${total} lessons complete`);
        if (summary) summary.textContent = completed.length ? `${completed.length} lesson${completed.length === 1 ? '' : 's'} completed. Nice work—keep your momentum going.` : 'No lessons completed yet. Open a lesson and mark it complete when you’re ready.';

        Object.entries(LESSONS).forEach(([course, ids]) => {
            const courseDone = ids.filter(id => completed.includes(id)).length;
            const courseCount = document.querySelector(`[data-course-count="${course}"]`);
            const courseFill = document.querySelector(`[data-course-fill="${course}"]`);
            if (courseCount) courseCount.textContent = `${courseDone} / ${ids.length} complete`;
            if (courseFill) courseFill.style.width = `${Math.round(courseDone / ids.length * 100)}%`;
        });
        document.querySelectorAll('[data-lesson]').forEach(link => {
            const done = completed.includes(link.dataset.lesson);
            link.classList.toggle('is-complete', done);
            link.setAttribute('aria-label', `${TITLES[link.dataset.lesson]}${done ? ', completed' : ''}`);
        });

        const continueTitle = document.getElementById('continue-title');
        const continueDescription = document.getElementById('continue-description');
        const continueLink = document.getElementById('continue-link');
        if (progress.lastLesson && continueLink && TITLES[progress.lastLesson]) {
            const course = courseForLesson(progress.lastLesson);
            if (continueTitle) continueTitle.textContent = TITLES[progress.lastLesson];
            if (continueDescription) continueDescription.textContent = `${COURSES[course]} · ${completed.includes(progress.lastLesson) ? 'Completed lesson — revisit it or choose another topic.' : 'Continue with your most recently opened lesson.'}`;
            continueLink.href = lessonUrl(progress.lastLesson);
            continueLink.innerHTML = `Continue learning <span aria-hidden="true">→</span>`;
        }
    }

    function setupCoursePage() {
        const page = window.location.pathname.split('/').pop();
        const course = page === 'html.html' ? 'html' : page === 'css.html' ? 'css' : page === 'js.html' ? 'js' : '';
        const ids = LESSONS[course];
        const main = document.querySelector('.notes-container');
        if (!ids || !main) return;

        const cards = [...main.querySelectorAll('.note-card')];
        cards.forEach((card, index) => {
            const id = ids[index];
            if (!id) return;
            card.id = id;
            if (card.querySelector('.lesson-complete-button')) return;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'lesson-complete-button';
            button.dataset.completeLesson = id;
            button.textContent = 'Mark lesson complete';
            button.addEventListener('click', () => {
                const progress = readProgress();
                const isComplete = progress.completed.includes(id);
                progress.completed = isComplete ? progress.completed.filter(item => item !== id) : [...progress.completed, id];
                progress.lastLesson = id;
                writeProgress(progress);
                updateCompleteButtons();
                button.focus();
            });
            card.append(button);
        });

        const links = ids.map((id, index) => `<li><a href="#${id}" data-section-link="${id}"><span>${String(index + 1).padStart(2, '0')}</span>${TITLES[id]}</a></li>`).join('');
        const originalContent = document.createElement('div');
        originalContent.className = 'lesson-column';
        while (main.firstChild) originalContent.append(main.firstChild);

        const layout = document.createElement('div');
        layout.className = 'lesson-layout';
        const sidebar = document.createElement('aside');
        sidebar.className = 'lesson-outline';
        sidebar.innerHTML = `<span class="outline-label">IN THIS COURSE</span><h2>${COURSES[course]} lessons</h2><ol>${links}</ol><a class="outline-library-link" href="notes.html">← All subjects</a>`;
        const reference = document.createElement('aside');
        reference.className = 'lesson-reference';
        reference.innerHTML = `<div class="reference-card"><span class="reference-icon" aria-hidden="true">✦</span><span class="outline-label">LEARNING TIP</span><h2>Go at your pace</h2><p>Choose any lesson from the outline. Mark it complete when you feel ready, and your progress will be saved in this browser.</p><a href="notes.html">View all subjects →</a></div><div class="reference-progress"><strong>Course progress</strong><span data-page-progress>0 / ${ids.length} complete</span><span class="mini-track"><i data-page-fill></i></span></div>`;
        layout.append(sidebar, originalContent, reference);
        main.append(layout);

        sidebar.querySelectorAll('[data-section-link]').forEach(link => link.addEventListener('click', () => recordLastLesson(link.dataset.sectionLink)));
        cards.forEach(card => {
            card.addEventListener('click', event => {
                if (event.target.closest('a, button')) return;
                recordLastLesson(card.id);
            });
        });
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        recordLastLesson(entry.target.id);
                        sidebar.querySelectorAll('[data-section-link]').forEach(link => link.classList.toggle('is-current', link.dataset.sectionLink === entry.target.id));
                    }
                });
            }, { rootMargin: '-15% 0px -70% 0px' });
            cards.forEach(card => observer.observe(card));
        }
        updateCompleteButtons();
        if (window.location.hash && ids.includes(decodeURIComponent(window.location.hash.slice(1)))) {
            recordLastLesson(decodeURIComponent(window.location.hash.slice(1)));
        }
    }

    function updateCompleteButtons() {
        const progress = readProgress();
        document.querySelectorAll('[data-complete-lesson]').forEach(button => {
            const complete = progress.completed.includes(button.dataset.completeLesson);
            button.textContent = complete ? '✓ Completed · Mark incomplete' : 'Mark lesson complete';
            button.setAttribute('aria-pressed', String(complete));
        });
        const course = window.location.pathname.includes('html.html') ? 'html' : window.location.pathname.includes('css.html') ? 'css' : window.location.pathname.includes('js.html') ? 'js' : '';
        if (course) {
            const done = LESSONS[course].filter(id => progress.completed.includes(id)).length;
            const label = document.querySelector('[data-page-progress]');
            const fill = document.querySelector('[data-page-fill]');
            if (label) label.textContent = `${done} / ${LESSONS[course].length} complete`;
            if (fill) fill.style.width = `${Math.round(done / LESSONS[course].length * 100)}%`;
        }
        updateDashboard();
    }

    function addLibraryMenuLink() {
        const menu = document.querySelector('.dropdown-menu');
        if (!menu || menu.querySelector('a[href="notes.html"]')) return;
        const item = document.createElement('li');
        item.innerHTML = '<a href="notes.html">📚 Learning Library</a>';
        menu.prepend(item);
    }

    document.addEventListener('DOMContentLoaded', () => {
        addLibraryMenuLink();
        setupCoursePage();
        updateDashboard();
    });
})();
