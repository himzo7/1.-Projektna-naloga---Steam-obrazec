document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded successfully');

    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');
    const emailError = document.getElementById('emailError');
    const confirmError = document.getElementById('confirmError');
    // Če captchaCheckbox ni v HTML, ga odstrani ali dodaj v HTML: <input type="checkbox" id="captchaCheckbox">
    // const captchaCheckbox = document.getElementById('captchaCheckbox'); // Če ga nimaš, zakomentiraj
    const agreementCheckbox = document.getElementById('agreementCheckbox');
    const continueBtn = document.getElementById('continueBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.querySelector('.popup-message');

    // Force hide errors on load z inline stilom (to bo override-alo CSS)
    hideEmailError();
    hideConfirmError();
    console.log('Errors hidden on load (forced inline)');

    // Live validation for email on input
    email.addEventListener('input', () => {
        console.log('Email input changed: ' + email.value);
        if (email.value.trim() !== '') {
            validateEmail();
        } else {
            hideEmailError();
        }
    });

    email.addEventListener('blur', () => {
        if (email.value.trim() !== '') {
            validateEmail();
        } else {
            hideEmailError();
        }
    });

    // Live validation for confirm email
    confirmEmail.addEventListener('input', () => {
        console.log('Confirm input changed: ' + confirmEmail.value);
        if (confirmEmail.value.trim() !== '') {
            validateConfirm();
        } else {
            hideConfirmError();
        }
    });

    confirmEmail.addEventListener('blur', () => {
        if (confirmEmail.value.trim() !== '') {
            validateConfirm();
        } else {
            hideConfirmError();
        }
    });

    continueBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Continue clicked');
        let valid = true;

        if (email.value.trim() === '') {
            showEmailError("Please enter your email address.");
            valid = false;
        } else if (!validateEmail()) {
            valid = false;
        }

        if (confirmEmail.value.trim() === '') {
            showConfirmError("Please confirm your email address.");
            valid = false;
        } else if (!validateConfirm()) {
            valid = false;
        }

        // Če nimaš captcha, odstrani to
        let checkboxMessage = '';
         if (!captchaCheckbox.checked) {
             checkboxMessage += 'Please confirm that you are human. ';
         }
        
        if (!agreementCheckbox.checked) {
            checkboxMessage += 'Please confirm that you are 13 years of age or older and agree to the terms.';
        }
        if (checkboxMessage) {
            showPopup(checkboxMessage);
            valid = false;
        }

        if (valid) {
            console.log('Form valid, showing age popup');
            showAgePopup();  // Show the new age popup instead of immediate redirect
        }
    });

    function validateEmail() {
        if (!isValidEmail(email.value)) {
            showEmailError("This email is invalid. Make sure it's written like example@email.com");
            return false;
        }
        hideEmailError();
        return true;
    }

    function validateConfirm() {
        if (!isValidEmail(confirmEmail.value)) {
            showConfirmError("This email is invalid. Make sure it's written like example@email.com");
            return false;
        } else if (confirmEmail.value !== email.value) {
            showConfirmError("Emails don't match.");
            return false;
        }
        hideConfirmError();
        return true;
    }

    function isValidEmail(emailVal) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(emailVal);
    }

    function showEmailError(message) {
        emailError.querySelector('span').textContent = message;
        emailError.style.display = 'flex';  // Force show
        emailError.classList.remove('hidden'); // Za backup
        email.classList.add('input-error');
        console.log('Showing email error: ' + message);
    }

    function hideEmailError() {
        emailError.style.display = 'none';  // Force hide z inline
        emailError.classList.add('hidden'); // Backup
        email.classList.remove('input-error');
        console.log('Hiding email error (forced)');
    }

    function showConfirmError(message) {
        confirmError.querySelector('span').textContent = message;
        confirmError.style.display = 'flex';  // Force show
        confirmError.classList.remove('hidden');
        confirmEmail.classList.add('input-error');
        console.log('Showing confirm error: ' + message);
    }

    function hideConfirmError() {
        confirmError.style.display = 'none';  // Force hide
        confirmError.classList.add('hidden');
        confirmEmail.classList.remove('input-error');
        console.log('Hiding confirm error (forced)');
    }

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.classList.add('visible');
    }

    window.closePopup = function() {
        popup.classList.remove('visible');
    };

    // New functions for age popup
    const agePopup = document.getElementById('agePopup');
    const under15Btn = document.getElementById('under15Btn');
    const over15Btn = document.getElementById('over15Btn');

    function showAgePopup() {
        agePopup.style.display = 'flex';  // Make visible
        setTimeout(() => agePopup.classList.add('visible'), 10);  // Add class for fade-in
    }

    function hideAgePopup() {
        agePopup.classList.remove('visible');
        setTimeout(() => agePopup.style.display = 'none', 300);  // Hide after transition
    }

    under15Btn.addEventListener('click', () => {
        hideAgePopup();
        showPopup('Sorry, you must be 15 years or older to create an account.');  // Reuse your error popup
    });

    over15Btn.addEventListener('click', () => {
        hideAgePopup();
        console.log('Age verified (15+), redirecting');
        window.location.href = 'createacc.html';  // Proceed only if 15+
    });
});