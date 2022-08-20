// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Initialize array to track placement of the ships. Contains subarrays.
let shipLocations = [];
// Initialize array to track placement of the ships. Does not contain subarrays. 
let shipLocationsAll = [];

// Define potential letter & number coordinates:
let letterCoordinates = 'ABCDEFGHIJ';
let numberCoordinates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Function to place 1 two-unit ship (call this once in placeAllShips(), since only one of this type is in game):
const placeTwoUnitShip = () => {
    let twoUnitShip = [];
    let unitOne = [];
    let unitTwo = [];

    // Create unit one:
    for (let i = 0; i < 1; i++) {
        unitOne += [letterCoordinates[Math.floor(Math.random() * 1)] + numberCoordinates[Math.floor(Math.random() * 5)]];
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
        shipLocationsAll.push(unitOne, unitTwo);
    }

    // Function to create additional units and place next to each other vertically (if the units share the same number coordinate):
    let createMoreUnitsIfNumberCoordIsShared = () => {
        let indexOfLetter = letterCoordinates.indexOf(unitOne[0]);
        if (unitOne[1] === '1' && unitOne.length === 2) {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
        } else if (unitOne[1] === '2') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '3') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '4') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '5') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '6') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '7') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '8') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];        
        } else if (unitOne[1] === '9') {
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
        shipLocationsAll.push(unitOne, unitTwo);
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
    return twoUnitShip;
}

// Function to place 1 three-unit ship (call this function twice in placeAllShips(), as there are 2 of this type in game):
const placeThreeUnitShip = () => {
    let threeUnitShip = [];
    let unitOne = [];
    let unitTwo = [];
    let unitThree = [];

    // Create unit one:
    for (let i = 0; i < 1; i++) {
        unitOne += [letterCoordinates[Math.floor(Math.random() * 2)] + numberCoordinates[Math.floor(Math.random() * 5)]];
        threeUnitShip.push(unitOne);
        shipLocationsAll.push(unitOne);
    }
    // Function to create additional units and place next to each other horizontally (if the units share the same letter coordinate):
    let createMoreUnitsIfLetterCoordIsShared = () => {
        if (unitOne[0] === 'A') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));
        } else if (unitOne[0] === 'B') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));
        } else if (unitOne[0] === 'C') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'D') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'E') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'F') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'G') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'H') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'I') {
            unitTwo = (unitOne[0] + (Number(unitOne[1]) + 1));
            unitThree = (unitOne[0] + (Number(unitOne[1]) + 2));        
        } else if (unitOne[0] === 'J') {
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
        if (unitOne[1] === '1' && unitOne.length === 2) {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];
        } else if (unitOne[1] === '2') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];      
        } else if (unitOne[1] === '3') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];    
        } else if (unitOne[1] === '4') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];      
        } else if (unitOne[1] === '5') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];     
        } else if (unitOne[1] === '6') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];       
        } else if (unitOne[1] === '7') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];       
        } else if (unitOne[1] === '8') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];      
        } else if (unitOne[1] === '9') {
            unitTwo = letterCoordinates.charAt(indexOfLetter + 1) + unitOne[1];
            unitThree = letterCoordinates.charAt(indexOfLetter + 2) + unitOne[1];       
        } else if ((unitOne[1] + unitOne[2]) == '10') {
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

    // Logic to check if shipLocationsAll already contains values of ship being placed. If so, keep making new values. If not, proceed normally:
    // Make sure to empty shipLocations array of last item added to it using pop() if shipLocationsAll contains one of the new units.

/*     console.log('threeUnitShip'); // Keep now for testing purposes
    console.log(threeUnitShip); // Keep now for testing purposes
    shipLocations.push(threeUnitShip); */
    console.log('shipLocations'); // Keep now for testing purposes
    console.log(shipLocations); // Keep now for testing purposes

    // LEAVE FOLLOWING CONSOLE.LOGS FOR TESTING PURPOSES
    console.log('shipLocationsAll');
    console.log(shipLocationsAll);
    console.log(shipLocationsAll[shipLocationsAll.length - 1]);

    // Cut off most-recent units added to shipLocationsAll so you can check if most-recent units already exist from previous ships:
    // Cut 3 off for 3-unit ship, etc:


    return threeUnitShip;
}

// Function to place 1 four-unit ship (call once inside placeAllShips()):


// Function to place 1 five-unit ship (call once inside placeAllShips()):

// Function to place all ships:
const placeAllShips = () => {
    //placeTwoUnitShip();
    placeThreeUnitShip();
    placeThreeUnitShip();
}
placeAllShips();