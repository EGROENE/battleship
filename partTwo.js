// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the ships.
let shipLocations = [];

// Function to place 1 two-unit ship (call this once in placeAllShips(), since only one of this type is in game):
const placeTwoUnitShip = () => {
    let twoUnitShip = [];
    let unitOne = [];
    let unitTwo = [];
    let letterCoordinates = 'ABCDEFGHIJ';
    let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    // Create unit one:
    for (let i = 0; i < 1; i++) {
        unitOne += [letterCoordinates[Math.floor(Math.random() * 10)] + numberCoordinates[Math.floor(Math.random() * 10)]];
        console.log(unitOne);
        twoUnitShip.push(unitOne);
    }
    // Function to create additional units and place next to each other horizontally (if the units share the same letter coordinate):
    let createMoreUnitsIfLetterCoordIsShared = () => {
        if (unitOne[0] === 'A') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'B') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'C') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'D') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'E') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'F') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'G') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'H') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'I') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        } else if (unitOne[0] === 'J') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        }
        if ((unitOne[1] + unitOne[2]) == '10') {
            unitTwo = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 1));
        }
        twoUnitShip.push(unitTwo);
    }

    // Function to create additional units and place next to each other vertically (if the units share the same number coordinate):
    let createMoreUnitsIfNumberCoordIsShared = () => {
        if (unitOne[1] === '1' && unitOne.length === 2) {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
        } else if (unitOne[1] === '2') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '3') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '4') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '5') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '6') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '7') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '8') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '9') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if ((unitOne[1] + unitOne[2]) == '10') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + (unitOne[1] + unitOne[2]);   
        }
        if (unitOne[0] === 'J') {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0])
            unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1];        
        }
        console.log(unitTwo);
        twoUnitShip.push(unitTwo);
    }

    // Logic preventing units from being placed in the same spot:
/*     if (unitOne === unitTwo) {
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
    } */
    shipLocations.push(twoUnitShip);
    console.log(twoUnitShip); // Keep now for testing purposes
    console.log(shipLocations); // Keep now for testing purposes
    return twoUnitShip;
}

// Function to place 1 three-unit ship (call this function twice in placeAllShips(), as there are 2 of this type in game):
const placeThreeUnitShip = () => {
    let threeUnitShip = [];
    let unitOne = [];
    let unitTwo = [];
    let unitThree = [];
    let letterCoordinates = 'ABCDEFGHIJ';
    let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    // Create unit one:
    for (let i = 0; i < 1; i++) {
        unitOne += [letterCoordinates[Math.floor(Math.random() * 1)] + numberCoordinates[Math.floor(Math.random() * 10)]];
        console.log(unitOne);
        threeUnitShip.push(unitOne);
    }
    // Create unit two:
    for (let i = 0; i < 1; i++) {
        unitTwo += [letterCoordinates[Math.floor(Math.random() * 1)] + numberCoordinates[Math.floor(Math.random() * 10)]];
        console.log(unitTwo);
        threeUnitShip.push(unitTwo);
    }
    // Create unit three:
    for (let i = 0; i < 1; i++) {
        unitThree += [letterCoordinates[Math.floor(Math.random() * 1)] + numberCoordinates[Math.floor(Math.random() * 10)]];
        console.log(unitThree);
        threeUnitShip.push(unitThree);
    }

    // Logic preventing units from being placed in the same spot:
    if (unitOne === unitTwo || unitOne === unitThree || unitTwo === unitThree) {
        console.log('duplicate'); // Keep now for testing purposes
        unitOne = [];
        unitTwo = [];
        unitThree = [];
        threeUnitShip = [];
        console.log(threeUnitShip); // Keep now for testing purposes
        placeThreeUnitShip();
    } else {
        shipLocations.push(threeUnitShip);
        console.log(threeUnitShip); // Keep now for testing purposes
        console.log(shipLocations); // Keep now for testing purposes
        return threeUnitShip;
    }

    // Logic preventing units from being placed in same spots as two-unit ships:
}

// Function to place 1 four-unit ship (call once inside placeAllShips()):


// Function to place 1 five-unit ship (call once inside placeAllShips()):

// Function to place all ships:
const placeAllShips = () => {
    placeTwoUnitShip();
}
placeAllShips();