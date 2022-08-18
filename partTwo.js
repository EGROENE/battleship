// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the two ships. If they are the same, run function to get random locations again
let twoShipsLocations = [];

// Function to place both ships simultaneously. Make it impossible for second ship to be identical location:
const placeBothShips = () => {
    let firstShipLocation = '';
    let secondShipLocation = '';
    const placeFirstShip = () => {
        let letterCoordinates = 'ABC';
        let numberCoordinates = '123';
        for (let i = 0; i < 1; i++) {
            firstShipLocation += letterCoordinates[Math.floor(Math.random() * 3)] + numberCoordinates[Math.floor(Math.random() * 3)];
        }
        twoShipsLocations.push(firstShipLocation);
        return firstShipLocation;
    }
    placeFirstShip();
    const placeSecondShip = () => {
        let letterCoordinates = 'ABC';
        let numberCoordinates = '123';
        for (let i = 0; i < 1; i++) {
            secondShipLocation += letterCoordinates[Math.floor(Math.random() * 3)] + numberCoordinates[Math.floor(Math.random() * 3)];
        }
        twoShipsLocations.push(secondShipLocation);
        return secondShipLocation;
    }
    placeSecondShip();
    if (secondShipLocation === firstShipLocation) {
        twoShipsLocations = [];
        placeBothShips();
    }
}

// Add arrays of valid characters to be iterated through during check:
let letters = ['A', 'B', 'C'];
let numbers = ['1', '2', '3'];

// Initialize array to track user guesses. If a guess is entered more than once, it's a miss. In other words, if input already exists in userInputs, it's a miss:
let userInputs = [];

// Function to ask user for strike location:
let strike = '';
const getStrike = () => {
    strike = rs.question('Enter a location to strike (e.g. A3): ').toUpperCase();
    userInputs.push(strike);
    if (!letters.includes(strike[0]) || !numbers.includes(strike[1])) {
        console.log('Please enter a letter A-C & a number 1-3.')
        getStrike();
    }
}

// Function to ask user if they want to play again after sinking all ships:
const playAgainOrNot = () => {
    if (rs.keyInYN('You have destroyed all the battleships! Would you like to play again? ')) {
        twoShipsLocations = [];
        sunkenShips = 0;
        userInputs = [];
        playGame();
    }
}

// Initialize var to tally  sunken ships:
let sunkenShips = 0;

// Function to tell user if they hit or miss:
const hitOrMiss = () => {
    let countStrikeOccurences = 0;
    for (userInput of userInputs) {
        if(userInput === strike) {
            countStrikeOccurences++;
        }
    }
    if (countStrikeOccurences > 1) {
        console.log('You\'ve already picked this location. Miss!');
        getStrike();
        hitOrMiss();
    } else if (!twoShipsLocations.includes(strike)) {
        console.log('You have missed.');
        getStrike();
        hitOrMiss();
    } else if (twoShipsLocations.includes(strike)) {
        sunkenShips += 1;
        console.log('Total ships: ' + twoShipsLocations.length);
        console.log('Sunken ships: ' + sunkenShips);
        console.log('Remaining ships: ' + (twoShipsLocations.length - sunkenShips));
        console.log(`Hit! ${twoShipsLocations.length - sunkenShips} ship(s) remaining.`);
        if ((twoShipsLocations.length - sunkenShips) > 0) {
            getStrike();
            hitOrMiss();
        } else if ((twoShipsLocations.length - sunkenShips) === 0) {
            playAgainOrNot();
        }
    }
}

// Have user press any key to begin game:
const playGame = () => {
    if (rs.keyIn('Press just about any key to start the game: ')) {
        console.log('Let\'s play!');
        placeBothShips();
        getStrike();
        hitOrMiss();
    }
}
playGame();