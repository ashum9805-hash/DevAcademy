# DevAcademy

DevAcademy is a beginner-friendly website for learning the fundamentals of front-end web development. It is built with plain HTML, CSS, and JavaScript and includes lesson notes, a live code playground, and a knowledge quiz.

The site is static and has no build step or package dependencies. **You can browse the lessons, playground, and quiz as a guest—sign-up is not required.**

## Features

- Responsive home page introducing HTML, CSS, and JavaScript.
- Lesson pages with beginner-focused notes, examples, checklists, and links between modules.
- A playground where you can edit HTML and run it in a live preview.
- A 21-question quiz with shuffled questions, previous/skip controls, score breakdowns, answer explanations, and links to related lesson notes.
- Light and dark themes; the selected theme is saved in browser storage when available.
- Optional demo sign-in/registration flow that stores a username locally on the current browser. It is not required to access site content and is not a real account or authentication system.
- Responsive navigation with a Notes dropdown.

## Getting started

### Open the site directly

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Choose a lesson from the **Notes** menu, open the playground, or try the quiz. No account is needed.

### Run a local server (recommended)

```bash
git clone https://github.com/ashum9805-hash/DevAcademy.git
cd DevAcademy
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Learning modules

- **HTML** (`html.html`): document structure, elements and attributes, headings, links, images, lists, semantic structure, tables, and forms.
- **CSS** (`css.html`): CSS syntax and selectors, typography and color, the box model, Flexbox, responsive design, and interactive states.
- **JavaScript** (`js.html`): variables and data types, conditions, functions, DOM manipulation, events, arrays and loops, and form validation.

The quiz answer review links to the related lesson sections.

## Main files

```text
DevAcademy/
├── index.html                 # Landing page
├── html.html                  # HTML lesson notes
├── css.html                   # CSS lesson notes
├── js.html                    # JavaScript lesson notes
├── practice.html              # Code playground
├── quiz.html                  # Quiz interface
├── quiz.js                    # Quiz questions and behavior
├── about.html                 # About page
├── contact.html               # Contact page and demo form
├── regist.html                # Optional demo sign-in/registration page
├── script.js                  # Shared navigation, theme, and demo profile behavior
├── style.css                  # Shared site styles
├── landing.css                # Landing-page styles
├── notes.css                  # Lesson-page styles
├── quiz.css                   # Quiz styles
├── quiz-interactions.css      # Quiz navigation and answer-review styles
├── playground.css             # Playground styles
├── playground.js              # Playground behavior
├── regist.css                 # Sign-in/registration styles
├── contact.css                # Contact-page styles
└── assets/
    └── css/site-helpers.css   # Shared navigation and status styles
```

## Sign-in and privacy note

Signing in is optional and does not unlock lessons or other pages. The demo form validates the entered username and password fields in the browser and can remember a demo username in `localStorage`; it does not create an account on a server, verify credentials, or provide secure authentication. Do not enter a real password.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

## Educational use

DevAcademy is a class-project learning website intended to help beginners explore web development. Its examples are starting points for practice, not a substitute for further study.
