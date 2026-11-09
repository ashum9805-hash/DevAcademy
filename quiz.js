const questionBank = [
    { topic: 'HTML', prompt: 'What does the <!doctype html> declaration do?', options: ['Loads the page stylesheet', 'Tells the browser to use modern HTML standards mode', 'Creates the page title', 'Starts the visible page content'], answer: 1, explanation: 'The doctype declaration tells browsers to render the document using standards mode.', note: 'html.html#html-document-structure', noteLabel: 'HTML: Basic document structure' },
    { topic: 'HTML', prompt: 'Which element is the main content landmark of a page?', options: ['<section>', '<main>', '<body>', '<content>'], answer: 1, explanation: 'The <main> element identifies the primary content of the document.', note: 'html.html#html-semantic-structure', noteLabel: 'HTML: Semantic page structure' },
    { topic: 'HTML', prompt: 'What is the purpose of useful alt text on an informative image?', options: ['It changes the image size', 'It provides a text alternative describing the image', 'It makes the image a link', 'It displays a caption underneath'], answer: 1, explanation: 'Alt text communicates the image’s relevant information to people who cannot see it or when the image is unavailable.', note: 'html.html#html-links-images-lists', noteLabel: 'HTML: Links and images' },
    { topic: 'HTML', prompt: 'How should a label be associated with an input using for and id?', options: ['The label for and input id should have the same value', 'The label for should equal the input name', 'The input id should be omitted', 'Put the label inside the input'], answer: 0, explanation: 'Matching label for and input id associates the label with that field and improves usability and accessibility.', note: 'html.html#html-forms-labels', noteLabel: 'HTML: Forms and labels' },
    { topic: 'HTML', prompt: 'Which element represents an ordered list item?', options: ['<item>', '<li>', '<ol-item>', '<dt>'], answer: 1, explanation: 'Each item in an ordered or unordered list is marked up with <li>.', note: 'html.html#html-links-images-lists', noteLabel: 'HTML: Lists' },
    { topic: 'HTML', prompt: 'When should you use an HTML table?', options: ['To position every page section', 'For data that belongs in rows and columns', 'Whenever you need a border', 'To create a navigation bar'], answer: 1, explanation: 'Tables are intended for tabular data, not general page layout.', note: 'html.html#html-tables', noteLabel: 'HTML: Tables' },
    { topic: 'HTML', prompt: 'Which element gives a page its top-level heading?', options: ['<title>', '<h1>', '<header1>', '<head>'], answer: 1, explanation: '<h1> is a heading in the page content; <title> belongs in the document head and names the browser tab.', note: 'html.html#html-headings-text', noteLabel: 'HTML: Headings and text' },
    { topic: 'CSS', prompt: 'In a CSS rule, what does the selector identify?', options: ['The elements to which the declarations apply', 'The browser window size', 'The stylesheet filename', 'The HTML document language'], answer: 0, explanation: 'A selector matches the elements that should receive the declarations in the rule.', note: 'css.html#css-syntax', noteLabel: 'CSS: Syntax' },
    { topic: 'CSS', prompt: 'Which selector targets every element with class="card"?', options: ['#card', '.card', 'card()', '*card'], answer: 1, explanation: 'A dot followed by the class name is a CSS class selector.', note: 'css.html#css-selectors', noteLabel: 'CSS: Selectors' },
    { topic: 'CSS', prompt: 'What is the box model order from the content outward?', options: ['Content, padding, border, margin', 'Content, margin, padding, border', 'Padding, content, margin, border', 'Border, content, padding, margin'], answer: 0, explanation: 'The content is surrounded by padding, then the border, with margin outside the border.', note: 'css.html#css-box-model', noteLabel: 'CSS: The box model' },
    { topic: 'CSS', prompt: 'Which declaration makes an element a flex container?', options: ['position: flex;', 'display: flex;', 'flex: display;', 'align-items: flex;'], answer: 1, explanation: 'Setting display: flex on a parent creates a flex container for its direct children.', note: 'css.html#css-flexbox', noteLabel: 'CSS: Flexbox' },
    { topic: 'CSS', prompt: 'What does a media query commonly help a page do?', options: ['Change styles based on viewport or device conditions', 'Add HTML content to the page', 'Store data in the browser', 'Validate form fields'], answer: 0, explanation: 'Media queries apply CSS conditionally, often to adapt layouts to smaller screens.', note: 'css.html#css-responsive-design', noteLabel: 'CSS: Responsive design' },
    { topic: 'CSS', prompt: 'Which pseudo-class styles a control when it receives keyboard focus?', options: [':hover', ':focus', ':visited', ':checked'], answer: 1, explanation: ':focus is the state used when an element has keyboard or programmatic focus.', note: 'css.html#css-interactive-states', noteLabel: 'CSS: Interactive states' },
    { topic: 'CSS', prompt: 'Which property sets the space inside an element, between content and border?', options: ['margin', 'padding', 'gap', 'outline'], answer: 1, explanation: 'Padding creates space between an element’s content and its border.', note: 'css.html#css-box-model', noteLabel: 'CSS: The box model' },
    { topic: 'JS', prompt: 'Which keyword declares a variable that should not be reassigned?', options: ['var', 'let', 'const', 'static'], answer: 2, explanation: 'Use const when the variable binding should not be reassigned. The value of an object or array declared const may still be mutable.', note: 'js.html#js-variables-syntax', noteLabel: 'JavaScript: Variables' },
    { topic: 'JS', prompt: 'What does typeof 42 return?', options: ['"integer"', '"number"', '"string"', '"value"'], answer: 1, explanation: 'JavaScript’s typeof operator returns "number" for numeric values, including integers.', note: 'js.html#js-data-types', noteLabel: 'JavaScript: Data types' },
    { topic: 'JS', prompt: 'Which operator checks strict equality without type conversion?', options: ['=', '==', '===', '=>'], answer: 2, explanation: 'The strict equality operator === compares both value and type without coercion.', note: 'js.html#js-conditions', noteLabel: 'JavaScript: Operators and conditions' },
    { topic: 'JS', prompt: 'What does a return statement do inside a function?', options: ['Repeats the function forever', 'Sends a value back to the code that called the function', 'Creates a new variable globally', 'Adds an event listener'], answer: 1, explanation: 'return ends the function and optionally provides a value to the caller.', note: 'js.html#js-functions', noteLabel: 'JavaScript: Functions' },
    { topic: 'JS', prompt: 'Which method selects the first element matching a CSS selector?', options: ['document.querySelector()', 'document.getAll()', 'document.selectFirst()', 'document.find()'], answer: 0, explanation: 'document.querySelector() returns the first matching element, or null if none matches.', note: 'js.html#js-dom', noteLabel: 'JavaScript: DOM manipulation' },
    { topic: 'JS', prompt: 'Which method is the standard way to listen for a button click?', options: ['button.onClickEvent()', 'button.addEventListener("click", handler)', 'button.listen("click", handler)', 'document.click(button, handler)'], answer: 1, explanation: 'addEventListener registers a function to run when the specified event occurs.', note: 'js.html#js-events', noteLabel: 'JavaScript: Event listeners' },
    { topic: 'JS', prompt: 'How can a for loop visit each item in an array named items?', options: ['for (const item of items)', 'loop items then', 'each (items as item)', 'for (items in const item)'], answer: 0, explanation: 'The for...of loop iterates over the values in an iterable such as an array.', note: 'js.html#js-arrays-loops', noteLabel: 'JavaScript: Arrays and loops' }
];

