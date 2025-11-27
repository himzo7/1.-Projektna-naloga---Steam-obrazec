document.addEventListener('DOMContentLoaded', () => {
    const accountName = document.getElementById('accountName');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const doneBtn = document.getElementById('doneBtn');
    const popup = document.getElementById('successPopup');

    // Toggle password visibility
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Hide';
            } else {
                input.type = 'password';
                button.textContent = 'Show';
            }
        });
    });

    // Password strength validation
    password.addEventListener('input', validatePasswordStrength);
    confirmPassword.addEventListener('input', validateConfirmPassword);

    doneBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let valid = true;

        if (accountName.value.trim() === '') {
            alert('Please enter Steam Account Name.');
            valid = false;
        }

        if (!validatePasswordStrength() || password.value.trim() === '') {
            valid = false;
        }

        if (!validateConfirmPassword() || confirmPassword.value.trim() === '') {
            valid = false;
        }

        if (valid) {
            showPopup();
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3500); // Redirect after 2 seconds
        }
    });

    function validatePasswordStrength() {
        const value = password.value;
        const rules = [
            { id: 'length', regex: /.{8,}/ },
            { id: 'uppercase', regex: /[A-Z]/ },
            { id: 'lowercase', regex: /[a-z]/ },
            { id: 'number', regex: /[0-9]/ },
            { id: 'special', regex: /[^A-Za-z0-9]/ }
        ];

        let allValid = true;
        rules.forEach(rule => {
            const li = document.getElementById(rule.id);
            if (rule.regex.test(value)) {
                li.classList.add('valid');
            } else {
                li.classList.remove('valid');
                allValid = false;
            }
        });
        return allValid;
    }

    function validateConfirmPassword() {
        confirmPasswordError.classList.add('hidden');
        confirmPassword.classList.remove('input-error');

        if (confirmPassword.value.trim() !== '' && confirmPassword.value !== password.value) {
            confirmPasswordError.classList.remove('hidden');
            confirmPassword.classList.add('input-error');
            return false;
        }
        return true;
    }

    function showPopup() {
        popup.classList.add('visible');
    }

    window.closeSuccessPopup = function() {
        popup.classList.remove('visible');
    };
});