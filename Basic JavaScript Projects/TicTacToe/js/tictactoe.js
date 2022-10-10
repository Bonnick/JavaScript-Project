//This variable keeps track of who's turn it is.
let activePlayer = 'X';
//This array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

function placeXOrO(sqaureNumber) {
 if (!selectedSquares.some(element => element.includes (sqaureNumber))) {
let select = document.getElementById(sqaureNumber);
if (activePlayer ==='X') {
     select.style.backgroundImage= 'url("images/x.png")';
    } else {
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


//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    // X 0,1,2 condition.
    if (arrayIncludes('0X','1X','2X')) { drawWinLine (50, 100, 558,100);}
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X','5X')) { drawWinLine(50, 304, 558, 304);}
    // x 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    // X 0, 3,6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100,558);}
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine (304, 50, 304, 558);}
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine (508, 50, 508, 558);}
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90);}
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine (100, 100, 520, 520);}
    // 0 0, 1, 2 condition.
    else if (arrayIncludes('00', '10', '20')) {drawWinLine(50, 100, 558, 100);}
    // 0 3, 4, 5 condition.
    else if (arrayIncludes('30', '40', '50')) {drawWinLine(50, 304, 558, 304);}
    // 0 6, 7, 8 condition.
    else if (arrayIncludes ('60', '70', '80')) {drawWinLine (50, 508, 558, 508);}
    // 0 0, 3, 6 condition.
    else if (arrayIncludes('00', '30', '60')) {drawWinLine(100, 50, 100, 558);}
    // 0 1, 4, 7 condition.
    else if (arrayIncludes('10', '40', '70')) {drawWinLine ( 304, 50, 304, 558);}
    // 0 2, 5, 8 condition.
    else if (arrayIncludes('20', '50', '80')) {drawWinLine(508, 50, 508, 558);}
    // 0 6, 4, 2 condition.
    else if (arrayIncludes('60', '40', '20')) {drawWinLine (100, 508, 510, 90);}
    // 00, 4, 8 condition.
    else if (arrayIncludes ('00', '40', '80')) {drawWinLine (100, 100, 520, 520);}
    // This condition checks for tie. If none of the above conditions register
    //and 9 squares are selected, the code executes.
    else if (selectedSquares.length>= 9) {
        //This function plays the tie game sound.
        Audio('./media/tie.mp3');
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }
    //This function checks if an array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row.
        const a= selectedSquares.includes(squareA);
        const b= selectedSquares.includes(squareB);
        const c= selectedSquares.includes(squareC);
        // If the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a===true && b===true && c===true) {return true;}
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout (function() { body.style.pointerEvents='auto';}, 1000);
}
//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3)
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio= new Audio(audioURL);
    //play method plays our audio sound.
    audio.play()
}