let quizQuestions = [];
let answers = [];
let currentQuestion = 0;

function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function startQuiz() {
    quizQuestions = shuffle(questionBank);
    answers = Array(quizQuestions.length).fill(null);
    currentQuestion = 0;
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-area').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const question = quizQuestions[currentQuestion];
    const selected = answers[currentQuestion];
    document.getElementById('q-counter').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    const topic = document.getElementById('q-topic');
    topic.textContent = question.topic === 'JS' ? 'JavaScript' : question.topic;
    topic.className = `topic-tag topic-${question.topic.toLowerCase()}`;
    document.getElementById('question-text').textContent = question.prompt;

    const progress = (currentQuestion / quizQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.querySelector('.progress-bar-bg').setAttribute('aria-valuenow', String(currentQuestion));
    document.getElementById('answer-status').textContent = selected === null
        ? 'Not answered — skip to return later, or finish to count it as incorrect.'
        : 'Answer saved. You can change it before finishing.';

    const optionsList = document.getElementById('options-list');
    optionsList.replaceChildren();
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-btn';
        button.textContent = option;
        button.setAttribute('aria-pressed', String(selected === index));
        if (selected === index) button.classList.add('selected');
        button.addEventListener('click', () => {
            answers[currentQuestion] = index;
            renderQuestion();
        });
        optionsList.appendChild(button);
    });

    document.getElementById('previous-btn').disabled = currentQuestion === 0;
    document.getElementById('skip-btn').textContent = currentQuestion === quizQuestions.length - 1 ? 'Skip to first unanswered →' : 'Skip →';
    document.getElementById('feedback-box').classList.add('hidden');
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function skipQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
    } else {
        const firstUnanswered = answers.findIndex(answer => answer === null);
        if (firstUnanswered === -1) {
            finishQuiz();
            return;
        }
        currentQuestion = firstUnanswered;
    }
    renderQuestion();
}

