document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Samson", "Développeur Web", "Créateur d’expériences"];
    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");
    let arrayIndex = 0;
    let charIndex = 0;
    let typing = true;

    function type() {
        if (typing) {
            if (charIndex < textArray[arrayIndex].length) {
                typedText.textContent += textArray[arrayIndex][charIndex];
                charIndex++;
                setTimeout(type, 70);
            } else {
                typing = false;
                setTimeout(type, 1200);
            }
        } else {
            if (charIndex > 0) {
                typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 30);
            } else {
                typing = true;
                arrayIndex = (arrayIndex + 1) % textArray.length;
                setTimeout(type, 400);
            }
        }
    }
    if (typedText) type();

    // Formulaire contact feedback
    const form = document.getElementById('contact-form');
    const messageDiv = document.getElementById('form-message');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            messageDiv.textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
            form.reset();
        });
    }
});