
// Specification:

console.log(`Tic tac toe`);

// const pickPlayer = function(){

  
    
//         if ($(`#x`).click(``)){
//             playerOne = $(`#x`);
//             playerTwo = $(`#o`);

//             console.log('picked');
            
//         } else if( $(`#o`).click(``)){
//             playerOne = $(`#o`);
//             playerTwo = $(`#x`);
            
//             console.log('pick');

//         } else {
//             console.log(`Please pick player`);
//     }}

// function for picking which player



let playerOne = 0;
let playerTwo = 0;

// Creating two player game on click
const twoPlayer = $(`#player2`).on(`click`, function(){
    console.log(`working`);
    // assign which character chosen functions
    $(`#x`).on(`click`,function(){
        playerOne = $(`#x`);
        playerTwo = $(`#o`);
        console.log('x2');
        
    });
    
    $(`#o`).on(`click`, function(){
        playerOne = $(`#o`);
        playerTwo = $(`#x`);
        console.log(`o2`);
    });
    
});

//Creating one player game
const onePlayer = $(`#player1`).on(`click`, function(){
    console.log(`working1`);
    // assign which character chosen functions
    $(`#x`).on(`click`,function(){
        playerOne = $(`#x`);
        playerTwo = $(`#o`);
        console.log('x1');
        
    });
    
    $(`#o`).on(`click`, function(){
        playerOne = $(`#o`);
        playerTwo = $(`#x`);
        console.log(`o1`);
    });
    
});

//Global variable 
let playerToken = true;
const play = function(){
    if (playerToken === false){
        playerToken = true;
        playerTurn = playerOne
        console.log(playerToken, playerTurn, `player turn should be true`);
    } else {
        playerToken = false;
        playerTurn = playerTwo;
        console.log(playerToken, playerTurn, `player turn is false`);
    }

 } 


// let playerTurn = playerOne;
// const playO = function(){
//     if (playerTurn === playerTwo){
//         playerTurn = playerOne;
//         console.log(playerTurn, `player turn should be true`);
//     } else {
//         playerToken = playerTwo;
//         console.log(playerTurn, `player turn is false`);
//     }

//  } 

//     if ( ){

//     }

// player = 
//true false statement 

// player is X then html(). player = 0


$(`#1`).on(`click`, function(){
    play();
    $(`#1`).html(`playerTurn`);
});
    
$(`#2`).on(`click`, play);

$(`#3`).on(`click`, function(){
    $(`#3`).html(`x`);
});

$(`#4`).on(`click`, function(){
    $(`#4`).html(`x`);
});
$(`#5`).on(`click`, function(){
    $(`#5`).html(`x`);
});

$(`#6`).on(`click`, function(){
    $(`#6`).html(`x`);
});
$(`#7`).on(`click`, function(){
    $(`#7`).html(`x`);
});

$(`#8`).on(`click`, function(){
    $(`#8`).html(`x`);
});
$(`#9`).on(`click`, function(){
    $(`#9`).html(`x`);
});

    // $(`#player2`).click(twoPlayer);
    



// Creating two player game on click
// const twoPlayer = $(`#player2`).on(`click`, function(){

//     if ($(`#x`).click(``)){
//         playerOne = $(`#x`);
//         playerTwo = $(`#o`);

//         console.log('picked');
        
//     } elseif( $(`#o`).click(``)){
//         playerOne = $(`#o`);
//         playerTwo = $(`#x`);
        
//         console.log('pick');
        
    
//     } else {
//         console.log(`Please pick player`);
//      }
// })

//     $(`#player2`).click(twoPlayer);
//     console.log(`working`);



// Winning guesses array
