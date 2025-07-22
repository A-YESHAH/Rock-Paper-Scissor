window.onload = function () {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game-ui").style.display = "block";
  }, 2000);

  const buttons = document.querySelectorAll("button");
  const moves = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "✊",
    paper: "🤚",
    scissors: "✌️",
  };

  let user1 = 0;
  let computer1 = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userMove = button.dataset.move;
      playGame(userMove);
    });
  });

  function playGame(userMove) {
    const computerMove = moves[Math.floor(Math.random() * moves.length)];
    let result = "";

    if (userMove === computerMove) {
      result = "It's a draw!";
    } else if (
      (userMove === "rock" && computerMove === "scissors") ||
      (userMove === "paper" && computerMove === "rock") ||
      (userMove === "scissors" && computerMove === "paper")
    ) {
      result = "You win!";
      user1 += 1;
    } else {
      result = "Computer wins!";
      computer1 += 1;
    }

    document.querySelector("#you").innerHTML = `
      <h3>You Chose:</h3>
            <p>Wins: ${user1}</p>
      <p>${emojis[userMove]} ${capitalize(userMove)}</p>
    `;

    document.querySelector("#computer").innerHTML = `
      <h3>Computer Chose:</h3>
            <p>Wins: ${computer1}</p>
      <p>${emojis[computerMove]} ${capitalize(computerMove)}</p>
    `;

    document.querySelector("#result").innerHTML = `
      <h3>${result}</h3>
    `;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
};
