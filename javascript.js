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
    console.error("The player did not provide a valid input.");
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