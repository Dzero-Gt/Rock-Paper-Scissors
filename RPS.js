let random = 0;
        function computerPlay(){
            random = Math.floor(Math.random() * 3)
            return random;
        }
        
        let compWins = 0;
        let playerWins = 0;
        let results = "";
        game();
       
        function playRound(playerSelect, computerSelect){
            let playerS = playerSelect.toLowerCase();
            switch (playerS){
                case "rock":
                    if(computerPlay() == 1) {
                        results = "You lose! Paper beats Rock";
                        compWins++;
                    }
                    else {
                        results = "you win! Rock beats scissors";
                        playerWins++;
                    }
                break;
                case "paper":
                    if(computerPlay() == 2) {
                            results = "You lose! Scissors beats Paper";
                            compWins++;
                        }
                        else {
                            results = "you win! Paper beats Rock";
                            playerWins++;
                        }
                break;
                case "scissors":
                    if(computerPlay() == 0) {
                            results = "You lose! Rock beats scissors";
                            compWins++;
                        }
                        else {
                            results = "you win! Rock beats scissors";
                            playerWins++;
                        }
                break;
                default: 
                break;
            }
            console.log(results);
            return results;
        }
  
        function game(){
        
            /* for (let i = 0; i < 5; i++){
                let ps;
                ps = prompt("Choose Rock, Paper, or Scissors"); 
                playRound(ps, computerPlay());
                console.log(results); 
            }*/
            console.log("Player wins: " + playerWins);
            console.log("Computer wins: " + compWins);
        }
function runRound(e){
    let playerChoice = this.getAttribute('data-choice')
    let results = playRound(playerChoice,computerPlay());
    return results;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', runRound));