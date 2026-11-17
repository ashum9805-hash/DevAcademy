(function () {
    'use strict';

    const CHECKS = {
        html: [
            { q: 'What is the primary role of HTML?', choices: ['Control presentation', 'Describe document structure and meaning', 'Run server logic'], answer: 1, explain: 'HTML describes page structure and meaning. CSS handles presentation and JavaScript handles behavior.', ref: 'html-overview' },
            { q: 'Which element contains visible page content?', choices: ['<head>', '<body>', '<title>'], answer: 1, explain: 'Visible content belongs in the body. The head contains document metadata and resource links.', ref: 'html-document-structure' },
            { q: 'In <a href="about.html">About</a>, what is href?', choices: ['An element', 'An attribute', 'A value'], answer: 1, explain: 'href is an attribute that provides extra information about the a element.', ref: 'html-elements-attributes' },
            { q: 'Which heading is the main page heading?', choices: ['h1', 'h3', 'p'], answer: 0, explain: 'A page normally has one clear h1 to establish the primary topic.', ref: 'html-headings-text' },
            { q: 'What should an informative image’s alt text describe?', choices: ['The image file name', 'The relevant meaning in context', 'A decorative style'], answer: 1, explain: 'Alt text should communicate the relevant purpose or meaning of an informative image.', ref: 'html-links-images-lists' },
            { q: 'Which element is a good landmark for the main page content?', choices: ['div', 'main', 'span'], answer: 1, explain: 'main identifies the document’s dominant content and acts as a useful accessibility landmark.', ref: 'html-semantic-structure' },
            { q: 'When should you use a table?', choices: ['For whole-page layout', 'For genuinely tabular data', 'For a navigation menu'], answer: 1, explain: 'Tables should present row-and-column data, not lay out an entire page.', ref: 'html-tables' },
            { q: 'What should each form input be associated with?', choices: ['A label', 'A table', 'A class selector'], answer: 0, explain: 'A visible label explains the control’s purpose and supports keyboard and screen-reader use.', ref: 'html-forms-labels' }
        ],
        css: [
            { q: 'What is the primary role of CSS?', choices: ['Store page text', 'Control presentation', 'Submit form data'], answer: 1, explain: 'CSS controls appearance, layout, spacing, typography, and interactive states.', ref: 'css-overview' },
            { q: 'What does a selector choose?', choices: ['The elements a rule targets', 'The browser font', 'The document title'], answer: 0, explain: 'A selector determines which HTML elements receive the declarations in a rule.', ref: 'css-syntax' },
            { q: 'Which selector has the strongest typical specificity?', choices: ['.card', 'p', '#hero'], answer: 2, explain: 'An ID selector is generally more specific than a class or element selector.', ref: 'css-selectors' },
            { q: 'Which property controls the space between text lines?', choices: ['line-height', 'border-radius', 'gap'], answer: 0, explain: 'line-height controls the vertical spacing of lines inside a text box.', ref: 'css-colors-typography' },
            { q: 'Which list is the correct inside-out box-model order?', choices: ['Margin, border, padding, content', 'Content, padding, border, margin', 'Padding, content, margin, border'], answer: 1, explain: 'The box progresses from content, through padding and border, to the outside margin.', ref: 'css-box-model' },
            { q: 'What does justify-content control in a row-direction flex container?', choices: ['Main-axis distribution', 'Cross-axis text language', 'HTML semantics'], answer: 0, explain: 'justify-content distributes flex items along the main axis.', ref: 'css-flexbox' },
            { q: 'What is a media query used for?', choices: ['Apply styles at screen conditions', 'Send form requests', 'Create HTML elements'], answer: 0, explain: 'Media queries apply styles when viewport or device conditions match.', ref: 'css-responsive-design' },
            { q: 'Which pseudo-class reflects keyboard focus on a control?', choices: [':hover', ':focus-visible', ':visited'], answer: 1, explain: 'focus-visible helps show where keyboard focus is while avoiding unnecessary mouse-focus styling.', ref: 'css-interactive-states' }
        ],
        js: [
            { q: 'What is JavaScript commonly used for on a page?', choices: ['Define HTML meaning', 'Add behavior and logic', 'Define CSS borders'], answer: 1, explain: 'JavaScript responds to events and updates content, state, or the DOM.', ref: 'js-overview' },
            { q: 'Which keyword declares a binding that should not be reassigned?', choices: ['const', 'let', 'class'], answer: 0, explain: 'const prevents reassignment of the binding, although a const object can still be mutated.', ref: 'js-variables-syntax' },
            { q: 'What data type represents true or false?', choices: ['string', 'boolean', 'object'], answer: 1, explain: 'A boolean has one of two values: true or false.', ref: 'js-data-types' },
            { q: 'Which strict comparison checks both type and value?', choices: ['==', '===', '='], answer: 1, explain: '=== compares both type and value without performing type coercion.', ref: 'js-conditions' },
            { q: 'What does a function return value become?', choices: ['The result available to the caller', 'Only a console message', 'A CSS declaration'], answer: 0, explain: 'A return statement sends a value back from the function to the calling code.', ref: 'js-functions' },
            { q: 'Which method selects the first matching DOM element?', choices: ['document.querySelector()', 'document.createStyle()', 'window.alert()'], answer: 0, explain: 'querySelector returns the first element matching a CSS selector, or null if none exists.', ref: 'js-dom' },
            { q: 'Which method listens for an event on an element?', choices: ['addEventListener()', 'textContent()', 'querySelectorAll()'], answer: 0, explain: 'addEventListener connects an event such as click or submit to a function.', ref: 'js-events' },
            { q: 'What does an array store?', choices: ['An ordered collection of values', 'Only HTML headings', 'Only style rules'], answer: 0, explain: 'Arrays store ordered collections whose items are commonly accessed by index.', ref: 'js-arrays-loops' },
            { q: 'Why must server-side validation also exist?', choices: ['To replace all HTML', 'Because browser checks can be bypassed', 'To improve only visual styling'], answer: 1, explain: 'A browser-side check improves feedback but cannot be trusted as a security boundary.', ref: 'js-form-validation' }
        ]
    };

    function progressKey(course) { return `devacademy-module-check-${course}`; }

    function init() {
        const page = window.location.pathname.split('/').pop();
        const course = page === 'html.html' ? 'html' : page === 'css.html' ? 'css' : page === 'js.html' ? 'js' : '';
        if (!course) return;

        const main = document.querySelector('.notes-container');
        if (!main) return;
        const recap = main.querySelector('.recap-box');
        if (!recap) return;

        const questions = CHECKS[course];
        const section = document.createElement('section');
        section.className = 'module-check';
        section.setAttribute('aria-labelledby', 'module-check-title');
        section.innerHTML = `<header><span class="module-check-kicker">END-OF-MODULE CHECK</span><h2 id="module-check-title">Test what you learned</h2><p>Answer ${questions.length} questions, review the explanations, then retry anything you missed.</p></header><div class="module-check-progress"><span data-check-progress>0 / ${questions.length} answered correctly</span><span class="module-check-track"><i></i></span></div><div class="module-check-questions"></div><div class="module-check-result" aria-live="polite"><strong data-check-score>Not attempted</strong><p data-check-message>Complete all questions to finish this course check.</p><button type="button" data-check-reset hidden>Reset course check</button></div>`;
        const list = section.querySelector('.module-check-questions');

        questions.forEach((item, index) => {
            const fieldset = document.createElement('fieldset');
            fieldset.className = 'module-question';
            fieldset.dataset.question = String(index);
            fieldset.innerHTML = `<legend><span>${String(index + 1).padStart(2, '0')}</span>${item.q}</legend><div class="module-choices"></div><div class="module-feedback" aria-live="polite"></div>`;
            const choices = fieldset.querySelector('.module-choices');
            item.choices.forEach((choice, choiceIndex) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="${course}-check-${index}" value="${choiceIndex}"><span>${choice}</span>`;
                choices.append(label);
            });
            list.append(fieldset);
        });

        recap.after(section);

        function update() {
            let correct = 0;
            let answered = 0;
            section.querySelectorAll('.module-question').forEach((fieldset, index) => {
                const selected = fieldset.querySelector('input:checked');
                if (!selected) return;
                answered += 1;
                const item = questions[index];
                const isCorrect = Number(selected.value) === item.answer;
                if (isCorrect) correct += 1;
                fieldset.classList.toggle('is-correct', isCorrect);
                fieldset.classList.toggle('is-wrong', !isCorrect);
                fieldset.querySelectorAll('input').forEach(input => { input.disabled = true; });
                const feedback = fieldset.querySelector('.module-feedback');
                feedback.innerHTML = isCorrect
                    ? `<strong>Correct.</strong> ${item.explain}`
                    : `<strong>Not quite.</strong> ${item.explain} <a href="#${item.ref}">Review this lesson section →</a>`;
            });

            section.querySelector('[data-check-progress]').textContent = `${correct} / ${questions.length} answered correctly`;
            section.querySelector('.module-check-track i').style.width = `${Math.round(correct / questions.length * 100)}%`;
            const score = section.querySelector('[data-check-score]');
            const message = section.querySelector('[data-check-message]');
            const reset = section.querySelector('[data-check-reset]');

            if (answered === questions.length) {
                reset.hidden = false;
                if (correct === questions.length) {
                    score.textContent = 'Module check complete — 100%';
                    message.textContent = 'Excellent work. This module is marked complete.';
                    try { localStorage.setItem(progressKey(course), 'complete'); } catch (error) { /* Browsing still works. */ }
                } else {
                    score.textContent = `Score: ${Math.round(correct / questions.length * 100)}%`;
                    message.textContent = 'Review the linked sections, reset the check, and try again.';
                }
            } else {
                reset.hidden = answered === 0;
                score.textContent = 'Check in progress';
                message.textContent = `${answered} of ${questions.length} questions answered.`;
            }
        }

        list.addEventListener('change', event => {
            if (!(event.target instanceof HTMLInputElement)) return;
            const fieldset = event.target.closest('.module-question');
            if (!fieldset) return;
            fieldset.querySelectorAll('input').forEach(input => { input.disabled = true; });
            update();
        });

        section.querySelector('[data-check-reset]').addEventListener('click', () => {
            section.querySelectorAll('.module-question').forEach(fieldset => {
                fieldset.classList.remove('is-correct', 'is-wrong');
                fieldset.querySelectorAll('input').forEach(input => { input.checked = false; input.disabled = false; });
                fieldset.querySelector('.module-feedback').innerHTML = '';
            });
            try { localStorage.removeItem(progressKey(course)); } catch (error) { /* Ignore storage restrictions. */ }
            update();
        });

        try {
            if (localStorage.getItem(progressKey(course)) === 'complete') {
                section.querySelector('[data-check-progress]').textContent = `${questions.length} / ${questions.length} answered correctly`;
                section.querySelector('.module-check-track i').style.width = '100%';
                section.querySelector('[data-check-score]').textContent = 'Module check complete — 100%';
                section.querySelector('[data-check-message]').textContent = 'This module check has already been completed.';
                section.querySelector('[data-check-reset]').hidden = false;
            }
        } catch (error) { /* Keep the check usable. */ }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
