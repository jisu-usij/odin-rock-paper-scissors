function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  switch(randNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors"
    default:
      console.error("randNum wasn't a number between 0 and 2, inclusive");
  }
}