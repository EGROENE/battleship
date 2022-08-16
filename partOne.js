// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Function to randomly place two ships upon start of game (call this function when user presses any key to begin, so must be defined before startGame() function.):
let firstShipLocation = ''; // If the user's input strike (define later & put into startGame function upon pressing any key) = var location, print 'Hit!' If not, miss. If they guess same location 2x, 'Miss!
let secondShipLocation = ''; // If the user's input strike (define later & put into startGame function upon pressing any key) = var location, print 'Hit!' If not, miss. If they guess same location 2x, 'Miss!

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
        console.log(firstShipLocation); // Remove when game-ready
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
        console.log(secondShipLocation); // Remove when game-ready
        twoShipsLocations.push(secondShipLocation);
        return secondShipLocation;
    }
    placeSecondShip();
    console.log('both locations: ' + twoShipsLocations); // Leave here for now to check things are working properly
    if (secondShipLocation === firstShipLocation) {
        twoShipsLocations = [];
        placeBothShips();
    }
}

// Define variable corresponding to user input on where to strike:
// Add a check to playGame() to ensure strike[0] is A-C & strike[1] is 1-3. If not, ask for input again. Make it case-insensitive.
// First, add arrays of vaiid characters to be iterated through during check:
let letters = ['A', 'B', 'C'];
let numbers = ['1', '2', '3'];

// Initialize array to track user guesses. If a guess is entered more than once, it's a miss. In other words, if input already exists in userInputs, it's a miss:
let userInputs = [];

// Function to ask user for strike location:
let strike = '';
const getStrike = () => {
    strike = rs.question('Enter a location to strike (e.g. A3): ').toUpperCase();
    console.log(strike); // Leave in until end for testing purposes
    userInputs.push(strike);
    console.log(userInputs); // Leave in until end for testing purposes
    if (!letters.includes(strike[0]) || !numbers.includes(strike[1])) {
        console.log('Please enter a letter A-C & a number 1-3.')
        getStrike();
    }
}

// Function to tell user if they hit or miss:
// Initialize var to tally  sunken ships:
let sunkenShips = 0;
const hitOrMiss = () => {
    let remainingShips = twoShipsLocations.length - sunkenShips;
    if (twoShipsLocations.includes(strike)) {
        sunkenShips += 1;
        console.log('Total ships: ' + twoShipsLocations.length);
        console.log('Sunken ships: ' + sunkenShips);
        console.log('Remaining ships: ' + (twoShipsLocations.length - sunkenShips));
        console.log(`Hit! ${twoShipsLocations.length - sunkenShips} ship(s) remaining.`);
        if (remainingShips > 0) {
            getStrike();
            hitOrMiss();
        }
    } else if (!twoShipsLocations.includes(strike)) {
        console.log('You have missed.');
        getStrike();
        hitOrMiss();
    } else if (userInputs.includes(strike)) {
        console.log('You\ve already picked this location. Miss!');
        getStrike();
        hitOrMiss();
    }
}

// Function to end or continue game when there are zero ships left:

// Have user press any key to begin game:
const playGame = () => {
    if (rs.keyIn('Press any key to start the game: ')) {
        console.log('Let\'s play!');
        placeBothShips();
        getStrike();
        hitOrMiss();
    }
}
playGame();