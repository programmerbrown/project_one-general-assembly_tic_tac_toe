$(document).ready(function() {
    // Variables

    // Total games played

    // This object represents the human player
    var humanPlayer = {
      mark: 'X',
      turn: 1
    };

    // This object represents the computer player
    var computerPlayer = {
      mark: 'O',
      turn: 2
    };

    var gameCnt = 0;
    var winningMark = null;
    var thereIsAWinner = false;
    var gameBoard = [ null, null, null, null, null, null, null, null, null ];

    // Functions
    // writeToSquare writes either an 'X' or 'O' to the board.
    // wrtiteToSquare also writes values to an gameBoard array based on
    // whether an 'X' or 'O' is played.
    function writeToBoard(parm) {
      $('div').one('click', function() {
        $(this).text(parm);
        gameBoard[this.id] = parm;
        gameCnt += 1;
        console.log('Game counter is now at ' + gameCnt);
      });
    }

    // computerChooses() chooses what position the computer will play
    function computerChooses() {
      var completed = false;
      var compChoice = null;
      while(!completed) {
        compChoice = Math.floor(Math.random() * 10);
        if(gameBoard[compChoice] === null) {
          $('#' + compChoice).html(computerPlayer["mark"]);
          gameCnt += 1;
          gameBoard[compChoice] = computerPlayer["mark"];
          completed = true;
        }
      }

    }

    // The function will actually execute the process of playing the game.
    function playGame() {

    }

    // This function will check to see if anyone has won the game.
    function checkForWinner(board) {

    // Board to cover the scenario of a game winner
    // Using a switch statement to cover win scenarios for rows
      if((board[0] == board[1]) && (board[0] == board[2]) && (board[0] !== null)) {            // Check top row
          thereIsAWinner = true;
          winningMark = board[0];
          return thereIsAWinner;
      } else if((board[3] == board[4]) && (board[3] == board[5]) && (board[3] !== null)) {     // Check middle row
          thereIsAWinner = true;
          winningMark = board[3];
          return thereIsAWinner;
      } else if((board[6] == board[7]) && (board[6] == board[8]) && (board[6] !== null)) {     // Check bottom row
          thereIsAWinner = true;
          winningMark = board[6];
          return thereIsAWinner;
      } else if((board[0] == board[3]) && (board[0] == board[6]) && (board[0] !== null)) {     // Check left column
          thereIsAWinner = true;
          winningMark = board[0];
          return thereIsAWinner;
      } else if((board[1] == board[4]) && (board[1] == board[7]) && (board[1] !== null)) {     // Check middle column
          thereIsAWinner = true;
          winningMark = board[1];
          return thereIsAWinner;
      } else if((board[2] == board[5]) && (board[2] == board[8]) && (board[2] !== null)) {     // Check right column
          thereIsAWinner = true;
          winningMark = board[2];
          return thereIsAWinner;
      } else if((board[0] == board[4]) && (board[0] == board[8]) && (board[0] !== null)) {     // Check the first diagonal
          thereIsAWinner = true;
          winningMark = board[0];
          return thereIsAWinner;
      } else if((board[2] == board[4]) && (board[2] == board[6]) && (board[2] !== null)) {     // Check the second diagonal
          thereIsAWinner = true;
          winningMark = board[2];
          return thereIsAWinner;
      }

    }



    // Game Control
    // Start game by assigning values to human player
    // Initially assign

    // writeToBoard(humanPlayer["mark"]);
    // computerChooses();
    // var testGameBoard = [null, 'O', null, null, 'O', null, null, 'O', null ];
    // console.log(checkForWinner(testGameBoard));
    // console.log(winningMark);
});
