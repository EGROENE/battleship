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

// Have user press any key to begin game:
const startGame = () => {
    if (rs.keyIn('Press any key to start the game. ')) {
        console.log('Let\'s play!');
        placeFirstShip();
        placeSecondShip();
      }
}
startGame();