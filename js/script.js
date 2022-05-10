//------ FUNCTIONS ------//
function getRandomNumber (min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//------ MAIN ------//
let mineField = [];
let squares = 0;

// EASY MODE
const easy = document.getElementById("easy")
easy.addEventListener ("click", 
    function () {
        let squares = 100;
        const field = document.querySelector(".list");
        for (let i = 1 ; i <= squares ; i++) {
            mineField.push(i);
            var caselle = document.createElement("li");
            if (i !== isNaN) {
                caselle.classList.add("item");
                caselle.innerText = i;
            }
            field.append(caselle);
        }
        const cpuMines = [];
        while (cpuMines.length < 16) {
            let mine = getRandomNumber(1,100);
            if (!cpuMines.includes(mine)) {
                cpuMines.push(mine);
            }
        }
        let possibility = mineField.length - cpuMines.length;
        const safeSpot = [];
        let explosion = 0;
        const play = document.querySelectorAll(".item");
        let userChoice = play;
        for (let i = 0 ; i < play.length ; i++){
            const play = document.querySelectorAll(".item");
            play[i].addEventListener ("click", 
                function() {
                    const posizione = i+1;
                    if (cpuMines.includes(posizione)) {
                        explosion = 1;
                        play[i].classList.add("mine");
                    } else {
                        safeSpot.push(posizione);
                        play[i].classList.add("safe");
                    }
                    if (explosion === 1) {
                        field.style.display = "none";
                        document.getElementById("result").innerText = `Hai perso, Il tuo punteggio è : ${safeSpot.length}`;
                    } else if (play.length === safeSpot.length) {
                        field.style.display = "none";
                        document.getElementById("result").style.color = "green";
                        document.getElementById("result").innerText = `HAI VINTO!!!, Il tuo punteggio è : ${safeSpot.length}`;
                    }
                }
            );
        }
    }
);

// MEDIUM MODE
const medium = document.getElementById("medium")
medium.addEventListener ("click", 
    function () {
        let squares = 80;
        const field = document.querySelector(".list");
        for (let i = 1 ; i <= squares ; i++) {
            mineField.push(i);
            var caselle = document.createElement("li");
            if (i !== isNaN) {
                caselle.classList.add("item");
                caselle.innerText = i;
            }
            field.append(caselle);
        }
        const cpuMines = [];
        while (cpuMines.length < 16) {
            let mine = getRandomNumber(1,100);
            if (!cpuMines.includes(mine)) {
                cpuMines.push(mine);
            }
        }
        let possibility = mineField.length - cpuMines.length;
        const safeSpot = [];
        let explosion = 0;
        const play = document.querySelectorAll(".item");
        let userChoice = play;
        for (let i = 0 ; i < play.length ; i++){
            const play = document.querySelectorAll(".item");
            play[i].addEventListener ("click", 
                function() {
                    const posizione = i+1;
                    if (cpuMines.includes(posizione)) {
                        explosion = 1;
                        play[i].classList.add("mine");
                    } else {
                        safeSpot.push(posizione);
                        play[i].classList.add("safe");
                    }
                    if (explosion === 1) {
                        field.style.display = "none";
                        document.getElementById("result").innerText = `Hai perso, Il tuo punteggio è : ${safeSpot.length}`;
                    } else if (play.length === safeSpot.length) {
                        field.style.display = "none";
                        document.getElementById("result").style.color = "green";
                        document.getElementById("result").innerText = `HAI VINTO!!!, Il tuo punteggio è : ${safeSpot.length}`;
                    }
                }
            );
        }
    }
);

// DIFFICULT MODE
const difficult = document.getElementById("difficult")
difficult.addEventListener ("click", 
    function () {
        let squares = 50;
        const field = document.querySelector(".list");
        for (let i = 1 ; i <= squares ; i++) {
            mineField.push(i);
            var caselle = document.createElement("li");
            if (i !== isNaN) {
                caselle.classList.add("item");
                caselle.innerText = i;
            }
            field.append(caselle);
        }
        const cpuMines = [];
        while (cpuMines.length < 16) {
            let mine = getRandomNumber(1,100);
            if (!cpuMines.includes(mine)) {
                cpuMines.push(mine);
            }
        }
        let possibility = mineField.length - cpuMines.length;
        const safeSpot = [];
        let explosion = 0;
        const play = document.querySelectorAll(".item");
        let userChoice = play;
        for (let i = 0 ; i < play.length ; i++){
            const play = document.querySelectorAll(".item");
            play[i].addEventListener ("click", 
                function() {
                    const posizione = i+1;
                    if (cpuMines.includes(posizione)) {
                        explosion = 1;
                        play[i].classList.add("mine");
                    } else {
                        safeSpot.push(posizione);
                        play[i].classList.add("safe");
                    }
                    if (explosion === 1) {
                        field.style.display = "none";
                        document.getElementById("result").innerText = `Hai perso, Il tuo punteggio è : ${safeSpot.length}`;
                    } else if (play.length === safeSpot.length) {
                        field.style.display = "none";
                        document.getElementById("result").style.color = "green";
                        document.getElementById("result").innerText = `HAI VINTO!!!, Il tuo punteggio è : ${safeSpot.length}`;
                    }
                }
            );
        }
    }
);