function finishQuiz() {
    const correct = quizQuestions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0);
    const unanswered = answers.filter(answer => answer === null).length;
    const incorrect = quizQuestions.length - correct - unanswered;
    const percent = Math.round((correct / quizQuestions.length) * 100);

    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('progress-fill').style.width = '100%';
    document.querySelector('.progress-bar-bg').setAttribute('aria-valuenow', String(quizQuestions.length));
    document.getElementById('score-num').textContent = String(correct);
    document.getElementById('score-total').textContent = String(quizQuestions.length);
    document.getElementById('result-icon').textContent = percent >= 80 ? '🎉' : percent >= 50 ? '👍' : '📖';
    document.getElementById('result-title').textContent = percent >= 80 ? 'Great work!' : percent >= 50 ? 'Good effort!' : 'Keep practicing!';
    document.getElementById('result-subtitle').textContent = `You scored ${percent}%. Unanswered questions count as incorrect.`;
    document.getElementById('result-counts').innerHTML = `
        <span class="count-correct">${correct} correct</span>
        <span class="count-incorrect">${incorrect} incorrect</span>
        <span class="count-unanswered">${unanswered} unanswered</span>`;

    const topicStats = { HTML: { correct: 0, total: 0 }, CSS: { correct: 0, total: 0 }, JS: { correct: 0, total: 0 } };
    quizQuestions.forEach((question, index) => {
        topicStats[question.topic].total++;
        if (answers[index] === question.answer) topicStats[question.topic].correct++;
    });
    document.getElementById('score-breakdown').innerHTML = Object.entries(topicStats).map(([topic, stats]) => `
        <div class="breakdown-item"><span class="breakdown-label">${topic === 'JS' ? '⚡ JavaScript' : topic === 'HTML' ? '🏗️ HTML' : '🎨 CSS'}</span><span class="breakdown-score">${stats.correct} / ${stats.total}</span></div>`).join('');

    renderAnswerReview();
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderAnswerReview() {
    const review = document.getElementById('answer-review');
    review.replaceChildren();

    quizQuestions.forEach((question, index) => {
        const selected = answers[index];
        const isCorrect = selected === question.answer;
        const status = selected === null ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect';
        const item = document.createElement('article');
        item.className = `review-item ${selected === null ? 'review-unanswered' : isCorrect ? 'review-correct' : 'review-incorrect'}`;

        const heading = document.createElement('h4');
        heading.textContent = `${index + 1}. ${question.topic === 'JS' ? 'JavaScript' : question.topic} — ${status}`;
        const prompt = document.createElement('p');
        prompt.className = 'review-question';
        prompt.textContent = question.prompt;
        const yourAnswer = document.createElement('p');
        yourAnswer.textContent = `Your answer: ${selected === null ? 'No answer' : question.options[selected]}`;
        const correctAnswer = document.createElement('p');
        correctAnswer.textContent = `Correct answer: ${question.options[question.answer]}`;
        const explanation = document.createElement('p');
        explanation.className = 'review-explanation';
        explanation.textContent = question.explanation;
        const noteLink = document.createElement('a');
        noteLink.href = question.note;
        noteLink.textContent = `Review notes: ${question.noteLabel} →`;
        noteLink.className = 'review-note-link';

        item.append(heading, prompt, yourAnswer, correctAnswer, explanation, noteLink);
        review.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-quiz').addEventListener('click', startQuiz);
    document.getElementById('previous-btn').addEventListener('click', previousQuestion);
    document.getElementById('skip-btn').addEventListener('click', skipQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishQuiz);
    document.getElementById('retake-btn').addEventListener('click', startQuiz);
});
