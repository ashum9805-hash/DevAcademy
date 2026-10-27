# DevAcademy

DevAcademy is a beginner-friendly web development learning platform built with plain HTML, CSS, and JavaScript. The project is designed to teach front-end fundamentals through clean lesson pages, interactive examples, and a simple sign-in flow.

It is a lightweight static website, so you can open it directly in a browser without installing dependencies or running a build step.

## Overview

DevAcademy helps learners understand the core technologies behind the web:

- HTML for structure and content
- CSS for styling and layout
- JavaScript for interactivity and behavior

The project includes a home page, lesson modules, a registration flow, and examples that make learning approachable for beginners.

## Features

- Responsive landing page with navigation
- Course modules for HTML, CSS, and JavaScript
- Beginner-friendly notes and code examples
- Light/dark theme toggle using `localStorage`
- Registration form with validation for username and password fields
- Redirect-based access control for protected lesson pages
- Mobile-friendly layout and simple interactive demos

## Project Structure

```text
DevAcademy/
├── index.html          # Home page and course overview
├── html.html           # HTML lesson notes
├── css.html            # CSS lesson notes
├── js.html             # JavaScript lesson notes
├── regist.html         # Sign-in / registration page
├── script.js           # Shared site behavior and auth logic
├── auth-check.js       # Redirect logic for protected pages
├── style.css           # Main global styling
├── notes.css           # Shared educational page styles
├── regist.css          # Registration page styles
├── quiz.html           # Quiz page
├── quiz.css            # Quiz styles
├── practice.html       # Practice/demo page
├── about.html          # About page
├── contact.html        # Contact page
├── contact.css         # Contact page styling
├── playground.js       # Playground interactions
├── playground.css      # Playground styling
├── preview.css         # Preview styling
├── notes_js.css        # JavaScript note styling
├── notes_2.css         # Additional styling
├── README.md           # Project documentation
└── ...
```

## Learning Modules

### HTML
Covers:
- page structure
- tags and attributes
- semantic elements
- links, images, lists, and content organization

### CSS
Covers:
- selectors and properties
- colors, fonts, and spacing
- the box model
- flexbox layouts
- hover effects and transitions

### JavaScript
Covers:
- variables and data types
- functions
- DOM manipulation
- event listeners
- conditionals and loops

## Getting Started

### Option 1: Open directly in the browser

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Start exploring the lessons from the home page.

### Option 2: Run a local server

```bash
git clone https://github.com/ashum9805-hash/DevAcademy.git
cd DevAcademy
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Authentication Flow

The app includes a simple demo registration system:

- users must register before accessing lesson pages
- successful registration is stored in `sessionStorage`
- locked pages redirect to `regist.html` if access is not allowed
- the original page is remembered so users can continue after sign-in

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Notes

This project is intentionally simple and beginner-focused. It avoids modern frameworks so that learners can focus on understanding the core mechanics of front-end web development.

## License

This project is intended for educational and learning purposes.

## Author

DevAcademy is a learning-focused front-end project designed to help beginners build confidence with HTML, CSS, and JavaScript.
