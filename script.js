// Переключение темы

const toggleButton = document.getElementById('theme-toggle');

const body = document.body;

const icon = toggleButton.querySelector('.icon');

// Загрузка сохраненной темы

const savedTheme = localStorage.getItem('theme') || 'light';

body.setAttribute('data-theme', savedTheme);

icon.textContent = savedTheme === 'light' ? '☀️' : '🌙';

// Обработчик переключения

toggleButton.addEventListener('click', () => {

    const currentTheme = body.getAttribute('data-theme');

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);

    icon.textContent = newTheme === 'light' ? '☀️' : '🌙';

});

// Генерация пароля

const generateButton = document.getElementById('generate');

const passwordOutput = document.getElementById('password');

const lengthInput = document.getElementById('length');

const uppercaseCheckbox = document.getElementById('uppercase');

const lowercaseCheckbox = document.getElementById('lowercase');

const numbersCheckbox = document.getElementById('numbers');

const symbolsCheckbox = document.getElementById('symbols');

const copyPasswordButton = document.getElementById('copy-password');

const characters = {

    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

    lowercase: 'abcdefghijklmnopqrstuvwxyz',

    numbers: '0123456789',

    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'

};

generateButton.addEventListener('click', () => {

    let charSet = '';

    if (uppercaseCheckbox.checked) charSet += characters.uppercase;

    if (lowercaseCheckbox.checked) charSet += characters.lowercase;

    if (numbersCheckbox.checked) charSet += characters.numbers;

    if (symbolsCheckbox.checked) charSet += characters.symbols;

    if (charSet === '') {

        passwordOutput.textContent = 'Select at least one option';

        return;

    }

    const length = Math.min(Math.max(parseInt(lengthInput.value), 8), 20);

    let password = '';

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * charSet.length);

        password += charSet[randomIndex];

    }

    passwordOutput.textContent = password;

});

// Копирование пароля

copyPasswordButton.addEventListener('click', () => {

    const password = passwordOutput.textContent;

    if (password && password !== 'Click "Generate" to start' && password !== 'Select at least one option') {

        navigator.clipboard.writeText(password).then(() => {

            copyPasswordButton.textContent = 'Copied!';

            setTimeout(() => {

                copyPasswordButton.textContent = 'Copy';

            }, 2000);

        }).catch(err => {

            console.error('Failed to copy: ', err);

        });

    }

});

// Копирование Bitcoin-адреса

const copyBtcButton = document.querySelector('.btc-address .copy-btn');

copyBtcButton.addEventListener('click', () => {

    const btcCode = document.getElementById('btc-code').textContent;

    navigator.clipboard.writeText(btcCode).then(() => {

        copyBtcButton.textContent = 'Copied!';

        setTimeout(() => {

            copyBtcButton.textContent = 'Copy';

        }, 2000);

    }).catch(err => {

        console.error('Failed to copy: ', err);

    });

});
