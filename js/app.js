$(document).ready(function() {
    // VARIABLES

    var moveCounter = 0;
    var winningMark = null;
    var currentMark = null;
    var gameBoard = [ null, null, null, null, null, null, null, null, null ];
    var score = {
      xWins: 0,
      oWins: 0,
      draws: 0
    };

    // FUNCTIONS
    // setCurrentMark
    function setCurrentMark () {
      currentMark = prompt("Type either 'X' or 'O' to determine which mark will go first!");
    }


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

    // setScoreBoard will write to the score board either (1) when a player wins or
    // (2) a game results in a draw
    function setScoreBoard() {
        $('#x-wins').html(score.xWins);
        $('#o-wins').html(score.oWins);
        $('#draws').html(score.draws);
    }
    // announceWinner for the game if one exists
    // If no winner exists then simply announce a draw/tie
    function announceWinner() {
      if(winningMark !== null) {
        $('div').off('click'); // Turn off board so that it cannot receive additional clicks
        winningMark === 'X' ? score.xWins += 1 : score.oWins += 1;
        setScoreBoard();
        swal(winningMark + " Won!", "Player " + winningMark + " got 3 in a row!", "success");
      } else if(moveCounter === 9) {
        score.draws += 1;
        setScoreBoard();
        swal("A Draw!", "No one won. :(", "error");
      }
    }

    // The playGame() function will actually execute the process of playing the game.
    function playGame() {
        setCurrentMark();
        $('div.game-squares').one('click', function() {
          $(this).text(currentMark);
          gameBoard[this.id] = currentMark;
          toggleMark();
          moveCounter += 1;
          checkForWinner();
          announceWinner();
        });
    }

    // The resetGame function works to clear the board, reset important parameters needed to play the game
    // restart
    function resetGame() {
      $('button').on('click', function() {
          $('div').off('click');
          $('div#0, div#1, div#2, div#3, div#4, div#5, div#6, div#7, div#8').html('');
          moveCounter = 0;
          winningMark = null;
          currentMark = 'X';
          gameBoard = [ null, null, null, null, null, null, null, null, null ];
          playGame();
      });
    }
    // swal("Oops...", "Something went wrong!", "error");
    // swal({   title: "Error!",   text: "Here's my error message!",   type: "error",   confirmButtonText: "Cool" });
    // swal({   title: "HTML <small>Title</small>!",   text: "A custom <span style="color:#F8BB86">html<span> message.",   html: true });
  playGame();
  resetGame();
});
