let difficultyLevel = Number(prompt("Inserisci il livello di difficoltà tra 0 1 2"));
while (isNaN(difficultyLevel) || difficultyLevel < 0 || difficultyLevel > 2) {
    difficultyLevel = Number(prompt("Hai sbagliato, inserisci nuovamente un numero"));
}

// 1
if (difficultyLevel === 0) {
    squares = 100;
} else if (difficultyLevel === 1) {
    squares = 80;
} else {
    squares = 50;
}

// ------------------------------------------------------------------------------------------
// ONLY JS
// for (let i = 1 ; i <= squares ; i++) {
//     mineField.push(i);
// }
// ------------------------------------------------------------------------------------------

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

// 2
const cpuMines = [];
while (cpuMines.length < 16) {
    let mine = getRandomNumber(1,100);
    if (!cpuMines.includes(mine)) {
        cpuMines.push(mine);
    }
}

// 3
let possibility = mineField.length - cpuMines.length;

// 4
const safeSpot = [];
let explosion = 0;
const play = document.querySelectorAll(".item");
let userChoice = play;
for (let i = 0 ; i < play.length ; i++){
    const play = document.querySelectorAll(".item");
    play[i].addEventListener ("click", 
        function() {
            const posizione = i+1;
            console.log(posizione);
            if (cpuMines.includes(posizione)) {
                explosion = 1;
                play[i].classList.add("mine");
            } else {
                safeSpot.push(posizione);
                play[i].classList.add("safe");
            }
// 5
            if (explosion === 1) {
                field.style.display = "none";
                document.getElementById("result").innerText = `Hai perso, Il tuo punteggio è : ${safeSpot.length}`;
            } else if (play.length === safeSpot.length) {
                field.style.display = "none";
                document.getElementById("result").style.color = "green";
                document.getElementById("result").innerText = `HAI VINTO!!!, Il tuo punteggio è : ${safeSpot.length}`;
            }
            console.log(safeSpot);
        }
    );
}

// ------------------------------------------------------------------------------------------
// ONLY JS
// const safeSpot = [];
// let explosion = 0;
// while (safeSpot.length < possibility && explosion === 0) {
//     let userChoice = Number(prompt("Inserisci un numero tra 1 e 100"));
//     while (isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
//         userChoice = Number(prompt("Hai sbagliato, inserisci nuovamente un numero"));
//     }
//     if (cpuMines.includes(userChoice)) {
//         explosion = 1;
//     } else if (safeSpot.includes(userChoice)) {
//         alert("Hai già inserito questo numero");
//     } else {
//         safeSpot.push(userChoice);
//     }
// }
// if (explosion === 1) {
//     alert(`Hai perso, Il tuo punteggio è : ${safeSpot.length}`);
// } else {
//     alert(`Hai vinto, Il tuo punteggio è : ${safeSpot.length}`);
// }
// ------------------------------------------------------------------------------------------