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
let unitFour = [];
let unitFive = [];

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
                unitFour = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
            }
            if (unitOne[0] === 'I') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
                unitFour = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1]; 
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
    getPreviousShipLocations(4); // Param is equal to how many units the ship has
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
const placeFiveUnitShip = () => {
    let fiveUnitShip = [];
    unitOne = [];
    unitTwo = [];
    unitThree = [];
    unitFour = [];
    unitFive = [];

    const placeUnits = () => {
         // Create unit one:
        for (let i = 0; i < 1; i++) {
            unitOne += [letterCoordinates[Math.floor(Math.random() * 4)] + numberCoordinates[Math.floor(Math.random() * 5)]];
            fiveUnitShip.push(unitOne);
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
                unitFive = (unitOne[0] + (Number(unitOne[1]) + 4));  
            }
            if ((unitOne[1] + unitOne[2]) == '10') {
                unitTwo = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 1));
                unitThree = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 2));
                unitFour = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 3));
                unitFour = (unitOne[0] + (Number(unitOne[1] + unitOne[2]) - 4));
            }
            fiveUnitShip.push(unitTwo, unitThree, unitFour, unitFive);
            console.log('fiveUnitShip'); // Keep now for testing purposes
            console.log(fiveUnitShip); // Keep now for testing purposes
            shipLocations.push(fiveUnitShip);
            shipLocationsAll.push(unitTwo, unitThree, unitFour, unitFive);
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
                unitFive = letterCoordinates.charAt(indexOfLetter + 4) + unitOne[1]; 
            }
            if (unitOne[0] === 'G') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1]; 
                unitFour = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
            }
            if (unitOne[0] === 'H') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1]; 
                unitFour = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
                unitFive = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1]; 
            }
            if (unitOne[0] === 'I') {
                unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
                unitThree = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1]; 
                unitFour = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1]; 
                unitFive = letterCoordinates.charAt(indexOfLetter - 3) + unitOne[1]; 
            }
            if (unitOne[0] === 'J' && unitOne.length === 3) {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + (unitOne[1] + unitOne[2]);        
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + (unitOne[1] + unitOne[2]);        
                unitFour = letterCoordinates.charAt(indexOfLetter - 3) + (unitOne[1] + unitOne[2]);        
                unitFive = letterCoordinates.charAt(indexOfLetter - 4) + (unitOne[1] + unitOne[2]);     
            } else if (unitOne[0] === 'J') {
                unitTwo = letterCoordinates.charAt(indexOfLetter - 1) + unitOne[1];  
                unitThree = letterCoordinates.charAt(indexOfLetter - 2) + unitOne[1];  
                unitFour = letterCoordinates.charAt(indexOfLetter - 3) + unitOne[1];  
                unitFive = letterCoordinates.charAt(indexOfLetter - 4) + unitOne[1];  
            }
            fiveUnitShip.push(unitTwo, unitThree, unitFour, unitFive);
            console.log('fiveUnitShip'); // Keep now for testing purposes
            console.log(fiveUnitShip); // Keep now for testing purposes
            shipLocations.push(fiveUnitShip);
            shipLocationsAll.push(unitTwo, unitThree, unitFour, unitFive);
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
    console.log(unitFive); // FOR TESTING

    // Get previousShipLocations array:
    getPreviousShipLocations(5); // Param is equal to how many units the ship has
    console.log('prevShipLocations:'); // FOR TESTING
    console.log(prevShipLocations); // FOR TESTING

    // After the current ship's units are cut off, iterate thru previous ships' units to make sure the current ship's units don't match:
    while (prevShipLocations.includes(unitOne) || prevShipLocations.includes(unitTwo) || prevShipLocations.includes(unitThree) || prevShipLocations.includes(unitFour) || prevShipLocations.includes(unitFive)) {
        console.log('DUPLICATE CASE'); // FOR TESTING 
        
        // Cut most-recent ship off from shipLocations:
        shipLocations.pop();
        console.log('shipLocations popped:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        
        // Eliminate duplicate locations from shipLocationsAll:
        shipLocationsAll = shipLocations[0].concat(shipLocations[1], shipLocations[2], shipLocations[3]); // Add more here the bigger the ship gets (also concat shipLocations[2] in case of placeFourUnitShip, etc)
        console.log('shipLocationsAll trimmed:');
        console.log(shipLocationsAll); // FOR TESTING
        
        // Empty current ship & units:
        fiveUnitShip = [];
        unitOne = [];
        unitTwo = [];
        unitThree = [];
        unitFour = [];
        unitFive = [];
        
        // Re-place current ship:
        placeUnits();
        console.log('Final shipLocations after duplicate case:'); // FOR TESTING
        console.log(shipLocations); // FOR TESTING
        console.log('Final shipLocationsAll after duplicate case:'); // FOR TESTING
        console.log(shipLocationsAll); // FOR TESTING
    }
}

// Function to place all ships:
const placeAllShips = () => {
    //placeTwoUnitShip();
    placeThreeUnitShip();
    placeThreeUnitShip();
    placeFourUnitShip();
    placeFiveUnitShip();
}
placeAllShips();

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
        shipLocations = [];
        shipLocationsAll = [];
        sunkenShips = 0;
        userInputs = [];
        playGame();
    }
}

// Initialize var to tally  sunken ships:
let sunkenShips = 0;

// Function to tell user if they hit or miss:
const hitOrMiss = () => {
    let remShips = shipLocations.length;
    let countStrikeOccurrences = 0;
    for (userInput of userInputs) {
        if(userInput === strike) {
            countStrikeOccurences++;
        }
    }
    if (countStrikeOccurrences > 1) {
        console.log('You\'ve already picked this location. Miss!');
        getStrike();
        hitOrMiss();
    } else if (!shipLocationsAll.includes(strike)) {
        console.log('You have missed.');
        getStrike();
        hitOrMiss();
    }
    if (shipLocationsAll.includes(strike)) {
        console.log(`Hit!`);
        // Remove strike location from shipLocationsAll:
        let indexOfHitInSLA = shipLocationsAll.indexOf(strike);
        shipLocationsAll.splice(indexOfHitInSLA, 1);
        console.log('shipLocationsAll after struck coord removed:'); // FOR TESTING
        console.log(shipLocationsAll); // FOR TESTING

        // Remove strike location from shipLocations:
        // Will need to iterate thru subarrays:
        for (shipLocation of shipLocations) {
            let indexOfHitInSL = shipLocation.indexOf(strike);
            shipLocation.splice(indexOfHitInSL, 1);
            console.log('shipLocations after struck coord removed:'); // FOR TESTING
            console.log(shipLocations); // FOR TESTING

            // If all coords in a ship have been hit:
            if (shipLocation.length === 0) {
                sunkenShips++;
                console.log(`You have sunken this ship. ${remShips} ship(s) left.`);
                console.log('Total sunken ships: '); // FOR TESTING
                console.log(sunkenShips); // FOR TESTING
            }
            if (sunkenShips >= 1) {
                getStrike();
                hitOrMiss();
            } else {
                playAgainOrNot();
            }
        }
    }
}