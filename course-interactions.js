(function () {
    'use strict';

    const EXTRAS = {
        html: [
            ['A browser builds a tree', 'The browser parses nested elements into a document tree. Indentation does not create that relationship—the opening and closing tags do. Keep child elements inside the element that owns them, and close elements in the right order.', '<main>\n  <article>\n    <h2>News</h2>\n    <p>Latest update</p>\n  </article>\n</main>'],
            ['Head metadata is not page content', 'The <head> is for information about the document: its title, character encoding, viewport behavior, stylesheets, and metadata. Visible content belongs in the <body>. A descriptive title helps people identify the page in browser tabs and history.', '<title>Garden Club — Events</title>\n<meta name="description" content="Upcoming community garden events">'],
            ['Nesting and void elements', 'Most HTML elements wrap content and have opening and closing tags. Void elements such as <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, and <code>&lt;input&gt;</code> do not wrap child content and must not have closing tags. Avoid invalid nesting, such as putting a paragraph inside another paragraph.', '<p>Text with <em>nested emphasis</em>.</p>\n<img src="seedlings.jpg" alt="Young seedlings in a tray">'],
            ['A heading is a document outline', 'Choose heading levels by structure, not by how large you want the text to look. A page typically has one clear main heading, with sections using h2 and subsections using h3. CSS controls visual size; heading levels communicate relationships to readers and assistive technology.', '<h1>Community Garden</h1>\n<h2>How to join</h2>\n<h3>Choose a membership</h3>'],
            ['Describe images by their purpose', 'For an informative image, write alternative text that conveys the image’s relevant meaning in context. Decorative images should use an empty alt value so assistive technology can skip them. Avoid repeating nearby captions in alt text.', '<img src="harvest.jpg" alt="Volunteers collecting tomatoes at the garden">\n<img src="leaf-divider.svg" alt="">'],
            ['Semantic elements provide landmarks', 'Use landmarks such as header, nav, main, and footer to communicate the role of page regions. Use article for content that can stand on its own and section for a thematic group with a heading. Semantic tags improve navigation; they do not automatically style a page.', '<main>\n  <section aria-labelledby="events-title">\n    <h2 id="events-title">Upcoming events</h2>\n  </section>\n</main>'],
            ['Accessible tables need relationships', 'Use a caption to name the table, and header cells to label rows or columns. The scope attribute makes the relationship explicit for assistive technology. Keep tables for data comparisons—not visual page layout.', '<th scope="col">Day</th>\n<th scope="col">Activity</th>'],
            ['Forms submit names and values', 'A label connects a human-readable prompt to a control; the name attribute identifies the value in submitted form data. Use the right input type and native constraints such as required or minlength when appropriate. Clear instructions and useful error feedback help everyone complete a form.', '<label for="email">Email address</label>\n<input id="email" name="email" type="email" required>']
        ],
        css: [
            ['HTML and CSS have separate jobs', 'HTML describes what content means; CSS describes how it should look and be arranged. Keeping those roles separate makes pages easier to maintain and lets a design change without rewriting the content.', 'article { color: #263238; }\n.notice { border-left: 4px solid teal; }'],
            ['Declarations form a rule', 'A declaration is one property and value, such as <code>color: navy</code>. A selector can match many elements, while a class can be reused across unrelated elements. A missing brace or misspelled property can make a declaration ineffective, so inspect the browser’s styles panel when a rule does not appear.', '.notice {\n  color: navy; /* property: value */\n}'],
            ['Specificity is only one part of the cascade', 'When declarations conflict, the browser considers relevance, origin and importance, cascade layer, specificity, and source order. Prefer simple reusable classes over escalating selector complexity or relying on <code>!important</code>.', '/* Prefer a reusable class */\n.card-title { color: #263238; }'],
            ['Readable type depends on more than font size', 'Line-height controls the space between text lines and can improve readability substantially. Use relative sizing where practical, and check text/background contrast. A good type scale establishes a hierarchy without making body copy difficult to scan.', 'body { font-size: 1rem; line-height: 1.65; }\nh1 { line-height: 1.15; }'],
            ['Sizing includes padding and borders', 'With the default content-box model, declared width applies only to content; padding and borders are added outside it. The border-box model includes padding and borders in the declared size, which often makes layout calculations more predictable.', '* { box-sizing: border-box; }\n.card { width: 18rem; padding: 1rem; }'],
            ['Flexbox has main and cross axes', 'The main axis follows flex-direction; the cross axis runs perpendicular to it. justify-content distributes items along the main axis, while align-items positions them along the cross axis. Changing row to column changes which physical direction each property controls.', '.toolbar {\n  display: flex;\n  justify-content: space-between; /* main axis */\n  align-items: center; /* cross axis */\n}'],
            ['Start with flexible layouts', 'Responsive design is not just a collection of device-specific breakpoints. Let content wrap, use flexible widths and max-widths, and add media queries when the layout needs a genuine change. Test narrow widths and zoom to catch overflow.', '.layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); gap: 1rem; }'],
            ['Focus is part of the interface', 'Hover is unavailable to many touch users and is not a substitute for keyboard focus. Preserve a clear focus indicator, use :focus-visible for keyboard-oriented styling, and make interactive controls large and clear enough to use.', 'button:hover { background: #184f91; }\nbutton:focus-visible { outline: 3px solid orange; }']
        ],
        js: [
            ['Choose const or let by reassignment', '<code>const</code> prevents reassignment of a binding, while <code>let</code> allows the binding to change. A const object can still have its properties changed; const does not deeply freeze its contents. Prefer const by default and use let when reassignment is needed.', 'const settings = { theme: "light" };\nsettings.theme = "dark"; // allowed\nlet score = 0;\nscore += 1;'],
            ['Values have types; variables have names', 'Strings represent text, numbers represent numeric values, and booleans represent true/false states. JavaScript may convert values in some operations, so use strict equality (<code>===</code>) to compare both type and value unless conversion is intentional.', '42 === "42" // false\nNumber("42") === 42 // true'],
            ['Make conditions explicit', 'An if statement runs a block only when its condition is truthy. Use <code>===</code> for strict comparisons and logical operators to combine conditions. Be careful with values like an empty string, zero, null, and undefined, which are falsy.', 'if (score >= 70 && hasSubmitted) {\n  showResult();\n}'],
            ['Parameters are inputs; return is output', 'Parameters name the inputs a function receives. A return statement sends a result back to its caller and stops that function. Keeping a function focused on one task makes it easier to test and reuse.', 'function addTax(price, rate) {\n  return price * (1 + rate);\n}\nconst total = addTax(20, 0.1);'],
            ['DOM selection can fail', 'querySelector returns the first matching element, or null when there is no match. Check that the element exists before changing it. Use textContent for plain text; it avoids interpreting a string as HTML markup.', 'const title = document.querySelector("h1");\nif (title) title.textContent = "Welcome";'],
            ['Events bubble through the page', 'Many events bubble from the target element to its ancestors. This allows event delegation: one listener on a parent can handle actions from many child controls. Use the event target carefully and keep controls keyboard accessible.', 'list.addEventListener("click", event => {\n  if (event.target.matches("button.remove")) {\n    event.target.closest("li")?.remove();\n  }\n});'],
            ['Arrays use zero-based indexes', 'The first array item is at index 0, and the final valid index is length minus one. Accessing a missing index returns undefined. Array methods such as forEach and map can make common collection operations easier to express.', 'const colors = ["red", "blue"];\ncolors[0]; // "red"\ncolors.length; // 2'],
            ['Loops need a clear stopping condition', 'A loop repeats until its condition becomes false. In a counter loop, update the counter each iteration and ensure the stopping condition will eventually be met. Off-by-one errors often come from using < versus <=.', 'for (let index = 0; index < items.length; index += 1) {\n  console.log(items[index]);\n}'],
            ['Client checks help, but do not secure data', 'Browser validation can give immediate feedback, but visitors can bypass it. A server must independently validate and authorize submitted data before trusting or storing it. Never treat a client-side check as a security boundary.', 'if (password.length < 8) {\n  showMessage("Use at least 8 characters.");\n}']
        ]
    };

    function addDeepDive(card, content) {
        const panel = document.createElement('aside');
        panel.className = 'deep-dive';
        panel.innerHTML = `<span class="deep-dive-label">GO A LITTLE DEEPER</span><h3>${content[0]}</h3><p>${content[1]}</p><pre><code></code></pre>`;
        panel.querySelector('code').textContent = content[2];
        card.append(panel);
    }

    function addHtmlExplorer(card) {
        const lab = document.createElement('div');
        lab.className = 'learning-lab html-lab';
        lab.innerHTML = '<div class="lab-heading"><span>TRY IT</span><h3>Build a tiny page</h3><p>Change the title and watch the preview update.</p></div><label for="html-demo-title">Page title</label><input id="html-demo-title" type="text" value="My first page" maxlength="50"><div class="html-preview" aria-live="polite"><span class="preview-kicker">LIVE PREVIEW</span><h4></h4><p>This is a paragraph inside the page body.</p><code>&lt;h1&gt;Your title&lt;/h1&gt;</code></div>';
        const input = lab.querySelector('input');
        const heading = lab.querySelector('.html-preview h4');
        const code = lab.querySelector('.html-preview code');
        const update = () => { const title = input.value.trim() || 'Untitled page'; heading.textContent = title; code.textContent = `<h1>${title}</h1>`; };
        input.addEventListener('input', update);
        update();
        card.append(lab);
    }

    function addBoxModelLab(card) {
        const lab = document.createElement('div');
        lab.className = 'learning-lab box-lab';
        lab.innerHTML = '<div class="lab-heading"><span>INTERACTIVE MODEL</span><h3>Adjust the box</h3><p>Change padding and border thickness to see how the element changes.</p></div><div class="box-lab-stage"><div class="box-lab-margin"><div class="box-lab-border"><div class="box-lab-padding"><div class="box-lab-content">Content area</div></div></div></div></div><div class="lab-controls"><label>Padding <output data-value="padding">24px</output><input type="range" min="8" max="48" value="24" data-control="padding"></label><label>Border <output data-value="border">6px</output><input type="range" min="1" max="16" value="6" data-control="border"></label></div>';
        const padding = lab.querySelector('[data-control="padding"]');
        const border = lab.querySelector('[data-control="border"]');
        const paddingBox = lab.querySelector('.box-lab-padding');
        const borderBox = lab.querySelector('.box-lab-border');
        padding.addEventListener('input', () => { paddingBox.style.padding = `${padding.value}px`; lab.querySelector('[data-value="padding"]').value = `${padding.value}px`; });
        border.addEventListener('input', () => { borderBox.style.borderWidth = `${border.value}px`; lab.querySelector('[data-value="border"]').value = `${border.value}px`; });
        card.append(lab);
    }

    function addFlexboxLab(card) {
        const lab = document.createElement('div');
        lab.className = 'learning-lab flex-lab';
        lab.innerHTML = '<div class="lab-heading"><span>TRY A LAYOUT</span><h3>Flexbox alignment</h3><p>Switch the main-axis alignment and see how the items move.</p></div><div class="flex-preview" data-flex-preview><span>one</span><span>two</span><span>three</span></div><div class="lab-actions" role="group" aria-label="Choose item alignment"><button type="button" data-align="flex-start" aria-pressed="false">Start</button><button type="button" data-align="center" aria-pressed="true">Center</button><button type="button" data-align="space-between" aria-pressed="false">Space between</button></div><p class="lab-feedback" aria-live="polite">Main-axis alignment: center</p>';
        const preview = lab.querySelector('[data-flex-preview]');
        lab.querySelectorAll('[data-align]').forEach(button => button.addEventListener('click', () => {
            preview.style.justifyContent = button.dataset.align;
            lab.querySelectorAll('[data-align]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
            lab.querySelector('.lab-feedback').textContent = `Main-axis alignment: ${button.textContent.toLowerCase()}`;
        }));
        card.append(lab);
    }

    function addJavascriptLab(card) {
        const lab = document.createElement('div');
        lab.className = 'learning-lab js-lab';
        lab.innerHTML = '<div class="lab-heading"><span>LIVE DOM DEMO</span><h3>Respond to an event</h3><p>Click the buttons: JavaScript updates the page in response to each event.</p></div><div class="counter-display" aria-live="polite"><span data-counter>0</span><small>button clicks</small></div><div class="lab-actions"><button type="button" data-action="increment">Add one</button><button type="button" class="lab-secondary" data-action="reset">Reset</button></div><div class="event-trace" aria-live="polite">Waiting for your first click…</div>';
        let count = 0;
        const countLabel = lab.querySelector('[data-counter]');
        const trace = lab.querySelector('.event-trace');
        lab.querySelector('[data-action="increment"]').addEventListener('click', () => { count += 1; countLabel.textContent = count; trace.textContent = `Click event received. The count is now ${count}.`; });
        lab.querySelector('[data-action="reset"]').addEventListener('click', () => { count = 0; countLabel.textContent = count; trace.textContent = 'Reset event received. The count is back to zero.'; });
        card.append(lab);
    }

    function init() {
        const page = window.location.pathname.split('/').pop();
        const course = page === 'html.html' ? 'html' : page === 'css.html' ? 'css' : page === 'js.html' ? 'js' : '';
        if (!course) return;
        const cards = [...document.querySelectorAll('.notes-container .note-card')];
        EXTRAS[course].forEach((content, index) => { if (cards[index]) addDeepDive(cards[index], content); });
        if (course === 'html' && cards[0]) addHtmlExplorer(cards[0]);
        if (course === 'css') {
            if (cards[4]) addBoxModelLab(cards[4]);
            if (cards[5]) addFlexboxLab(cards[5]);
        }
        if (course === 'js' && cards[6]) addJavascriptLab(cards[6]);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
