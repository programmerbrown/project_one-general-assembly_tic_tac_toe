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
        if((gameBoard[compChoice] === null) && (gameCnt < 9)) {
          $('#' + compChoice).html(computerPlayer["mark"]);
          gameCnt += 1;
          gameBoard[compChoice] = computerPlayer["mark"];
          // console.log("The gameCnt is " + gameCnt);
          // console.log("The computer chose square " + compChoice);
          // console.log("The game board looks like this: ");
          // console.log(gameBoard);
          completed = true;
        }
      }

    }

    // The function will actually execute the process of playing the game.
    function playGame() {

    }

    // This function will check to see if anyone has won the game.
    function checkForWinner() {

    }
    // Game Control
    // Start game by assigning values to human player
    // Initially assign

    // writeToBoard(humanPlayer["mark"]);
    // computerChooses();

});
