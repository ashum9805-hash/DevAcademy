# DevAcademy

DevAcademy is a beginner-friendly web development learning site built with plain HTML, CSS, and JavaScript. It helps learners explore the fundamentals of front-end development through structured notes, interactive examples, and a simple sign-in flow.

## Overview

The project is designed as a lightweight learning portal for students who want to understand:

- HTML structure and semantic elements
- CSS styling, layouts, and responsiveness
- JavaScript basics and DOM manipulation
- Simple user registration and demo navigation flow

This repository is a static web app with no build tools or package install required.

## Features

- Responsive landing page with navigation and theme toggle
- Beginner-friendly course modules for HTML, CSS, and JavaScript
- Code examples and lesson notes for each topic
- Dark/light mode toggle using browser localStorage
- Registration/sign-in flow with validation logic
- Mobile-friendly design for learning on different screen sizes

## Project Structure

```text
DevAcademy/
├── index.html              # Home page and course overview
├── html.html               # HTML lesson notes
├── css.html                # CSS lesson notes
├── js.html                 # JavaScript lesson notes
├── regist.html             # Login / registration page
├── script.js               # Shared site logic (theme toggles, auth flow)
├── auth-check.js           # Redirect protection for protected pages
├── style.css               # Main styling
├── notes.css               # Shared lesson page styling
├── regist.css              # Registration page styles
├── quiz.html               # Quiz page (project feature)
├── quiz.css                # Quiz styling
├── practice.html           # Practice/demo page
├── about.html              # About page
├── contact.html            # Contact page
├── contact.css             # Contact page styling
├── playground.js           # Playground demo logic
├── playground.css          # Playground styling
├── preview.css             # Preview theme styling
├── notes_js.css            # JavaScript notes styling
├── notes_2.css             # Extra note styling
├── README.md               # Project documentation
└── ...
```

## Learning Modules

### 1. HTML
Covers:
- page structure
- tags and attributes
- semantic elements
- forms and page organization

### 2. CSS
Covers:
- selectors and properties
- colors, fonts, and spacing
- box model
- flexbox
- hover effects and transitions

### 3. JavaScript
Covers:
- variables and data types
- functions
- DOM manipulation
- events and listeners
- conditionals and loops

## Getting Started

### Option 1: Open directly in the browser

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Start learning from the home page.

### Option 2: Run a local server

If you prefer serving the project locally:

```bash
git clone https://github.com/ashum9805-hash/DevAcademy.git
cd DevAcademy
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Demo Flow

- Visit the home page
- Register or sign in via the registration form
- Access HTML, CSS, and JavaScript lesson pages
- Explore course content and interactive examples

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)

## Notes

This project is intentionally simple and static, making it ideal for beginners learning core web technologies without the complexity of modern frameworks.

## License

This project is provided for learning purposes. If you are using it for a personal or educational project, you may adapt it freely.

## Author

Built as a beginner-focused web learning platform for practical front-end education.
