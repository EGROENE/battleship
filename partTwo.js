// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the ships. Contains subarrays.
let shipLocations = [];
// Initialize array to track placement of the ships. Does not contain subarrays. 
let shipLocationsAll = [];

// Define potential letter & number coordinates:
let letterCoordinates = 'ABCDEFGHIJ';
let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

let unitOne = [];
let unitTwo = [];
let unitThree = [];

// Function to place 1 two-unit ship (call this once in placeAllShips(), since only one of this type is in game):
const placeTwoUnitShip = () => {
    let twoUnitShip = [];
    unitOne = [];
    unitTwo = [];

    // Create unit one:
    for (let i = 0; i < 1; i++) {
        unitOne += [letterCoordinates[Math.floor(Math.random() * 2)] + numberCoordinates[Math.floor(Math.random() * 5)]];
        console.log(unitOne);
        twoUnitShip.push(unitOne);
        shipLocationsAll.push(unitOne);
    }
    // Function to create additional units and place next to each other horizontally (if the units share the same letter coordinate):
    let createMoreUnitsIfLetterCoordIsShared = () => {
        if (unitOne[0] === 'A'
        || unitOne[0] === 'B'
        || unitOne[0] === 'C'
        || unitOne[0] === 'D'
        || unitOne[0] === 'E'
        || unitOne[0] === 'F'
        || unitOne[0] === 'G'
        || unitOne[0] === 'H'
        || unitOne[0] === 'I'
        || unitOne[0] === 'J') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
        }
        if ((unitOne[1] + unitOne[2]) == '10') {
            unitTwo = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 1));
        }
        twoUnitShip.push(unitTwo);
        shipLocationsAll.push(unitTwo);
    }

    // Function to create additional units and place next to each other vertically (if the units share the same number coordinate):
    let createMoreUnitsIfNumberCoordIsShared = () => {
        let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
        if (unitOne[1] === '1' && unitOne.length === 2
        || unitOne[1] === '2'
        || unitOne[1] === '3'
        || unitOne[1] === '4'
        || unitOne[1] === '5'
        || unitOne[1] === '6'
        || unitOne[1] === '7'
        || unitOne[1] === '8'
        || unitOne[1] === '9') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
        } else if ((unitOne[1] + unitOne[2]) == '10') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + (unitOne[1] + unitOne[2]);
        }
        if (unitOne[0] === 'J' && unitOne.length === 3) {
            unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + (unitOne[1] + unitOne[2]);        
        } else if (unitOne[0] === 'J') {
            unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1];  
        }
        console.log(unitTwo); // Keep now for testing purposes
        twoUnitShip.push(unitTwo);
        shipLocationsAll.push(unitTwo);
    }
    
    // Randomly call createMoreUnitsIfNumberCoordIsShared() or createMoreUnitsIfLetterCoordIsShared():
    const randPlaceVertOrHoriz = () => {
        let randNum = (Math.floor(Math.random() * 2));
        if (randNum === 0) {
            createMoreUnitsIfLetterCoordIsShared();
        } else {
            createMoreUnitsIfNumberCoordIsShared();
        }
    };
    randPlaceVertOrHoriz();

    shipLocations.push(twoUnitShip);
    console.log(twoUnitShip); // Keep now for testing purposes
    console.log(shipLocations); // Keep now for testing purposes
    //return twoUnitShip;
}

// Cut off most-recent units added to shipLocationsAll so you can check if most-recent units already exist from previous ships:
// Call in all ship-placement functions except for placeTwoUnitShip()
let prevShipLocations = [];
const getPreviousShipLocations = (shipUnits) => {
    for (let i = 0; i < shipLocationsAll.length - shipUnits; i++) {
        prevShipLocations.push(shipLocationsAll[i]);
    }
}

