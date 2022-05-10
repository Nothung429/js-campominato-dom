//------ FUNCTIONS ------//
function getRandomNumber (min , max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMatch (firstArray, secondArray) {
    let matches = [];
    for (let i = 0 ; i < firstArray.length ; i++) {
        for (let j = 0 ; j < secondArray.length ; j++) {
            if ( firstArray[i] === secondArray[j] ) {
                matches.push (firstArray[i]);
            }
        }
    }
    alert(matches);
}

//------ MAIN ------//
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
let difficultyLevel = Number(prompt("Inserisci il livello di difficoltà tra 0 1 2"));
while (isNaN(difficultyLevel) || difficultyLevel < 0 || difficultyLevel > 2) {
    difficultyLevel = Number(prompt("Hai sbagliato, inserisci nuovamente un numero"));
}

// 1. CREO IL MIO CAMPO MINATO
let mineField = [];
let squares = 0;
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

const campo = document.querySelector(".list");
for (let i = 1 ; i <= squares ; i++) {
    mineField.push(i);
    var caselle = document.createElement("li");
    if (i !== isNaN) {
        caselle.classList.add("item");
        caselle.innerText = i;
        console.log(i);
    }
    campo.append(caselle);
}
console.log(mineField);

// 2. CALCOLO IL VALORE DELLE 16 MINE CASUALI: Il computer deve generare 16 numeri casuali tra 1 e 100, I numeri non possono essere duplicati
const cpuMines = [];
while (cpuMines.length < 16) {
    let mine = getRandomNumber(1,100);
    if (!cpuMines.includes(mine)) {
        cpuMines.push(mine);
    }
}
console.log(cpuMines);

// 3. CREO IL CONFRONTO TRA IL CAMPO MINATO E LE MINE
let possibility = mineField.length - cpuMines.length;

// 4. CHIEDO AL GIOCATORE DI INSERIRE UN NUMERO: Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero
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
            if (explosion === 1) {
                alert(`Hai perso, Il tuo punteggio è : ${safeSpot.length}`);
            } else if (play.length === safeSpot.length) {
                alert(`Hai vinto, Il tuo punteggio è : ${safeSpot.length}`);
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

// 5. COMUNICO IL PUNTEGGIO DELLA PARTITA: Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito
// if (explosion === 1) {
//     alert(`Hai perso, Il tuo punteggio è : ${safeSpot.length}`);
// } else {
//     alert(`Hai vinto, Il tuo punteggio è : ${safeSpot.length}`);
// }
// ------------------------------------------------------------------------------------------