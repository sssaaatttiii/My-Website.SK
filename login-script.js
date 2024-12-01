document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const signupLink = document.getElementById('signupLink');

    // Load remembered username if exists
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
        usernameInput.value = rememberedUsername;
        rememberMeCheckbox.checked = true;
    }

    // Form validation function
    function validateForm() {
        let isValid = true;

        // Username validation
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            usernameInput.parentElement.classList.add('error');
            isValid = false;
        } else if (usernameInput.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            usernameInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            usernameError.textContent = '';
            usernameInput.parentElement.classList.remove('error');
        }

        // Password validation
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.parentElement.classList.add('error');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.parentElement.classList.add('error');
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.parentElement.classList.remove('error');
        }

        return isValid;
    }

    // Form submission handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate form
        if (validateForm()) {
            // Remember username if checkbox is checked
            if (rememberMeCheckbox.checked) {
                localStorage.setItem('rememberedUsername', usernameInput.value);
            } else {
                localStorage.removeItem('rememberedUsername');
            }

            // Simulate login process
            alert('Login Successful!');
            // In a real application, you would make an AJAX call to your backend here
        }
    });

    // Real-time validation on input
    usernameInput.addEventListener('input', () => {
        if (usernameInput.value.trim() !== '') {
            usernameError.textContent = '';
            usernameInput.parentElement.classList.remove('error');
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.trim() !== '') {
            passwordError.textContent = '';
            passwordInput.parentElement.classList.remove('error');
        }
    });

    // Forgot Password and Signup links (placeholder)
    document.querySelector('.forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Forgot Password functionality to be implemented');
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Signup page to be implemented');
    });

    // Social Login buttons (placeholder)
    document.querySelector('.google-login').addEventListener('click', () => {
        alert('Google Login to be implemented');
    });

    document.querySelector('.facebook-login').addEventListener('click', () => {
        alert('Facebook Login to be implemented');
    });
});