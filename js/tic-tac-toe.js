
// Specification:

console.log(`Tic tac toe`);


//---------------- Global Variables ------------------------//
let playerOne = 0;
let playerTwo = 0;

//---------- Assigning game type / 1 or 2 player -----------//
const twoPlayer = $(`#player2`).on(`click`, function(){
    console.log(`working`);
    // assign which character chosen functions
    $(`#x`).on(`click`,function(){
        playerOne = $(`#x`).html();
        playerTwo = $(`#o`).html();
        console.log(playerOne);
        console.log(playerTwo);
        
    });
    
    $(`#o`).on(`click`, function(){
        playerOne = $(`#o`).html();
        playerTwo = $(`#x`).html();
        console.log(playerOne);
        console.log(playerTwo);
    });
    
});

//------------- Creating one player game ------------//
const onePlayer = $(`#player1`).on(`click`, function(){
    console.log(`working1`);
    // assign which character chosen functions
    $(`#x`).on(`click`,function(){
        playerOne = $(`#x`).html();
        playerTwo = $(`#o`).html();
        console.log(playerOne);
        
    });
    $(`#o`).on(`click`, function(){
        playerOne = $(`#o`).html();
        playerTwo = $(`#x`).html();
        console.log(playerOne);
    });
    
});

//-------- Changing between players (True/False) ------------//


// if( playerOne === (`#o`) || playerOne === (`#x`)){
//     
let playerToken = true; 


const play = function(){
    // if(playerOne != $(`#o`).html()  || playerOne != $(`#x`).html()){
    //     return(`please select player`)
    if ( playerToken === false ){
        playerToken = true;
        playerTurn = playerTwo;
        console.log(playerToken, playerTurn, `player turn should be true`);
    } else if (playerToken === true){
        playerToken = false;
        playerTurn = playerOne;
        console.log(playerToken, playerTurn, `player turn is false`);
    } else {
        return(`Please select player`);
}} ;
// $(`#stickers`).click(play);



//---------- Changing Grid based on turn -------------///
// simplify to grid item not this long thing


$(`#1`).on(`click`, function(){
    play();
    $(`#1`).html(`${playerTurn}`);
}); 
$(`#2`).on(`click`, function(){
    play();
    $(`#2`).html(`${playerTurn}`);
});
$(`#3`).on(`click`, function(){
    play();
    $(`#3`).html(`${playerTurn}`);
});
$(`#4`).on(`click`, function(){
    play();
    $(`#4`).html(`${playerTurn}`);
});
$(`#5`).on(`click`, function(){
    play();
    $(`#5`).html(`${playerTurn}`);
});
$(`#6`).on(`click`, function(){
    play();
    $(`#6`).html(`${playerTurn}`);
});
$(`#7`).on(`click`, function(){
    play();
    $(`#7`).html(`${playerTurn}`);
});
$(`#8`).on(`click`, function(){
    play();
    $(`#8`).html(`${playerTurn}`);
});
$(`#9`).on(`click`, function(){
    play();
    $(`#9`).html(`${playerTurn}`);
});