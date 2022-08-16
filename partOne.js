// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Function to randomly place two ships upon start of game (call this function when user presses any key to begin, so must be defined before startGame() function.):
let firstShipLocation = ''; // If the user's input strike (define later & put into startGame function upon pressing any key) = var location, print 'Hit!' If not, miss. If they guess same location 2x, 'Miss!
let secondShipLocation = ''; // If the user's input strike (define later & put into startGame function upon pressing any key) = var location, print 'Hit!' If not, miss. If they guess same location 2x, 'Miss!

const placeFirstShip = () => {
    let letterCoordinates = 'ABC';
    let numberCoordinates = '123';
    for (let i = 0; i < 1; i++) {
        firstShipLocation += letterCoordinates[Math.floor(Math.random() * 3)] + numberCoordinates[Math.floor(Math.random() * 3)];
    }
    console.log(firstShipLocation); // Remove when game-ready
    return firstShipLocation;
}

const placeSecondShip = () => {
    let letterCoordinates = 'ABC';
    let numberCoordinates = '123';
    for (let i = 0; i < 1; i++) {
        secondShipLocation += letterCoordinates[Math.floor(Math.random() * 3)] + numberCoordinates[Math.floor(Math.random() * 3)];
    }
    console.log(secondShipLocation); // Remove when game-ready
    return secondShipLocation;
}

// Define variable corresponding to user input on where to strike:
// Add a check to playGame() to ensure strike[0] is A-C & strike[1] is 1-3. If not, ask for input again. Make it case-insensitive.
// First, add arrays of vaiid characters to be iterated through during check:
let letters = ['A', 'B', 'C'];
let numbers = ['1', '2', '3'];

// Initialize var to tally sunken ships:
let sunkenShips = 0;

// Have user press any key to begin game:
const playGame = () => {
    if (rs.keyIn('Press any key to start the game: ')) {
        console.log('Let\'s play!');
        placeFirstShip();
        placeSecondShip();
        // In case locations of the two ships are the same, keep resetting the vars & running again until different:
        if (firstShipLocation === secondShipLocation) {
            firstShipLocation = '';
            placeFirstShip();
            secondShipLocation = '';
            placeSecondShip();
        }
        // Make user input case-insensitive:
        let strike = rs.question('Enter a location to strike (e.g. "A3"): ').toUpperCase();
        console.log(strike);
        // Check that user inputs letter A-C & number 1-3:
    }
}
playGame();