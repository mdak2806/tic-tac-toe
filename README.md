# **TIC TAC WARS**

You can find the link to Tic Tac Wars Game [here]( https://mdak2806.github.io/tic-tac-toe/). 

## Project Overview

As part of the Software Engineering Immersive program, at General Assembly Project #0 involved developing a  Tic Tac Toe game that allows both a two player mode, and similarly a one player mode with AI technology allowing computer generated moves. 

## The game 

The purpose of the game, Tic Tac Toe is to try and get three characters in a row from a board of nine locations. This could be three in the same row, or the same column and similarly diagonally. You must try and win before your opponent, whilst blocking countermoves by your opponent. 

![Tic Tac Wars User Interface](/Users/mohamaddakdouk/sei/projects/tic-tac-toe/iScreen Shoter - 2022-08-13 20:57:38.203.jpg)

This simple game, requires great focus and strategy especially when playing a strong opponent. 

## Page Layout and design

**Heading** is placed at the top of the page, highlighting the games specific name. It is centred and created using Abode Star Wars Text Image generator, it intends to reflect the same font, size (78px) and colour (yellow) as a typical Star Wars Film. 

**Instructions** directly below the heading indicates to users how to initiate a game - through selecting a Player Mode after which providing the option to select between X and O characters. X and O characters are placed vertically on opposite sides of the board.

Whilst still using Abode Star Wars Text Image generator I created the instructions, buttons and characters. Although I decreased the size to create a distinction between the heading and instructions, whilst also utilising the hollow effect and black and white colours to break up the colour theme on the web page. 

**Grid** is centred in the middle of the game, directly below the headings and instructions. This allows the grid to be the focus, whilst also providing it the greatest width and height on the screen. The opacity was set at 0.8 using CSS to allow the dark themed space background to reflect slightly through whilst creating a 3D affect. 

**Rest buttons** placed directly below the grid and centred to prevent the need of users to toggle far/much enhancing the user experience. 

**Scores** are presented at the bottom of the page, directly below the corresponding characters indicating the scores for each. 

**Background** is a moving gif of stars in space, and it is used to tie together the Star Wars theme and similarly generate a similar experience to the opening sense of any Star Wars movie. 

**Winning Giff** after winning a game, a Lightsabre gif is generated to indicate the end of the game. 


## How to Use Guide

Tic Tac Wars is a simple game with a few simple steps to initiate the game. 
1.  Select the player mode either 1 Player or 2 Player by pressing the respective buttons. 
    a. 1 Player mode will allow computer generated moves after the user has placed a token. 
    b. 2 Player mode allows two users to play a corresponding move at their respective turns. 
2. Select the character X or O depending on your preference. Player 1 will decide the character first and the corresponding character is assigned to the Player 2. 
3. Player 1 is required to begin the game, by clicking on the grid location which they would like to place their character. 
4. A respective counter move is generated by the opponent, the game continues until a Player places 3 tokens in a row either vertically, horizontally or diagonally on the grid. 
5. Once a player wins, a Star Wars lightsabre gif generates on the grip and the scores are updated. 
6. To continue playing with the same opponent and continue with the current scores, the user would press the New Game button. 
7. Retrospectively to rest the game and the scores the user would press the Refresh button. 



## Technical Code
 //Identifying player turn through true and false and setting variables

**Change Player** function uses a true or false statement to switch between players and allowing other functions to understand which user is currently generating a move. 

```Javascript 
let playerToken = true; 
const changePlayer = function(){
     if ( playerToken === false ){
        playerToken = true;
        playerTurn = playerTwo;
        playerWaiting = playerOne;
    } else if (playerToken === true){
        playerToken = false;
        playerTurn = playerOne;
        playerWaiting = playerTwo;
    } else {
        return(`Please select player`);
}} ;```
```


**PlaceSticker** After each click on the corresponding grid-item placeSticker function is run, this identifies if the current grid-item is space is empty, whether the game is over and similarly placing the sticker in the allocated location. 

```Javascript

const placeSticker = function(){
    // if statement used to stop it from double clicking
    // identifies empty squares and only allows placement if gameOver statement is false
    if ($(this).html() === `` && gameOver === false){
    console.log('this is beng hit')
    
    // changeplayer function introduced to let change player function to change
    changePlayer();

    //This inputs the players turn into the grid below based on the sticker of each player 
    $(this).html(`${playerTurn}`);
   
    //Runs the checkWinner function after every none-computer turn
    checkWinner();
    }
}

$(`#0`).on(`click`, placeSticker);
```

**CheckWinner function** runs through the different winning combinations and places them into the combo variable. The combo variable is then compared to threeArray which stores all users moves. The forEach function is utilised to make this comparison and return a win result if a match is dedicated. 

```javascript
const checkWinner = function(){
    
    // loops through each winning combinations for the game 
    for (let i = 0; i < winningCombinations.length; i++) {
        
        // Loop grabs the variables and stores it within combo variable
        const combo = winningCombinations[i];
        
        // the stored combos are then compared to the stored threeway array through the forEach function 
        threeArray =[];   
        
        // now winning combos are compared to each input in the threeArray which collects the players move this will return a match if they are the same
        combo.forEach(isOne);

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
```

**Global Objects** the global objects are utilised for the AI component, this snippet of code that allows computer generated moves is located  within the PlaceSticker function. This code works by deleting the players grid location with the corresponding object data which is then utilised to generate a random move.  

```Javascript 
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
```

## Project Status

The project is approximately 75% complete, all essential components are running, although the code can be cut down with repeating variables and commands a prime example is below the place sticker, instead of calling each individual grid a universal $this statement could be used. Further to this the code overall could be simplified by utilising the Global objects to identify a win, and similarly empty spaces, as such a potential redundancy of the threeArray variable. 

### Project Future Improvements 

- [ ] *Allow the game to fit on smaller devices, allowing uses to play on mobile devices.*
- [ ] *Change the X and O's on the game board to display Star Wars characters whereby uses could pick and assign themselves their own unique Stars Wars figure.* 
- [ ] *Creating a dynamic gameboard whereby users can pick different gameboard sizes, including 4x4, 5x5, 10x10.*
- [ ] *Allow computer to take first move after Player One wins. Currently computer generated moves are unable to function without the user initiating a move first.* 
- [ ] *Enhancing the AI on computer generated moves, current code allows computer to generate random moves only which allows the user to win easily. Increasing difficulty could improve overall game experience. * 
- [ ] *Creating a draw score board or message if a draw occurs, currently this is not being present nor is the gif working when a draw is present.*
