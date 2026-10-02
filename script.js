/* ================================= */
/* WELCOME + GIFT */
/* ================================= */

let enterButton =
    document.getElementById("enterButton");

let welcomeScreen =
    document.getElementById("welcomeScreen");

let universeScreen =
    document.getElementById("universeScreen");

let giftBox =
    document.getElementById("giftBox");

let giftText =
    document.getElementById("giftText");

let giftMessage =
    document.getElementById("giftMessage");


enterButton.addEventListener("click", function() {

    welcomeScreen.classList.add("fadeOut");

    setTimeout(function() {

        welcomeScreen.style.display = "none";

        universeScreen.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

});


giftBox.addEventListener("click", function() {

    giftBox.classList.add("opened");

    giftBox.textContent = "💝";

    giftText.textContent =
        "You found your first surprise, Zeenat ❤️";

    giftMessage.style.display = "block";

});


/* ================================= */
/* OPEN WHEN LETTERS */
/* ================================= */

let letters =
    document.querySelectorAll(".letter");

let letterPopup =
    document.getElementById("letterPopup");

let letterMessage =
    document.getElementById("letterMessage");

let closeLetter =
    document.getElementById("closeLetter");


letters.forEach(function(letter) {

    letter.addEventListener("click", function() {

        let message =
            letter.getAttribute("data-message");

        letterMessage.textContent = message;

        letterPopup.style.display = "flex";

    });

});


closeLetter.addEventListener("click", function() {

    letterPopup.style.display = "none";

});


letterPopup.addEventListener("click", function(event) {

    if (event.target === letterPopup) {

        letterPopup.style.display = "none";

    }

});


/* ================================= */
/* MUSIC */
/* ================================= */

let musicButton =
    document.getElementById("musicButton");

let backgroundMusic =
    document.getElementById("backgroundMusic");


musicButton.addEventListener("click", function() {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicButton.textContent =
            "⏸ Pause Music";

    } else {

        backgroundMusic.pause();

        musicButton.textContent =
            "▶ Play Music";

    }

});


backgroundMusic.addEventListener("ended", function() {

    musicButton.textContent =
        "▶ Play Music";

});


/* ================================= */
/* QUIZ */
/* ================================= */

let questions = [

    {
        question:
            "What is my favourite colour?",

        answers: [
            "Black",
            "Blue",
            "Red",
            "White"
        ],

        correct: 1
    },


    {
        question:
            "What would I most likely do on a free day?",

        answers: [
            "Go shopping",
            "Read a book",
            "Play games, watch TikTok or a film",
            "Go out with friends"
        ],

        correct: 2
    },


    {
        question:
            "Am I more of a lone wolf or a social butterfly?",

        answers: [
            "Lone wolf 🐺",
            "Social butterfly 🦋",
            "Both equally",
            "Depends on the people"
        ],

        correct: 0
    },


    {
        question:
            "What instantly puts me in a good mood?",

        answers: [
            "Food",
            "Money 😂",
            "You, babe ❤️",
            "Playing games"
        ],

        correct: 2
    },


    {
        question:
            "Which superpower would I choose?",

        answers: [
            "Flying",
            "Stopping time ⏳",
            "Invisibility",
            "Reading minds"
        ],

        correct: 1
    },


    {
        question:
            "What kind of person do I find attractive?",

        answers: [
            "Someone who is very talkative",
            "Someone who loves gaming",
            "Someone who is always serious",
            "Someone beautiful, outgoing and with a good personality"
        ],

        correct: 3
    },


    {
        question:
            "What kind of food do I usually crave?",

        answers: [
            "Anything sweet or delicious 😋",
            "Only spicy food",
            "Only rice",
            "Fast food only"
        ],

        correct: 0
    },


    {
        question:
            "If I were a character in a movie, who would I be?",

        answers: [
            "The main hero",
            "The villain",
            "The extra 😅",
            "The funny best friend"
        ],

        correct: 2
    },


    {
        question:
            "What would I most likely tease you about?",

        answers: [
            "Your fashion",
            "Chef, nurse or sleepy head 😂",
            "Your dancing",
            "Your singing"
        ],

        correct: 1
    },


    {
        question:
            "If we could travel together, where would I want to go?",

        answers: [
            "Paris",
            "London",
            "Somewhere adventurous",
            "Anywhere you choose, babe ❤️"
        ],

        correct: 3
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


let questionElement =
    document.getElementById("question");

let answersElement =
    document.getElementById("answers");

let quizResult =
    document.getElementById("quizResult");

let nextQuestion =
    document.getElementById("nextQuestion");


function showQuestion() {

    answered = false;

    let current =
        questions[currentQuestion];


    questionElement.textContent =
        (currentQuestion + 1) +
        ". " +
        current.question;


    answersElement.innerHTML = "";

    quizResult.textContent = "";


    nextQuestion.disabled = true;

    nextQuestion.style.display =
        "inline-block";

    nextQuestion.textContent =
        "Next Question";


    current.answers.forEach(function(answer, index) {

        let button =
            document.createElement("button");


        button.textContent =
            answer;


        button.classList.add(
            "answerButton"
        );


        button.addEventListener(
            "click",
            function() {

                checkAnswer(index);

            }
        );


        answersElement.appendChild(button);

    });

}


function checkAnswer(selectedAnswer) {

    if (answered) return;


    answered = true;


    let correctAnswer =
        questions[currentQuestion].correct;


    let answerButtons =
        answersElement.querySelectorAll(
            ".answerButton"
        );


    answerButtons.forEach(function(button, index) {

        button.disabled = true;


        if (index === correctAnswer) {

            button.style.border =
                "2px solid #36C477";

        }


        if (
            index === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {

            button.style.border =
                "2px solid #E45C5C";

        }

    });


    if (selectedAnswer === correctAnswer) {

        score++;

        quizResult.textContent =
            "Correct, babe! 🥰❤️";

    } else {

        quizResult.textContent =
            "Aww, not quite! 😂💕";

    }


    nextQuestion.disabled = false;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextQuestion.textContent =
            "See My Result ❤️";

    }

}


function showFinalResult() {

    questionElement.textContent =
        "You scored " +
        score +
        " out of 10! 💕";


    answersElement.innerHTML = "";


    nextQuestion.style.display =
        "none";


    if (score >= 9) {

        quizResult.textContent =
            "Awwn, thanks babe 🥹❤️ " +
            "You really know me, babe! " +
            "You pay attention to the little " +
            "things about me. 🥰💕";

    }

    else if (score >= 7) {

        quizResult.textContent =
            "Awwn, you know me a little well, " +
            "babe. 🥹❤️ But there is still more " +
            "to discover about me. 😂💕";

    }

    else {

        quizResult.textContent =
            "Awwn, babe, you don't know me " +
            "like that. 🤧😂❤️ I guess you " +
            "still have a lot to teach me about " +
            "you, and I have a lot to teach you " +
            "about me. 🥹💕";

    }

}


nextQuestion.addEventListener("click", function() {

    if (!answered) return;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        showFinalResult();

    }

    else {

        currentQuestion++;

        showQuestion();

    }

});


showQuestion();


/* ================================= */
/* FUTURE MEMORIES */
/* ================================= */

let memoryCards =
    document.querySelectorAll(".memoryCard");

let memoryPopup =
    document.getElementById("memoryPopup");

let memoryPopupTitle =
    document.getElementById("memoryPopupTitle");

let closeMemory =
    document.getElementById("closeMemory");


memoryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        let memory =
            card.getAttribute("data-memory");


        memoryPopupTitle.textContent =
            memory;


        memoryPopup.style.display =
            "flex";

    });

});


