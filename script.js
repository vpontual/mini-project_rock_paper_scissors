let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["r", "p", "s"];

start();

function start() {
  const playerChoice = prompt(
    "Welcome to Rock Paper Scissors! Please choose one: R, P, or S:"
  ).toLowerCase();
  if (choices.indexOf(playerChoice) === -1) {
    alert("Sorry please only select: R, P, or S:");
    start();
  } else {
    play(playerChoice);
  }
}

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    ties++;
    alert(`Tie! You both chose ${playerChoice.toUpperCase()}`);
  } else if (
    (playerChoice === "r" && computerChoice === "s") ||
    (playerChoice === "p" && computerChoice === "r") ||
    (playerChoice === "s" && computerChoice === "p")
  ) {
    wins++;
    alert(
      `You Win! Your ${playerChoice.toUpperCase()} beats their ${computerChoice.toUpperCase()}`
    );
  } else {
    losses++;
    alert(
      `Not this time! Their ${computerChoice.toUpperCase()} beats your ${playerChoice.toUpperCase()}`
    );
  }
  if (confirm("Do you want to play again?")) {
    start();
  } else {
    alert(`Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
  }
}
