document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("message"); // كان اسمه text في HTML بس هو message
    const shiftInput = document.getElementById("shift");
    const output = document.getElementById("output");

    document.getElementById("encrypt").addEventListener("click", function () {
        const encryptedText = caesarCipher(textInput.value, parseInt(shiftInput.value));
        output.textContent = encryptedText;
        output.style.opacity = 1;
    });

    document.getElementById("decrypt").addEventListener("click", function () {
        const decryptedText = caesarCipher(textInput.value, -parseInt(shiftInput.value));
        output.textContent = decryptedText;
        output.style.opacity = 1;
    });

    document.getElementById("clear").addEventListener("click", function () {
        textInput.value = "";
        output.textContent = "";
        output.style.opacity = 0;
    });

    function caesarCipher(text, shift) {
        return text.replace(/[a-zA-Z]/g, function (char) {
            let base = char >= "a" ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
        });
    }
});
