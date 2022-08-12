
// Specification:

console.log(`Tic tac toe`);

$(`#gameWon`).hide();
$(`#messages`).hide();

// $(`#xwins2`).hide();
// $(`#owins2`).hide();
// $(`#xwins1`).hide();
// $(`#owins1`).hide();

//---------------- Global Variables ------------------------//
let playerOne;
let playerTwo;

let playerXScore = 0;
let playerOScore = 0;

let onePlayerMode;
let playerTwoNextMove



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

// Enforcing player to pick variables
// $(`#game`).hide();
// $(`#stickers`).hide();

// refresh a page
$(`#refresh`).click(function(){
    location.reload(true);
    // TODO: potentially could set scores to 0, and reinitialise all the global variables instead of a refresh
});

// New game button an assoicated actions
$(`#newgame`).click(function(){
    gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // Refresh and clear grid
    $(`#messages`).hid();
    $('.grid-item').html('');
    $(`#gameWon`).hide();
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
    $(`#message`).hide();
    $(`#xwins2`).hide();
    $(`#owins2`).hide();
    $(`#xwins1`).hide();
    $(`#owins1`).hide();
    
});





//----------Selecting 2 Player mode -----------//
$(`#player2`).on(`click`, function(){
    $(`h4`).css("visibility", "hidden");
    // Present next steps after picking Game type
    $(`#stickers`).show();
    
    // Assign characters and present Grid
    $(`#x`).on(`click`,function(){
        playerOne = `X`;
        playerTwo = `O`;
        gameOver = false;
        // $(`#score1`).html(`${playerOneScore}`);
        console.log($(`#score1`).html(""));
        // TODO: add tokens change to $(`#x`).img or html() 
        // TODO: playerTwo = $(`#x`).html();
    });
    
    // Assign characters and present Grid
    $(`#o`).on(`click`, function(){
        playerOne = `O`;
        playerTwo = `X`;
        gameOver = false;
        $(`#score2`).html(`${playerTwoScore}`);
        console.log($(`#score1`).html(""));
    });
    
});



///----------Selecting 1 Player mode -----------//


$(`#player1`).on(`click`, function(){
    $(`h4`).css("visibility", "hidden");

    onePlayerMode = true;
    // Present next steps after picking Game type
    $(`#stickers`).show();

    // Assign characters and present Grid
    $(`#x`).on(`click`,function(){
        playerOne = `X`;
        playerTwo = `O`;
        gameOver = false;
        // $(`#scoreX`).html(`${playerOneScore}`);
    });

    // Assign characters and present Grid
    $(`#o`).on(`click`, function(){
        playerOne = `O`;
        playerTwo = `X`;
        gameOver = false;
        // $(`#scoreO`).html(`${playerTwoScore}`);
    });
    
});



let playerToken = true; 
//-------- Changing between players (True/False) ------------//

