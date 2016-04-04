$(document).ready(function() {
    // VARIABLES

    // Total games played

    // This object represents the human player
    var humanPlayer = {
      mark: null,
      turn: null
    };

    // This object represents the computer player
    var computerPlayer = {
      mark: null,
      turn: null
    };

    // Defined various parameters needed to monitor the flow of the game
    // moveCounter keeps track of the number of moves that have happened
    // winningMark identifies the mark (X or O) that won the game (if there is a winner)
    // thereIsAWinner is set to true if a winner exists
    // gameBoard keeps track of which marks were put on the board so far
    var moveCounter = 1;
    var winningMark = null;
    var thereIsAWinner = false;
    var gameBoard = [ null, null, null, null, null, null, null, null, null ];


    // FUNCTIONS
    // setupPlayers() setups up the player objects humanPlayer and computerPlayer
    function setupPlayers() {
      var humanMark = prompt("Enter either X or O to choose which mark you want.");
      var humanTurn = prompt("Enter either 1 to go first or a 2 to go second.");

      humanPlayer["mark"] = humanMark.toUpperCase();
      humanMark === 'X' ? computerPlayer["mark"] = 'O' : computerPlayer["mark"] = 'X';

      humanPlayer["turn"] = parseInt(humanTurn);
      parseInt(humanTurn) === 1 ? computerPlayer["turn"] = 2 : computerPlayer["turn"] = 1;
    }


    // humanPlaysMove writes either an 'X' or 'O' to the board.
    // wrtiteToSquare also writes values to an gameBoard array based on
    // whether an 'X' or 'O' is played.
    function humanPlaysMove(callback) {
      // We need to create a pause in how the game flows to allow the human player to
      // choose a square.
      $('div').one('click', function() {
        $(this).text(parm);
        gameBoard[this.id] = humanPlayer["mark"];
        console.log('Game counter is now at ' + moveCounter);
        callback();
      });
    }

    // computerPlaysMove() chooses what position the computer will play
    function computerPlaysMove(callback) {
      var completed = false;
      var compChoice = null;
      while(!completed) {
        compChoice = Math.floor(Math.random() * 10);
        if(gameBoard[compChoice] === null) {
          $('#' + compChoice).html(computerPlayer["mark"]);
          gameBoard[compChoice] = computerPlayer["mark"];
          completed = true;
        }
        callback();
      }
    }

    // function playGame() {}
    // This function will check to see if anyone has won the game.
    function checkForWinner(callback) {
    // gameBoard to cover the scenario of a game winner
    // Using a switch statement to cover win scenarios for rows
      if((gameBoard[0] == gameBoard[1]) &&  (gameBoard[0] == gameBoard[2]) &&  (gameBoard[0] !== null)) {            // Check top row
          thereIsAWinner = true;
          winningMark = gameBoard[0];
          return thereIsAWinner;
      } else if((gameBoard[3] == gameBoard[4]) &&  (gameBoard[3] == gameBoard[5]) &&  (gameBoard[3] !== null)) {     // Check middle row
          thereIsAWinner = true;
          winningMark = gameBoard[3];
          return thereIsAWinner;
      } else if((gameBoard[6] == gameBoard[7]) &&  (gameBoard[6] == gameBoard[8]) &&  (gameBoard[6] !== null)) {     // Check bottom row
          thereIsAWinner = true;
          winningMark = gameBoard[6];
          return thereIsAWinner;
      } else if((gameBoard[0] == gameBoard[3]) &&  (gameBoard[0] == gameBoard[6]) &&  (gameBoard[0] !== null)) {     // Check left column
          thereIsAWinner = true;
          winningMark = gameBoard[0];
          return thereIsAWinner;
      } else if((gameBoard[1] == gameBoard[4]) &&  (gameBoard[1] == gameBoard[7]) &&  (gameBoard[1] !== null)) {     // Check middle column
          thereIsAWinner = true;
          winningMark = gameBoard[1];
          return thereIsAWinner;
      } else if((gameBoard[2] == gameBoard[5]) &&  (gameBoard[2] == gameBoard[8]) &&  (gameBoard[2] !== null)) {     // Check right column
          thereIsAWinner = true;
          winningMark = gameBoard[2];
          return thereIsAWinner;
      } else if((gameBoard[0] == gameBoard[4]) &&  (gameBoard[0] == gameBoard[8]) &&  (gameBoard[0] !== null)) {     // Check the first diagonal
          thereIsAWinner = true;
          winningMark = gameBoard[0];
          return thereIsAWinner;
      } else if((gameBoard[2] == gameBoard[4]) &&  (gameBoard[2] == gameBoard[6]) &&  (gameBoard[2] !== null)) {     // Check the second diagonal
          thereIsAWinner = true;
          winningMark = gameBoard[2];
          return thereIsAWinner;
      }
      callback();
    }

    // Announce winner for the game if one exists
    // If now winner exists then simply announce a draw/tie
    function announceWinner() {
      if(thereIsAWinner) {
        if(winningMark === 'X') {
          humanPlayer["mark"] === 'X' ? console.log("Human won this game!") : console.log("Computer won this game!");
        } else {
          humanPlayer["mark"] === 'O' ? console.log("Human won this game!") : console.log("Computer won this game!");
        }
      } else {
        console.log("There was no winner. It's a DRAW!");
      }
    }

    function playRound(cnt, winCondition, callback){
      while((cnt < 10) && (winCondition === false)) {      // Keep looping until the moveCounter, or the total number of moves reaches 9
        // Determine which player should go next
        //

        if(cnt % 2 === 0) {
          humanPlayer["turn"] === 2 ? humanPlaysMove(callback) : computerPlaysMove(callback);
          humanPlayer["turn"] === 2 ? console.log("Human plays move.") : console.log("Computer plays move.");
        } else {
          humanPlayer["turn"] === 1 ? humanPlaysMove(humanPlayer["mark"], callback()) : computerPlaysMove(callback());
          humanPlayer["turn"] === 1 ? console.log("Human plays move.") : console.log("Computer plays move.");
        }

      }
    }

    function incrementCounter(callback) {
      moveCounter += 1;
      callback();
    }

    // The playGame() function will actually execute the process of playing the game.
    function playGame() {
      // Assign each player object - humanPlayer and computerPlayer - a mark or turn
      // * Ask the person playing the game to choose whether they want to go 1st or 2nd
      // * Also ask the person playing the game to choose whether they want to be X's or O's
      // * Assign these values to the humanPlayer and computerPlayer objects
      // * function setupPlayers() handles all of this
      setupPlayers();

      PlayRound(moveCounter, thereIsAWinner, checkForWinner);


      // moveCounter will be used to keep track of the total number of plays that have happened.

      // while((moveCounter < 10) && (thereIsAWinner === false)) {      // Keep looping until the moveCounter, or the total number of moves reaches 9
      //   // Determine which player should go next
      //   //

      //   if(moveCounter % 2 === 0) {
      //     humanPlayer["turn"] === 2 ? humanPlaysMove(humanPlayer["mark"]) : computerPlaysMove();
      //     humanPlayer["turn"] === 2 ? console.log("Human plays move.") : console.log("Computer plays move.");
      //   } else {
      //     humanPlayer["turn"] === 1 ? humanPlaysMove(humanPlayer["mark"]) : computerPlaysMove();
      //     humanPlayer["turn"] === 1 ? console.log("Human plays move.") : console.log("Computer plays move.");
      //   }

      //   // Player takes a turn
      //   // * If human player:
      //   //  - allow the player to click the board to register a turn
      //   //  - stop the player from overriding a previous turn
      //   //  - turn off the eventlisteners to stop the human player from continuing to play.
      //   // * If computer player:
      //   //  - make sure the computer player doesn't over write a previous entry

      //   // Check to see if anyone has won the game
      //   // * If someone has won then break out of the while loop by setting thereIsAWinner to true
      //   checkForWinner(gameBoard);

      //   moveCounter += 1;// moveCounter is incremented
      // }

      // Announce a winner for the game if one exists
      // If no winner exists, then announce a draw/tie
      announceWinner();
    }

    // Game Control
    // Start game by assigning values to human player
    // Initially assign

    // humanPlaysMove(humanPlayer["mark"]);
    // computerPlaysMove();
    // var testGameBoard = [null, 'O', null, null, 'O', null, null, 'O', null ];
    // console.log(checkForWinner(testGameBoard));
    // // console.log(winningMark);
    // setupPlayers();
    // console.log("Human player has " + humanPlayer["mark"] + " mark and turn " + humanPlayer["turn"]);
    // console.log("Computer player has " + computerPlayer["mark"] + " mark and turn " + computerPlayer["turn"]);
    playGame();
});
