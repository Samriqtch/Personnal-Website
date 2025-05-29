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

    // Ajoute le code des particules ici
    const particlesJS = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const banner = document.querySelector('.banner');
        if (!banner) return; // Sécurité si .banner n'existe pas

        banner.appendChild(canvas);

        canvas.width = window.innerWidth;
        canvas.height = banner.offsetHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1';

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2;
                this.color = 'rgba(0, 255, 255, 0.5)';
                this.velocityX = (Math.random() - 0.5) * 2;
                this.velocityY = (Math.random() - 0.5) * 2;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                this.x += this.velocityX;
                this.y += this.velocityY;
                if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
            }
        }

        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();
    };

    particlesJS();

    // Animation de saisie pour le banner h2
    const bannerTyped = document.getElementById("banner-typed");
    if (bannerTyped) {
        const fullText = bannerTyped.textContent;
        bannerTyped.textContent = "";
        let i = 0;
        let typing = true;

        function typeWriterLoop() {
            if (typing) {
                if (i < fullText.length) {
                    bannerTyped.textContent += fullText.charAt(i);
                    i++;
                    setTimeout(typeWriterLoop, 60);
                } else {
                    typing = false;
                    setTimeout(typeWriterLoop, 1200); // Pause avant d'effacer
                }
            } else {
                if (i > 0) {
                    bannerTyped.textContent = fullText.substring(0, i - 1);
                    i--;
                    setTimeout(typeWriterLoop, 30);
                } else {
                    typing = true;
                    setTimeout(typeWriterLoop, 400); // Pause avant de recommencer
                }
            }
        }
        typeWriterLoop();
    }
});