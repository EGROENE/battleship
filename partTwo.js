// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the two ships. If they are the same, run function to get random locations again
let shipLocations = [];



// Function to place all ships:
const placeAllShips = () => {
    // Function to place 1 two-unit ship:
    let twoUnitShip = '';
    const placeTwoUnitShip = () => {
        let letterCoordinates = 'ABCDEFGHIJ';
        let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        for (let i = 0; i < 2; i++) {
            twoUnitShip += letterCoordinates[Math.floor(Math.random() * 10)] + numberCoordinates[Math.floor(Math.random() * 10)];
        }
        console.log(twoUnitShip);
        shipLocations.push(twoUnitShip);
        console.log(shipLocations);
        return twoUnitShip;
    }
    placeTwoUnitShip();

    // Function to place 2 three-unit ships:


    // Function to place 1 four-unit ship:


    // Function to place 1 five-unit ship:


    // Logic to prevent placing ships in same locations as others:
    
}
placeAllShips();