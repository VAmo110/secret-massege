document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("text");
    const shiftInput = document.getElementById("shift");
    const output = document.getElementById("output");
    const aiAnalysis = document.getElementById("aiAnalysis");
    const chatbot = document.getElementById("chatbot");

    document.getElementById("encrypt").addEventListener("click", function () {
        const encryptedText = caesarCipher(textInput.value, parseInt(shiftInput.value));
        output.textContent = encryptedText;
        output.style.opacity = 1;
        analyzeMessage(textInput.value);
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
        aiAnalysis.style.display = "none";
        chatbot.style.display = "none";
    });

    function caesarCipher(text, shift) {
        return text.replace(/[a-zA-Z]/g, function (char) {
            let base = char >= "a" ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
        });
    }

    function analyzeMessage(text) {
        aiAnalysis.style.display = "block";
        let positivity = Math.random() * 100;
        aiAnalysis.innerHTML = <strong>AI Analysis:</strong> This message has a positivity score of ${positivity.toFixed(2)}%.;
    }

    document.getElementById("chatbotBtn").addEventListener("click", function () {
        chatbot.style.display = "block";
        chatbot.innerHTML = <strong>Chatbot:</strong> How can I assist you with encryption today?;
    });

    document.getElementById("suggestText").addEventListener("click", function () {
        textInput.value = "You are amazing and your smile is beautiful!";
    });
});