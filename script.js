let playerScore = parseInt(localStorage.getItem("rps_playerScore"), 10);
  let computerScore = parseInt(localStorage.getItem("rps_computerScore"), 10);

  if (isNaN(playerScore)) playerScore = 0;
  if (isNaN(computerScore)) computerScore = 0;

  // Update score display on load
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  });

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
        result = `<span style="color: #00ffae">You Win! ${emojiMap[playerChoice]} beats ${emojiMap[computerChoice]}</span>`;
        playerScore++;
      } else {
        result = `<span style="color: red">You Lose! ${emojiMap[computerChoice]} beats ${emojiMap[playerChoice]}</span>`;
        computerScore++;
      }

      // Save updated scores to localStorage
      localStorage.setItem("rps_playerScore", playerScore.toString());
      localStorage.setItem("rps_computerScore", computerScore.toString());

      // Display results
      document.getElementById('result').innerHTML = `<div class="winner">${result}</div>`;
      document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
      buttons.forEach(btn => btn.disabled = false);
    }, 200);
  }