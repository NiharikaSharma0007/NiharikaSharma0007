document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('header-hidden');
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-hidden');
            header.classList.remove('header-transparent');
        }
        lastScrollY = window.scrollY;
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });

    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');
    const quizScore = document.getElementById('quiz-score');
    const retryQuiz = document.getElementById('retry-quiz');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let score = 0;
        const answers = {
            q1: 'Artificial Intelligence',
            q2: 'Analyzing data for better diagnosis',
            q3: 'Perform complex surgeries with precision'
        };

        const formData = new FormData(quizForm);
        for (let [question, answer] of formData.entries()) {
            if (answers[question] === answer) {
                score++;
            }
        }

        quizScore.textContent = `You scored ${score} out of 3!`;
        quizForm.style.display = 'none';
        quizResults.style.display = 'block';
    });

    retryQuiz.addEventListener('click', function() {
        quizForm.style.display = 'block';
        quizResults.style.display = 'none';
        quizForm.reset();
    });
});