
let activeplayer = 'X';
let selectedSquares = [];

function placeXOrO(sqaureNumber) {
 if (!selectedSquares.some(element => element.includes (sqaureNumber))) {
let select = document.getElementById(squareNumber);
if (activePlayer ==='X') {
     select.style.backgroundImage= ("images/x.png");
    } esle {
        //If activePlayer is equal to 'O', the o.pn
        select.style.backgroundImage = 'url("images/o.png")';
    }
    //squareNumber and activePlayer are concatenate
    selectedSquares.push(sqaureNumber + activePlayer);
    //This calls a function to check for any win co
    checkWinConditions();
    //If condition is for changing the active pla
    if (activePlayer === 'X') {
        // If active player is 'X' change it to 'O'.
        activePlayer = 'O';
        //If active player is anything other than 'X'.
    } else {
        //change the activePlayer to 'X'
        activePlayer = 'X';
    }
    //This function plays placement sound.
    Audio('./media/place.mp3');
    //This condition checks to see if it is comput
    if(activePlayer === 'O') {
        //This function disables clicking for comp
        disableClick();
        //This function waits 1 second before place
        // and enabling click.
        setTimeout(function () { computersTurn (); }, 1000);
         }
         //Returning true is needed for our computersTrue
         return true;
    }
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
             pickASquare = String(Math.floor(Math.random() *9));
             if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
             };
        }
    }
}