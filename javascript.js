function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors"
    default:
      console.error("randNum wasn't an integer between 0 and 2, inclusive.");
  }
}

/* this function is no longer needed with the UI in place
function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const playerInput = prompt("Please enter 'Rock', 'Paper', or 'Scissors' (case insensitive):");
    const result = playRound(playerInput, getComputerChoice());

    if (result.startsWith("You win")) {
      playerScore++;
    }
    else if (result.startsWith("You lose")) {
      computerScore++;
    }
    
    console.log(`<< Round ${i + 1} of 5 >>
    ${result}
    Your score: ${playerScore}
    Computer's score: ${computerScore}`);

    if (result === "Invalid input.") {
      console.log("An invalid input was entered. There is no winner this round, and this round does not count as one of the 5 rounds in the game.");
      // Decrement for loop counter to invalidate this round due to invalid user input.
      i--;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations, you won the game!");
  }
  else if (playerScore < computerScore) {
    console.log("Oh no, you lost! Better luck next time.");
  }
  // (playerScore === computerScore)
  else {
    console.log("It's a tie.");
  }
}
*/

function playRound(playerSelection, computerSelection) {
  const playerInput = playerSelection.trim().toLowerCase();
  if (playerInput === "rock") {
    return rockVersus(computerSelection);
  }
  else if (playerInput === "paper") {
    return paperVersus(computerSelection);
  }
  else if(playerInput === "scissors") {
    return scissorsVersus(computerSelection);
  }
  else {
    return "Invalid input.";
  }
}

function rockVersus(computerInput) {
  switch (computerInput) {
    case "Rock":
      return "It's a tie! Both played Rock.";
    case "Paper":
      return "You lose! Paper beats Rock.";
    case "Scissors":
      return "You win! Rock beats Scissors.";
    default:
      console.error("The computer played something other than 'Rock', 'Paper', or 'Scissors'.");
  }
}

function paperVersus(computerInput) {
  switch (computerInput) {
    case "Rock":
      return "You win! Paper beats Rock.";
    case "Paper":
      return "It's a tie! Both played Paper.";
    case "Scissors":
      return "You lose! Scissors beats Paper.";
    default:
      console.error("The computer played something other than 'Rock', 'Paper', or 'Scissors'.");
  }
}

function scissorsVersus(computerInput) {
  switch (computerInput) {
    case "Rock":
      return "You lose! Rocks beats Scissors.";
    case "Paper":
      return "You win! Scissors beats Paper.";
    case "Scissors":
      return "It's a tie! Both played Scissors.";
    default:
      console.error("The computer played something other than 'Rock', 'Paper', or 'Scissors'.");
  }
}

let playerScore = 0;
let computerScore = 0;

function playRoundEventHandler () {
  const result = playRound(this.textContent, getComputerChoice());
  resultDiv.textContent = result;

  if (result.startsWith("You win")) {
    scoreDiv.textContent = `You: ${++playerScore} Computer: ${computerScore}`;
  }
  else if (result.startsWith("You lose")) {
    scoreDiv.textContent = `You: ${playerScore} Computer: ${++computerScore}`;
  }

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach(button => button.removeEventListener('click', playRoundEventHandler));

    const body = document.querySelector('body');
    const winnerDiv = document.createElement('div');
    winnerDiv.classList.add('winner');
    winnerDiv.textContent = (playerScore === 5) ? `The player wins!` : `The computer wins!`;
    body.appendChild(winnerDiv);
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRoundEventHandler));

const resultDiv = document.querySelector('div.result');

const scoreDiv = document.querySelector('div.score');