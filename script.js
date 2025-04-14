let playerScore = 0;
let computerScore = 0;

const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

function playGame(playerChoice) {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.disabled = true);

  document.getElementById('playerChoice').textContent = `You chose: ${emojiMap[playerChoice]}`;
  document.getElementById('computerChoice').textContent = "Computer is thinking...";
  document.getElementById('result').textContent = "Loading...";

  setTimeout(() => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('computerChoice').textContent = `Computer chose: ${emojiMap[computerChoice]}`;

    let result = '';

    if (playerChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = `You Win! ${emojiMap[playerChoice]} beats ${emojiMap[computerChoice]}`;
      playerScore++;
    } else {
      result = `You Lose! ${emojiMap[computerChoice]} beats ${emojiMap[playerChoice]}`;
      computerScore++;
    }

    document.getElementById('result').innerHTML = `<div class="winner">${result}</div>`;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    buttons.forEach(btn => btn.disabled = false);
  }, 200);
    }
