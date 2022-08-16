// Add 'readline-sync' NPM package:
var rs = require('readline-sync');

// Have user press any key to begin game:
const startGame = () => {
    if (rs.keyIn('Press any key to start the game. ')) {
        console.log('Let\'s play!');
      }
}
startGame();