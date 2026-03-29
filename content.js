// 1. إعدادات تكوين كلمة المرور
const length = 14;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#*-_";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    let parts = [];
    for (let i = 0; i < password.length; i += 4) {
        parts.push(password.slice(i, i + 4));
    }
    return parts.join("-");
}

let attempts = 0;

let tryFill = setInterval(() => {
    let passwordField = document.querySelector('input[type="password"]');
    
    if (passwordField) {
        clearInterval(tryFill); 
        const newPassword = generatePassword();
        passwordField.value = newPassword;
        
        
        passwordField.dispatchEvent(new Event('input', { bubbles: true }));
        passwordField.dispatchEvent(new Event('change', { bubbles: true }));
        
    } else {
        attempts++;
        if (attempts > 10) {
            clearInterval(tryFill); 
        }
    }
}, 1000);