// Function to place 1 three-unit ship (call this function twice in placeAllShips(), as there are 2 of this type in game):
const placeThreeUnitShip = () => {
    let threeUnitShip = [];
    unitOne = [];
    unitTwo = [];
    unitThree = [];

    const placeUnits = () => {
         // Create unit one:
        for (let i = 0; i < 1; i++) {
            unitOne += [letterCoordinates[Math.floor(Math.random() * 2)] + numberCoordinates[Math.floor(Math.random() * 5)]];
            threeUnitShip.push(unitOne);
            shipLocationsAll.push(unitOne);
        }
        // Function to create additional units and place next to each other horizontally (if the units share the same letter coordinate):
        let createMoreUnitsIfLetterCoordIsShared = () => {
            if (unitOne[0] === 'A'
            || unitOne[0] === 'B'
            || unitOne[0] === 'C'
            || unitOne[0] === 'D'
            || unitOne[0] === 'E'
            || unitOne[0] === 'F'
            || unitOne[0] === 'G'
            || unitOne[0] === 'H'
            || unitOne[0] === 'I'
            || unitOne[0] === 'J') {
                unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
                unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));  
            }
            if ((unitOne[1] + unitOne[2]) == '10') {
                unitTwo = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 1));
                unitThree = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 2));
            }
            threeUnitShip.push(unitTwo);
            threeUnitShip.push(unitThree);
            console.log('threeUnitShip'); // Keep now for testing purposes
            console.log(threeUnitShip); // Keep now for testing purposes
            shipLocations.push(threeUnitShip);
            shipLocationsAll.push(unitTwo, unitThree);
        }

        // Function to create additional units and place next to each other vertically (if the units share the same number coordinate):
        let createMoreUnitsIfNumberCoordIsShared = () => {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
            if (unitOne[1] === '1' && unitOne.length === 2
            || unitOne[1] === '2'
            || unitOne[1] === '3'
            || unitOne[1] === '4'
            || unitOne[1] === '5'
            || unitOne[1] === '6'
            || unitOne[1] === '7'
            || unitOne[1] === '8'
            || unitOne[1] === '9'
            || (unitOne[1] + unitOne[2]) == '10') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1]; 
            }
            if (unitOne[0] === 'I') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
            }
            if (unitOne[0] === 'J' && unitOne.length === 3) {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + (unitOne[1] + unitOne[2]);        
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + (unitOne[1] + unitOne[2]);        
            } else if (unitOne[0] === 'J') {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1];  
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1];  
            }
            threeUnitShip.push(unitTwo);
            threeUnitShip.push(unitThree);
            console.log('threeUnitShip'); // Keep now for testing purposes
            console.log(threeUnitShip); // Keep now for testing purposes
            shipLocations.push(threeUnitShip);
            shipLocationsAll.push(unitTwo, unitThree);
        }

        // Randomly call createMoreUnitsIfNumberCoordIsShared() or createMoreUnitsIfLetterCoordIsShared():
        const randPlaceVertOrHoriz = () => {
            let randNum = (Math.floor(Math.random() * 2));
            if (randNum === 0) {
                createMoreUnitsIfLetterCoordIsShared();
            } else {
                createMoreUnitsIfNumberCoordIsShared();
            }
        };
        randPlaceVertOrHoriz();
    }
    placeUnits();

    console.log('shipLocations'); // Keep now for testing purposes
    console.log(shipLocations); // Keep now for testing purposes

    // LEAVE FOLLOWING CONSOLE.LOGS FOR TESTING PURPOSES
    console.log('shipLocationsAll'); // FOR TESTING
    console.log(shipLocationsAll); // FOR TESTING
    console.log(unitOne); // FOR TESTING
    console.log(unitTwo); // FOR TESTING
    console.log(unitThree); // FOR TESTING

    // Get previousShipLocations array:
    getPreviousShipLocations(3); // Param is equal to how many units the ship has
    console.log('prevShipLocations:'); // FOR TESTING
    console.log(prevShipLocations); // FOR TESTING

    // After the current ship's units are cut off, iterate thru previous ships' units to make sure the current ship's units don't match:
    while (prevShipLocations.includes(unitOne) || prevShipLocations.includes(unitTwo) || prevShipLocations.includes(unitThree)) {
        console.log('DUPLICATE CASE'); // FOR TESTING 
        
        // Cut most-recent ship off from shipLocations:
        shipLocations.pop();
        console.log('shipLocations popped:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        
        // Eliminate duplicate locations from shipLocationsAll:
        shipLocationsAll = shipLocations[0].concat(shipLocations[1]); // Add more here the bigger the ship gets (also concat shipLocations[2] in case of placeFourUnitShip, etc)
        console.log('shipLocationsAll trimmed:');
        console.log(shipLocationsAll); // FOR TESTING
        
        // Empty current ship & units:
        threeUnitShip = [];
        unitOne = [];
        unitTwo = [];
        unitThree = [];
        
        // Re-place current ship:
        placeUnits();
        console.log('Final shipLocations after duplicate case:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        console.log('Final shipLocationsAll after duplicate case:'); // FOR TESTING
        console.log(shipLocationsAll); // FOR TESTING
    }
}

// Function to place 1 four-unit ship (call once inside placeAllShips()):
const placeFourUnitShip = () => {
    let fourUnitShip = [];
    unitOne = [];
    unitTwo = [];
    unitThree = [];
    unitFour = [];

    const placeUnits = () => {
         // Create unit one:
        for (let i = 0; i < 1; i++) {
            unitOne += [letterCoordinates[Math.floor(Math.random() * 4)] + numberCoordinates[Math.floor(Math.random() * 5)]];
            fourUnitShip.push(unitOne);
            shipLocationsAll.push(unitOne);
        }
        // Function to create additional units and place next to each other horizontally (if the units share the same letter coordinate):
        let createMoreUnitsIfLetterCoordIsShared = () => {
            if (unitOne[0] === 'A'
            || unitOne[0] === 'B'
            || unitOne[0] === 'C'
            || unitOne[0] === 'D'
            || unitOne[0] === 'E'
            || unitOne[0] === 'F'
            || unitOne[0] === 'G'
            || unitOne[0] === 'H'
            || unitOne[0] === 'I'
            || unitOne[0] === 'J') {
                unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
                unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));  
                unitFour = (unitOne[0] + (Number(unitOne[1]) + 3));  
            }
            if ((unitOne[1] + unitOne[2]) == '10') {
                unitTwo = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 1));
                unitThree = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 2));
                unitFour = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 3));
            }
            fourUnitShip.push(unitTwo, unitThree, unitFour);
            console.log('fourUnitShip'); // Keep now for testing purposes
            console.log(fourUnitShip); // Keep now for testing purposes
            shipLocations.push(fourUnitShip);
            shipLocationsAll.push(unitTwo, unitThree, unitFour);
        }

        // Function to create additional units and place next to each other vertically (if the units share the same number coordinate):
        let createMoreUnitsIfNumberCoordIsShared = () => {
            let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
            if (unitOne[1] === '1' && unitOne.length === 2
            || unitOne[1] === '2'
            || unitOne[1] === '3'
            || unitOne[1] === '4'
            || unitOne[1] === '5'
            || unitOne[1] === '6'
            || unitOne[1] === '7'
            || unitOne[1] === '8'
            || unitOne[1] === '9'
            || (unitOne[1] + unitOne[2]) == '10') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1]; 
                unitFour = letterCoordinates.charAt(indexOfLetter + 3) + unitOne[1]; 
            }
            if (unitOne[0] === 'H') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1]; 
                unitThree = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
            }
            if (unitOne[0] === 'I') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1]; 
            }
            if (unitOne[0] === 'J' && unitOne.length === 3) {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + (unitOne[1] + unitOne[2]);        
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + (unitOne[1] + unitOne[2]);        
                unitFour = letterCoordinates.charAt(indexOfLetter - 3) + (unitOne[1] + unitOne[2]);        
            } else if (unitOne[0] === 'J') {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1];  
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1];  
                unitFour = letterCoordinates.charAt(indexOfLetter - 3) + unitOne[1];  
            }
            fourUnitShip.push(unitTwo, unitThree, unitFour);
            console.log('fourUnitShip'); // Keep now for testing purposes
            console.log(fourUnitShip); // Keep now for testing purposes
            shipLocations.push(fourUnitShip);
            shipLocationsAll.push(unitTwo, unitThree, unitFour);
        }

        // Randomly call createMoreUnitsIfNumberCoordIsShared() or createMoreUnitsIfLetterCoordIsShared():
        const randPlaceVertOrHoriz = () => {
            let randNum = (Math.floor(Math.random() * 2));
            if (randNum === 0) {
                createMoreUnitsIfLetterCoordIsShared();
            } else {
                createMoreUnitsIfNumberCoordIsShared();
            }
        };
        randPlaceVertOrHoriz();
    }
    placeUnits();

    console.log('shipLocations'); // Keep now for testing purposes
    console.log(shipLocations); // Keep now for testing purposes

    // LEAVE FOLLOWING CONSOLE.LOGS FOR TESTING PURPOSES
    console.log('shipLocationsAll'); // FOR TESTING
    console.log(shipLocationsAll); // FOR TESTING
    console.log(unitOne); // FOR TESTING
    console.log(unitTwo); // FOR TESTING
    console.log(unitThree); // FOR TESTING
    console.log(unitFour); // FOR TESTING

    // Get previousShipLocations array:
    getPreviousShipLocations(3); // Param is equal to how many units the ship has
    console.log('prevShipLocations:'); // FOR TESTING
    console.log(prevShipLocations); // FOR TESTING

    // After the current ship's units are cut off, iterate thru previous ships' units to make sure the current ship's units don't match:
    while (prevShipLocations.includes(unitOne) || prevShipLocations.includes(unitTwo) || prevShipLocations.includes(unitThree) || prevShipLocations.includes(unitFour)) {
        console.log('DUPLICATE CASE'); // FOR TESTING 
        
        // Cut most-recent ship off from shipLocations:
        shipLocations.pop();
        console.log('shipLocations popped:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        
        // Eliminate duplicate locations from shipLocationsAll:
        shipLocationsAll = shipLocations[0].concat(shipLocations[1], shipLocations[2]); // Add more here the bigger the ship gets (also concat shipLocations[2] in case of placeFourUnitShip, etc)
        console.log('shipLocationsAll trimmed:');
        console.log(shipLocationsAll); // FOR TESTING
        
        // Empty current ship & units:
        fourUnitShip = [];
        unitOne = [];
        unitTwo = [];
        unitThree = [];
        unitFour = [];
        
        // Re-place current ship:
        placeUnits();
        console.log('Final shipLocations after duplicate case:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        console.log('Final shipLocationsAll after duplicate case:'); // FOR TESTING
        console.log(shipLocationsAll); // FOR TESTING
    }
}


// Function to place 1 five-unit ship (call once inside placeAllShips()):

// Function to place all ships:
const placeAllShips = () => {
    placeTwoUnitShip();
    placeThreeUnitShip();
    placeThreeUnitShip();
    placeFourUnitShip();
}
placeAllShips();