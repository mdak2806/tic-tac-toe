
// Specification:

console.log(`Tic tac toe`);



//---------------- Global Variables ------------------------//

let playerOne;
let playerTwo;

let playerXScore = 0;
let playerOScore = 0;

let onePlayerMode;

let gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let globalObjects = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4, 
    5: 5,
    6: 6,
    7: 7,
    8: 8,
};

// ------------- Global actions for Game function -------------//

// Hides the winning gif only activated once win occurs
$(`#gameWon`).hide();

// Hard refreshes the current game page 
$(`#refresh`).click(function(){
    location.reload(true);
});

// ------------ New Game function ----------------------------//
// New game button function once clicked used to keep current game but clear grid 
$(`#newgame`).click(function(){

    // Refilling gridArray, to reset isOne function to check for win conditions
    gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    // Clear html text elements used in game 
    $(`#messages`).html(``);
    $(`#messages`).css("visibility", "hidden");
    $('.grid-item').html('');
    $(`#gameWon`).hide();

    //Refilling global objects used to check empty grid items for AI compoenent 
    globalObjects = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4, 
        5: 5,
        6: 6,
        7: 7,
        8: 8,
    };

    //Reseting the gameOver variable to false after win
    gameOver = false;
});





//----------Selecting 2 Player mode -----------//
$(`#player2`).on(`click`, function(){
    
    // Hides instructions once clicking mode
    $(`h4`).css("visibility", "hidden");
    
    /// Assign characters to the player depending on click
    $(`#x`).on(`click`,function(){
        playerOne = `X`;
        playerTwo = `O`;
        gameOver = false;
    });
    
    // Assign characters to the player depending on click
    $(`#o`).on(`click`, function(){
        playerOne = `O`;
        playerTwo = `X`;
        gameOver = false;
    });
    
});



///----------Selecting 1 Player mode -----------//


$(`#player1`).on(`click`, function(){
     // Hides instructions once clicking mode
    $(`h4`).css("visibility", "hidden");

    onePlayerMode = true;

    // Assign characters to the player depending on click
    $(`#x`).on(`click`,function(){
        playerOne = `X`;
        playerTwo = `O`;
        gameOver = false;
    });

    // Assign characters to the player depending on click
    $(`#o`).on(`click`, function(){
        playerOne = `O`;
        playerTwo = `X`;
        gameOver = false;
    });
    
});




//-------- Changing between players (True/False) ------------//
// playerToken set as true to identify player 1 as turn 1
let playerToken = true; 
const changePlayer = function(){

    //Identifying player turn through true and false and setting variables
    
     if ( playerToken === false ){
        playerToken = true;
        playerTurn = playerTwo;
        playerWaiting = playerOne;
        // console.log(playerToken);
        // console.log(playerTurn);
    } else if (playerToken === true){
        playerToken = false;
        playerTurn = playerOne;
        playerWaiting = playerTwo;
        // console.log(playerToken);
        // console.log(playerTurn);
    } else {
        return(`Please select player`);
}} ;

let computerToken = true;



//----------- Function Place Stickers --------//

const placeSticker = function(){

    
    // if statement used to stop it from double clicking
    // identifies empty squares and only allows placement if gameOver statement is false
    if ($(this).html() === `` && gameOver === false){
    console.log('this is beng hit')
    
    // changeplayer function introduced to let change player function to change
    changePlayer();

    //This inputs the players turn into the grid below based on the sticker of each player 
    $(this).html(`${playerTurn}`);
    
    
    // ----- below relates to player one mode -----//
    //deletes the players turn that corresponds to the grid and object this data is only utilised for the one player mode
    // allows computer to identify empty grid items
    delete globalObjects[parseInt($(this).attr("id"))];
    console.log(`global objects`,globalObjects)
    console.log(`${$(this).html(`${playerTurn}`)}`);
   

    //Runs the checkWinner function after every none-computer turn
    checkWinner();
    
    // Identify the next turn in new game if we're in 1 player mode
    if (playerToken === false){

    if (onePlayerMode === true) {
            // Object keys identify the current remaining keys within the object

            changePlayer();
            keys = Object.keys(globalObjects);

            // The number of keys, a random value is selected and stored as nextMover variable
            let nextMove = keys[Math.floor(Math.random()*keys.length)];
            
            // Ensures gameOver is false before placing computer move
            if( gameOver === false){
            $(`#${nextMove}`).html(`${playerTwo}`);

            // Deletes its own move from the object for the next move
            delete globalObjects[nextMove];

            //checks computer has won
            checkWinner();

            }
            }
        
        }

    }
}



//---------- Changing Grid based on turn -------------///
// After each click on the corresponding grid-item placeSticker is run, this also allows $this to identify what grid item to change

$(`#0`).on(`click`, placeSticker);
$(`#1`).on(`click`, placeSticker); 
$(`#2`).on(`click`, placeSticker);
$(`#3`).on(`click`, placeSticker);
$(`#4`).on(`click`, placeSticker);
$(`#5`).on(`click`, placeSticker);
$(`#6`).on(`click`, placeSticker);
$(`#7`).on(`click`, placeSticker);
$(`#8`).on(`click`, placeSticker);

// place gameOver as after this point once last click function is placed, and gameOver is not identified the game is a tie.
//Did not add the tie count would be a easy addition
let gameOver = true;

//--------------- win factors -------------///
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6],
];

let combo = 0;
let threeArray = [];
// let result = false
const checkWinner = function(){
    
    // loops through each winning combinations for the game 
    for (let i = 0; i < winningCombinations.length; i++) {
        
        // Loop grabs the variables and stores it within combo variable
        const combo = winningCombinations[i];
        
        // the stored combos are then compared to the stored threeway array through the forEach function 
        threeArray =[];   

        combo.forEach(isOne);

        // As the comparisions are complete we need a way to compare the stored data, it checks that the values in each array 
        if (threeArray[0] === threeArray[1]){

            if( threeArray[1] === threeArray[2]){
                if(threeArray[0] === ''){
                } else {
                    gameOver = true;
                    scoreBoard();
                    $(`#gameWon`).show();
                    winMessage();
                }
                
            }
        }       
    }   
}

// isOne function for every move takes the token and pushes it into the threeArray - stores the information regarding to characters in each location
const isOne = function(token){
    square = $(`#${token}`).html(); 
    threeArray.push(square);
    return square 
       }

//---------------- scoreBoard function -----------------------//
//scoreBoard function used to update the current scores of player X and player O
//this is placed after gameOver = true, so only runs if a win situation occurs
const scoreBoard = function(){
    if(playerTurn === 'X'){
        playerXScore++;
        $(`#scoreX`).html(playerXScore);
    } else{
        playerOScore++;
        $(`#scoreO`).html(`${playerOScore}`);
    }
};

// ----------------- winMessage function ----------------//
// winMessage function used to display win messages once game is over
// achieved by checking current player mode type and current player turn
// this is placed after gameOver = ture, so only runs if a win situation occurs
const winMessage = function(){
    if(onePlayerMode === true && playerTurn === playerOne ){
 
    $(`#messages`).css("visibility", "visible");
    $(`#messages`).html(`Player ${playerTurn} WINS! Player ${playerTurn} has FIRST MOVE!`);
       
    } else { $(`#messages`).css("visibility", "visible");
        $(`#messages`).html(`Player ${playerTurn} WINS! Player ${playerWaiting} has FIRST MOVE!`); 
};
}
