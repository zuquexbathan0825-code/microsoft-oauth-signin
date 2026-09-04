// Form Elements
const signinForm = document.getElementById('signinForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

// OAuth Configuration (Update with your Azure App credentials)
const AZURE_APP_ID = 'YOUR_AZURE_APP_ID'; // Your Azure application ID
const REDIRECT_URI = 'http://localhost:3000/callback'; // Your callback URL
const AUTHORITY = 'https://login.microsoftonline.com/common';
const SCOPES = ['user.read', 'email'];

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\d\s\-\+\(\)]+$/;

// Validate email or phone
function isValidEmailOrPhone(value) {
    value = value.trim();
    return emailRegex.test(value) || phoneRegex.test(value);
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// Hide error message
function hideError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('show');
}

// Clear error on input
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim()) {
        hideError();
    }
});

// Handle form submission
signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Validation
    if (!email) {
        showError('Email or phone number can\'t be blank.');
        return;
    }
    
    if (!isValidEmailOrPhone(email)) {
        showError('That email or phone number doesn\'t look right.');
        return;
    }
    
    hideError();
    
    // Disable button during process
    const button = signinForm.querySelector('.next-button');
    button.disabled = true;
    button.textContent = 'Signing in...';
    
    try {
        // Simulate checking if account exists
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Redirect to Microsoft OAuth 2.0 endpoint
        const params = new URLSearchParams({
            client_id: AZURE_APP_ID,
            redirect_uri: REDIRECT_URI,
            response_type: 'code',
            scope: SCOPES.join(' '),
            response_mode: 'query',
            login_hint: email,
            prompt: 'select_account'
        });
        
        // Redirect to Microsoft login
        window.location.href = `${AUTHORITY}/oauth2/v2.0/authorize?${params.toString()}`;
        
    } catch (error) {
        console.error('Error:', error);
        showError('Something went wrong. Please try again.');
        button.disabled = false;
        button.textContent = 'Next';
    }
});

// Handle "Forgot your username?" link
document.querySelector('.forgot-link').addEventListener('click', (e) => {
    e.preventDefault();
    showError('Username recovery feature would redirect to Microsoft account recovery.');
});

// Handle "Create an account" link
document.querySelector('.create-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'https://signup.live.com/';
});

// Optional: Handle Enter key press
emailInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        signinForm.dispatchEvent(new Event('submit'));
    }
});

// Log configuration status
console.log('Microsoft OAuth 2.0 Sign-In Page Ready');
console.log('Remember to update AZURE_APP_ID and REDIRECT_URI with your Azure app credentials');