closeMemory.addEventListener("click", function() {

    memoryPopup.style.display =
        "none";

});


memoryPopup.addEventListener("click", function(event) {

    if (event.target === memoryPopup) {

        memoryPopup.style.display =
            "none";

    }

});


/* ================================= */
/* UNIVERSE MAP */
/* ================================= */

let planets =
    document.querySelectorAll(".planet");


planets.forEach(function(planet) {

    planet.addEventListener("click", function() {

        let target =
            planet.getAttribute("data-target");


        if (target) {

            let section =
                document.getElementById(target);


            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ================================= */
/* SECRET PLANET */
/* ================================= */

let secretPlanet =
    document.getElementById("secretPlanet");

let secretPopup =
    document.getElementById("secretPopup");

let closeSecret =
    document.getElementById("closeSecret");


secretPlanet.addEventListener("click", function() {

    secretPopup.style.display =
        "flex";

});


closeSecret.addEventListener("click", function() {

    secretPopup.style.display =
        "none";

});


secretPopup.addEventListener("click", function(event) {

    if (event.target === secretPopup) {

        secretPopup.style.display =
            "none";

    }

});


/* ================================= */
/* SECRET → ENDING */
/* ================================= */

let continueButton =
    document.getElementById(
        "continueButton"
    );

let endingSection =
    document.getElementById(
        "endingSection"
    );


continueButton.addEventListener("click", function() {

    secretPopup.style.display =
        "none";


    endingSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* ================================= */
/* RESTART / EXPLORE AGAIN */
/* ================================= */

let restartButton =
    document.getElementById(
        "restartButton"
    );


restartButton.addEventListener("click", function() {

    document
        .getElementById("universeMap")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* ================================= */
/* ESCAPE KEY CLOSES POPUPS */
/* ================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        letterPopup.style.display =
            "none";

        memoryPopup.style.display =
            "none";

        secretPopup.style.display =
            "none";

    }

});