document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const intro = document.getElementById("intro");
    const quiz = document.getElementById("quiz");
    const birthday = document.getElementById("birthday");
    const message = document.getElementById("message");
    const adore = document.getElementById("adore");
    const scrapbook = document.getElementById("scrapbook");
    const kitkat = document.getElementById("kitkat");
    const fun = document.getElementById("fun");
    const special = document.getElementById("special");
    const letterSection = document.getElementById("letterSection");
    const ps = document.getElementById("ps");

    const openBtn = document.getElementById("openBtn");

    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("questionText");

    const answers =
        document.getElementById("answers");

    const quizFeedback =
        document.getElementById("quizFeedback");

    const kitkatBtn =
        document.getElementById("kitkatBtn");

    const kitkatMessage =
        document.getElementById("kitkatMessage");

    const envelope =
        document.getElementById("envelope");

    const openLetterBtn =
        document.getElementById("openLetterBtn");

    const letter =
        document.getElementById("letter");


    /* =========================
       QUIZ
    ========================= */

    const quizQuestions = [

        {
            question: "Emergency happiness supply?",
            options: [
                "Chocolate 🍫",
                "KitKat 🍫",
                "Ice cream 🍦",
                "Coffee ☕"
            ],
            answer: 1
        },

        {
            question: "What does Pratim notice first?",
            options: [
                "Your eyes",
                "Your smile",
                "Your hair",
                "Basically everything"
            ],
            answer: 3
        },

        {
            question: "What makes you instantly special?",
            options: [
                "Being yourself ♡",
                "Your outfit",
                "Your phone",
                "Your playlist"
            ],
            answer: 0
        }

    ];


    let currentQuestion = 0;


    /* =========================
       STORY SECTIONS
    ========================= */

    const storySections = [
        quiz,
        birthday,
        message,
        adore,
        scrapbook,
        kitkat,
        fun,
        special,
        letterSection,
        ps
    ];


    storySections.forEach(section => {
        section.classList.add("hidden");
    });


    /* =========================
       OPEN
    ========================= */

    openBtn.addEventListener("click", () => {

        intro.classList.add("hidden");

        quiz.classList.remove("hidden");

        quiz.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        loadQuestion();

    });


    /* =========================
       LOAD QUESTION
    ========================= */

    function loadQuestion() {

        const current =
            quizQuestions[currentQuestion];

        questionNumber.textContent =
            `${currentQuestion + 1} / ${quizQuestions.length}`;

        questionText.textContent =
            current.question;

        answers.innerHTML = "";

        quizFeedback.textContent = "";


        current.options.forEach((option, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "quiz-option";

            button.textContent = option;


            button.addEventListener("click", () => {

                checkAnswer(index);

            });


            answers.appendChild(button);

        });

    }


    /* =========================
       CHECK ANSWER
    ========================= */

    function checkAnswer(selectedIndex) {

        const current =
            quizQuestions[currentQuestion];

        const buttons =
            answers.querySelectorAll(".quiz-option");


        buttons.forEach(button => {
            button.disabled = true;
        });


        if (selectedIndex === current.answer) {

            buttons[selectedIndex]
                .classList.add("correct");

            quizFeedback.textContent =
                "Okay... you got it. ♡";


            setTimeout(() => {

                currentQuestion++;


                if (
                    currentQuestion <
                    quizQuestions.length
                ) {

                    loadQuestion();

                } else {

                    finishQuiz();

                }

            }, 850);


        } else {

            buttons[selectedIndex]
                .classList.add("wrong");

            quizFeedback.textContent =
                "Hmm... try again. 👀";


            setTimeout(() => {

                buttons.forEach(button => {

                    button.disabled = false;

                    button.classList.remove("wrong");

                });

                quizFeedback.textContent = "";

            }, 800);

        }

    }


    /* =========================
       FINISH QUIZ
    ========================= */

    function finishQuiz() {

        quizFeedback.textContent =
            "Okay... you passed. Now you get the actual surprise. ♡";


        setTimeout(() => {

            revealStory();

        }, 1000);

    }


    /* =========================
       REVEAL EVERYTHING
    ========================= */

    function revealStory() {

        storySections.forEach(section => {

            section.classList.remove("hidden");

        });


        birthday.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* =========================
       KITKAT
    ========================= */

    kitkatBtn.addEventListener("click", () => {

        kitkatMessage.classList.remove("hidden");

        kitkatBtn.textContent =
            "Happiness unlocked ♡";

        kitkatBtn.disabled = true;

    });


    /* =========================
       ENVELOPE
    ========================= */

    openLetterBtn.addEventListener("click", () => {

        envelope.classList.toggle("open");


        const isOpen =
            envelope.classList.contains("open");


        if (isOpen) {

            openLetterBtn.textContent =
                "Opened ♡";


            setTimeout(() => {

                letter.classList.remove("hidden");


                letter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 600);


        } else {

            openLetterBtn.textContent =
                "Open";

            letter.classList.add("hidden");

        }

    });


    /* =========================
       SCROLL ANIMATION
    ========================= */

    const animatedSections =
        document.querySelectorAll(".story-section");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("is-visible");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedSections.forEach(section => {

        observer.observe(section);

    });

});