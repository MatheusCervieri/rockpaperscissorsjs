

function computerPlay(){
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
 }
 function playerPlay(){
    let player1input = window. prompt("Do You Want to Be Rock, Paper or Scissors? ");
    let player1play;
    if (player1input.toLowerCase() == "rock" ){
        player1play = 1;
    } 
    else if (player1input.toLowerCase() == "paper" ){
        player1play = 2;
    }
    else {
        player1play = 3;
    }
    return player1play;
 }
 function showPlay (play){
    if (play == 1){
        return "rock";
    }
    if (play == 2){
        return "paper";
    }
    if (play == 3){
        return "Scissors";
    }
 }
 const player1playdiv = document.querySelector("#player1playdiv");
 const player2playdiv = document.querySelector("#player2playdiv");
function playRound (computerplay, player1play){
    let resultado;
    
    player1playdiv.textContent = 'The Player 1 Play is  ' + showPlay(player1play) + '!';
   
    player2playdiv.textContent = 'The Computer Play is  ' + showPlay(computerplay) + '!';
    
    console.log("The Computer Play is: ");
    console.log(showPlay(computerplay));
    console.log("The Player1 Play is ");
    console.log(showPlay(player1play));
    if (computerplay == player1play){
        resultado = "Tied";
    }

    if(computerplay == 1 && player1play == 2){
        resultado = "Player 1 Win";
    }
    if(computerplay== 1 && player1play == 3){
        resultado = "Computer Win";
    }
    if(computerplay == 2 && player1play == 1){
        resultado = "Computer Win";
    }   
    if(computerplay == 2 && player1play == 3){
        resultado = "Player1 Win";
    }
    if(computerplay == 3 && player1play == 1){
        resultado = "Player1 Win";
    }
    if(computerplay == 3 && player1play == 2){
        resultado = "Computer Win";
    }

    console.log(resultado);
   
  
    return resultado;
}
    function game(rounds){
    let scorePlayer1 = 0;
    let scoreComputer = 0;
    let resultado;
    for (let i = 0; i < rounds; i++) {
        console.log("--------------------------------------------------------------------------------");
        console.log("New Round, the round number is");
        console.log(i + 1);
       resultado = playRound(computerPlay(),playerPlay());
       if (resultado == "Player1 Win") {
            scorePlayer1++;
            console.log("Player 1 won this round");
       }
       else if (resultado == "Computer Win"){
           scoreComputer++;
           console.log("Computer won this round");
       }
       else{
           console.log("This round is tied");
       }
       console.log("Player 1 score: ");
       console.log(scorePlayer1);
       console.log("Computer score");
       console.log(scoreComputer);
       if (i == rounds - 1){
            console.log("The Game is END");
            if(scorePlayer1 > scoreComputer){
                console.log("Player 1 Won the game");
            }
            else if (scorePlayer1 < scoreComputer){
                console.log("Computer Won the game");
            }
            else {
                console.log("The game is tied");
            }
       }

      }
     
    }

function clicoubotao (e){
    console.log(e);    
}

    const buttons = document.querySelectorAll('button');
    const winnerdiv = document.querySelector("#winnerdiv");
    const scorediv = document.querySelector("#scorediv");
    let scorePlayer1 = 0;
    let scoreComputer = 0;
    // we use the .forEach method to iterate through each button
    
  
 
    buttons.forEach((button) => {
    
      // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    let resultado = playRound(computerPlay(), button.id);
    console.log(resultado);
    const awinnerdiv = document.querySelector("#winnerdiv");
    awinnerdiv.textContent = resultado;
    if (resultado == "Player1 Win") {
        scorePlayer1++;
        console.log("Player 1 won this round");
   }
   else if (resultado == "Computer Win"){
       scoreComputer++;
       console.log("Computer won this round");
   }
   else{
       console.log("This round is tied");
   }
   
    scorediv.textContent = "The Player 1 Score is " + scorePlayer1 + " " + "The Computer Score is " + scoreComputer;  
    
    if (scorePlayer1 == 5 || scoreComputer == 5){
        console.log("the game is finished");
        if (scorePlayer1 > scoreComputer){
        scorediv.textContent = "The Player1 Wons the game";
        }
        else{
        scorediv.textContent = "The Computer Wons the game";
        }
        scorePlayer1 = 0;
        scoreComputer = 0;
        player1playdiv.textContent = "The Game is Finished";
        player2playdiv.textContent = "The Game is Finished";
        winnerdiv.textContent = "The Game is Finished";
     
    }      
});
    });

