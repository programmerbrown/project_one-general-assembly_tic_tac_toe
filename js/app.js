$(document).ready(function() {
    // VARIABLES

    var moveCounter = 0;
    var winningMark = null;
    var currentMark = 'X';
    var gameBoard = [ null, null, null, null, null, null, null, null, null ];
    var score = {
      xWins: 0,
      oWins: 0,
      draws: 0
    };

    // FUNCTIONS

    // toggleMark() switches currentMark from 'X' to 'O' and vice versa as the game progresses
    function toggleMark() {
      if(currentMark === 'X') {
        currentMark = 'O';
      } else {
        currentMark = 'X';
      }
    }

    // checkForWinner() will check to see if anyone has won the game.
    // *** I need to clean this code up to make it look more presentable. *******
    function checkForWinner() {
      if((gameBoard[0] == gameBoard[1]) &&  (gameBoard[0] == gameBoard[2]) &&  (gameBoard[0] !== null)) {            // Check top row
          winningMark = gameBoard[0];
      } else if((gameBoard[3] == gameBoard[4]) &&  (gameBoard[3] == gameBoard[5]) &&  (gameBoard[3] !== null)) {     // Check middle row
          winningMark = gameBoard[3];
      } else if((gameBoard[6] == gameBoard[7]) &&  (gameBoard[6] == gameBoard[8]) &&  (gameBoard[6] !== null)) {     // Check bottom row
          winningMark = gameBoard[6];
      } else if((gameBoard[0] == gameBoard[3]) &&  (gameBoard[0] == gameBoard[6]) &&  (gameBoard[0] !== null)) {     // Check left column
          winningMark = gameBoard[0];
      } else if((gameBoard[1] == gameBoard[4]) &&  (gameBoard[1] == gameBoard[7]) &&  (gameBoard[1] !== null)) {     // Check middle column
          winningMark = gameBoard[1];
      } else if((gameBoard[2] == gameBoard[5]) &&  (gameBoard[2] == gameBoard[8]) &&  (gameBoard[2] !== null)) {     // Check right column
          winningMark = gameBoard[2];
      } else if((gameBoard[0] == gameBoard[4]) &&  (gameBoard[0] == gameBoard[8]) &&  (gameBoard[0] !== null)) {     // Check the first diagonal
          winningMark = gameBoard[0];
      } else if((gameBoard[2] == gameBoard[4]) &&  (gameBoard[2] == gameBoard[6]) &&  (gameBoard[2] !== null)) {     // Check the second diagonal
          winningMark = gameBoard[2];
      }
    }

    // announceWinner for the game if one exists
    // If no winner exists then simply announce a draw/tie
    function announceWinner() {
      // I think I will have to turn off the click event
      if(winningMark !== null) {
        $('div').off('click');
        console.log("The winner is the " + winningMark + ".");
        winningMark === 'X' ? score.xWins += 1 : score.oWins += 1;
      } else if(moveCounter === 9) {
        console.log("It was a Draw! No one won!")
        score.draws += 1;
      }
    }

    // The playGame() function will actually execute the process of playing the game.
    function playGame() {

        $('div').one('click', function() {
          $(this).text(currentMark);
          gameBoard[this.id] = currentMark;
          toggleMark();
          moveCounter += 1;
          checkForWinner();
          announceWinner();
          console.log('Game counter is now at ' + moveCounter);
        });
    }

  playGame();
});
