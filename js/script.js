// TRACCIA DELL'ESERCIZIO

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

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

// 1. CREO IL MIO CAMPO MINATO
const mineField = [];
for (let i = 1 ; i <= 10 ; i++) {
    mineField.push(i);
}
console.log(mineField);

// 2. CALCOLO IL VALORE DELLE 16 MINE CASUALI
const cpuMines = [];
while (cpuMines.length < 4) {
    let mine = getRandomNumber(1,10);
    if (!cpuMines.includes(mine)) {
        cpuMines.push(mine);
    }
}
console.log(cpuMines);

// 3. CREO IL CONFRONTO TRA IL CAMPO MINATO E LE MINE
const control = getMatch(mineField,cpuMines);

// 4. CHIEDO AL GIOCATORE DI INSERIRE UN NUMERO
const safeSpot = [];
let explosion = 0;
do {
    let userChoice = Number(prompt("Inserisci un numero"));
    let explosion = 0;
    if (!cpuMines.includes(userChoice)) {
        console.log("Continua");
        safeSpot.push(userChoice);
    } else {
        let explosion = 1;
        console.log("Addios");
    }
} while (safeSpot.length < 6 || explosion === 1);
console.log(safeSpot);