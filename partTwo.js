// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the two ships. If they are the same, run function to get random locations again
let shipLocations = [];



// Function to place all ships:
const placeAllShips = () => {
    // Function to place 1 two-unit ship (call this once in placeAllShips(), since only one of this type is in game):
    let twoUnitShip = [];
    let unitOne = [];
    let unitTwo = [];
    const placeTwoUnitShip = () => {
        let letterCoordinates = 'ABCDEFGHIJ';
        let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

        // Create unit one:
        for (let i = 0; i < 1; i++) {
            unitOne += [letterCoordinates[Math.floor(Math.random() * 10)] + numberCoordinates[Math.floor(Math.random() * 10)]];
            console.log(unitOne);
            twoUnitShip.push(unitOne);
        }
        // Create unit two:
        for (let i = 0; i < 1; i++) {
            unitTwo += [letterCoordinates[Math.floor(Math.random() * 10)] + numberCoordinates[Math.floor(Math.random() * 10)]];
            console.log(unitTwo);
            twoUnitShip.push(unitTwo);
        }

        // Logic preventing units from being placed in the same spot:
        if (unitOne === unitTwo) {
            console.log('duplicate'); // Keep now for testing purposes
            unitOne = [];
            unitTwo = [];
            twoUnitShip = [];
            console.log(twoUnitShip); // Keep now for testing purposes
            placeTwoUnitShip();
        } else {
            shipLocations.push(twoUnitShip);
            console.log(twoUnitShip); // Keep now for testing purposes
            console.log(shipLocations); // Keep now for testing purposes
            return twoUnitShip;
        }
    }
    placeTwoUnitShip();

    // Function to place 2 three-unit ships (call this function twice in placeAllShips(), as there are 2 of this type in game):


    // Function to place 1 four-unit ship:


    // Function to place 1 five-unit ship:


    // Logic to prevent placing ships in same locations as others:

}
placeAllShips();