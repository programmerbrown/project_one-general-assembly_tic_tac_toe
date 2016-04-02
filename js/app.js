$(document).ready(function() {
    // Variables
    var humanPlayer;
    var computerPlayer;
    var gameBoard = [ null, null, null, null, null, null, null, null, null ];
    // Functions
    // writeToSquare writes either an 'X' or 'O' to the board.
    // wrtiteToSquare also writes values to an gameBoard array based on
    // whether an 'X' or 'O' is played.
    function writeToBoard(parm) {
      $('div').one('click', function() {
        $(this).text(parm);
        gameBoard[this.id] = Math.random();
        console.log(gameBoard[this.id]);
      });
    }
    // computerChooses() chooses what computer
    // function computerChooses() {

    // }
    // Game Control
    // Start game by assigning values to human player
    writeToBoard("O");
});
