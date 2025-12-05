<h1 align="center"> Steam Sign-in & Sign-up Form Replica</h1>

This is a school project replicating Steam's sign-in and sign-up forms using HTML, CSS, and JavaScript. It's a static front-end demo for learning purposes, focusing on form validation, responsive design, and UI interactions. No real data is collected or sent anywhere—everything is simulated on the client side. Created as part of a web development class to practice cloning real-world websites.

## Live Demo

You can try the project directly by clicking this link: [Steam Replica Demo](https://himzo7.github.io/Steam-Signin-Signup-Form-Replica/) (hosted on GitHub Pages). Just click the CTA button on the landing page to start exploring the forms. Note: If the page doesn't load, ensure GitHub Pages is enabled in repo settings (Settings > Pages > Source: main branch).

## Features

- **Landing Page**: Simple intro page (index.html) with a button to start the sign-in process.
- **Login Form**: Email and password fields with validation and password toggle.
- **Registration Flow**: Two-step sign-up—first email/country/terms (register.html), then username/password (createacc.html).
- **Validation & Pop-ups**: Real-time checks for emails, passwords, and age verification popup.
- **Responsive UI**: Adapts to different screen sizes, mimicking Steam's dark theme.


## Tech Stack

- HTML5 for structure.
- CSS3 for styling (flexbox, gradients).
- Vanilla JavaScript for interactions and validation.


## Setup and Usage

**1. Clone the Repo**:
git clone https://github.com/himzo7/Steam-Signin-Signup-Form-Replica.git
cd Steam-Signin-Signup-Form-Replica


**2. Run Locally**:
- Open `index.html` in any browser (e.g., Chrome).
- For better testing, use a local server:
  - VS Code: Install Live Server extension and right-click `index.html` > Open with Live Server.
  - Python: Run `python -m http.server 8000` and open http://localhost:8000.
  - Node: Install serve with `npm i -g serve` and run `serve .`.

**3. How to Use**:
- Start at `index.html`: Click the button to go to login.
- Login (`sites/login.html`): Enter **Username: testuser** and **Password: 12345** to be redirected to original Steam page.
- Register (`sites/register.html`): Fill email, confirm, select country, agree to terms. Age popup appears—choose 15+ to proceed.
- Create Account (`sites/createacc.html`): Set username/password with strength checks. Success popup on submit.
- Test validation: Try invalid inputs to see warnings without page shifts.

## Key Scripts

- **register.js**: Validates emails, handles age popup, and submits to next step.
- **createacc.js**: Checks password strength (length, chars), toggles visibility, and shows success alert.
- **login.js** (if present): Basic login validation.

To edit: Open JS files in a code editor, modify functions like validation rules, and reload the page.


## License

MIT License. See [LICENSE](LICENSE) for details. This is a school project—feel free to use for learning!
