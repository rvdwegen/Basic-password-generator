// Retrieve the form and password input elements
const form = document.getElementById('password-form');
const passwordInput = document.getElementById('password');

// Gets the password options from the form
const getPasswordOptions = () => {
    // Retrieve the form input elements
    const lengthInput = document.getElementById('length');
    const includeUppercaseInput = document.getElementById('include-uppercase');
    const includeLowercaseInput = document.getElementById('include-lowercase');
    const includeNumbersInput = document.getElementById('include-numbers');
    const includeSymbolsInput = document.getElementById('include-symbols');

    // Return the password options object
    return {
        length: lengthInput.value,
        includeUppercase: includeUppercaseInput.checked,
        includeLowercase: includeLowercaseInput.checked,
        includeNumbers: includeNumbersInput.checked,
        includeSymbols: includeSymbolsInput.checked,
    };
};

// Generates a password based on the specified options
const generatePassword = (options) => {
    // Set up the character types to include in the password
    const charTypes = [];
    if (options.includeUppercase) charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (options.includeLowercase) charTypes.push('abcdefghijklmnopqrstuvwxyz');
    if (options.includeNumbers) charTypes.push('0123456789');
    if (options.includeSymbols) charTypes.push('!@#$%^&*(){}[]=<>,.');

    // If no character types are selected, return an empty string
    if (charTypes.length === 0) return '';

    // Generate the password by selecting a random character from each character type
    let password = '';
    for (let i = 0; i < options.length; i++) {
        const charType = charTypes[Math.floor(Math.random() * charTypes.length)];
        password += charType[Math.floor(Math.random() * charType.length)];
    }

    return password;
};

// Set up an event listener for the form's submit event
form.addEventListener('submit', (event) => {
    // Prevent the default action
    event.preventDefault();

    // Get the password options from the form
    const options = getPasswordOptions();

    // Generate a password based on the options
    const password = generatePassword(options);

    // Display the password in the password input element
    passwordInput.textContent = password;
});

// #region Generate a default password when the page loads

    // Define the default password options
    const defaultOptions = {
        length: 12,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: true,
    };

    // Generate a default password using the default options
    const defaultPassword = generatePassword(defaultOptions);

    // Display the default password in the password input element
    passwordInput.textContent = defaultPassword;

// #endregion