const play = function(){

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



//----------- Function identifying Win and player Sticker --------// 
const placeSticker = function(){

    
    // if statement used to stop it from double clicking
    if ($(this).html() === `` && gameOver === false){
    console.log('this is beng hit')
    // play function introduced to let change player function to change
    
    
    // Allowing auto play
    // autoGame();
    play();
    //This inputs the players turn into the grid below / removes double click
    
        
        $(this).html(`${playerTurn}`);
    

    delete globalObjects[parseInt($(this).attr("id"))];
    console.log(`global objects`,globalObjects)
    console.log(`${$(this).html(`${playerTurn}`)}`);
   

    //Runs the checkWinner function after every turn
    checkWinner();
    
    // Identify the next turn in new game
    
    // if we're in 1 player mode
    if (playerToken === false){

    if (onePlayerMode === true) {
            play();
            keys = Object.keys(globalObjects);
            let nextMove = keys[Math.floor(Math.random()*keys.length)];
            if( gameOver === false){

            
            $(`#${nextMove}`).html(`${playerTwo}`);
            delete globalObjects[nextMove];
            checkWinner();
            console.log(`global objects`,globalObjects)
            
            // playerTurn = playerOne;
            // playerWaiting = playerTwo;
            // playerToken = true;

            }
            }
        
        }

    }
}



//---------- Changing Grid based on turn -------------///
// simplify to grid item not this long thing

$(`#0`).on(`click`, placeSticker);
$(`#1`).on(`click`, placeSticker); 
$(`#2`).on(`click`, placeSticker);
$(`#3`).on(`click`, placeSticker);
$(`#4`).on(`click`, placeSticker);
$(`#5`).on(`click`, placeSticker);
$(`#6`).on(`click`, placeSticker);
$(`#7`).on(`click`, placeSticker);
$(`#8`).on(`click`, placeSticker);


let gameOver = true;
    // add function here


    //-------- win factors ---------///
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
    
    // loops to see what is inside the combo
    for (let i = 0; i < winningCombinations.length; i++) {
        
        // Loop grabs the variables and stores it within combo variable

        const combo = winningCombinations[i];
        // every function compares the combo array to the isOne function - to ensure they match
        threeArray =[];   
        // combo.every(isOne);

        combo.forEach(isOne);
        if (threeArray[0] === threeArray[1]){

            if( threeArray[1] === threeArray[2]){
                if(threeArray[0] === ''){
                    // console.log('No win');
                } 
                else {
                    gameOver = true;
                    scoreBoard();
                    $(`#gameWon`).show();
                    winMessage();
                    
                    // $(`#xwins2`).show();
                    winMessage();
                    console.log( $(`#scoreX`).html(`${playerXScore}`));
                    console.log(`This is win`);

                    
                }
                
            }
        }       
    }   
}


const isOne = function(token){
     square = $(`#${token}`).html(); 
    threeArray.push(square);
    return square 
       }

const scoreBoard = function(){
    if(playerTurn === 'X'){
        playerXScore++;
        $(`#scoreX`).html(playerXScore);
    } else{
        playerOScore++;
        $(`#scoreO`).html(`${playerOScore}`);
    }
};

const winMessage = function(){
    if(onePlayerMode === true && playerTurn === playerOne ){
    // $(`#xwins1`).show();
    $(`#messages`).html(`May the Force be with you ${playerTurn} You WIN! ${playerTurn} now make the FIRST MOVE!`);
    $(`#messages`).show();
       
    } else { $(`#messages`).html(`May the Force be with you ${playerTurn} You WIN! ${playerWaiting} now make the FIRST MOVE!`);
     $(`#messages`).show()
}
};


// $(`#owins2`).show();
// $(`#xwins1`).show();
// $(`#owins1`).show();       



// // Win with auto game
// if(onePlayerMode === false){
//     console.log(`${playerTurn} you are the winner`);
//     console.log('this is beging hit');
    
//     if(playerTurn === playerTwo){
//     console.log('this is beging hit');
    
    
//     $(`#message`).html(`${playerTurn} Wins! Loser ${playerWaiting} begins`);
//     console.log($(`#message`).html())

//     console.log(`player 1 mode  is active comp win`)
//     $(`#message`).show();
//     playerTurn = playerOne;
//     playerToken = true;

//     }else if (playerTurn === playerOne) {
//     $(`#message`).html(`${playerTurn} Wins! Loser ${playerTurn} begins`);
//     $(`#message`).show();
//     playerTurn = playerOne;
//     playerToken = true;
//     console.log(`player 1 mode  is active comp win`)
// };
// if(playerTurn === playerOne) {
//     gameOver = true;
//     // playerOneScore++

//     console.log({playerOneScore, playerTwoScore})
// } if(playerTurn === playerTwo){
//     gameOver = true;
//     // playerTwoScore++
//     console.log({playerOneScore, playerTwoScore})
// } if (onePlayerMode === true){
    
// }
// }