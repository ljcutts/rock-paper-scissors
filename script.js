const rockButton = document.getElementById("rock-player")
const paperButton = document.getElementById("paper-player");
const scissorButton = document.getElementById("scissor-player");
const botRockButton = document.getElementById("rock-bot")
const botPaperButton = document.getElementById("paper-bot");
const botScissorButton = document.getElementById("scissor-bot");
const botWinCounter = document.getElementById("bot-win-count")
const playerWinCounter = document.getElementById("player-win-count");
const resetButton = document.querySelector(".reset-button")

//0 = Rock
//1 = Paper
//2 = Scissors
 let playerChoice = 0
 let botChoice = 0
 let playerWinCount = 0
 let botWinCount = 0

 rockButton.addEventListener("click", () => {
     playerChoice = 0;
     rockButton.style.boxShadow = "0px 0px 15px";
      setTimeout(automateProcess, 2000);
 })

  paperButton.addEventListener("click", () => {
    playerChoice = 1;
    paperButton.style.boxShadow = "0px 0px 15px";
    setTimeout(automateProcess, 2000);
  });

  scissorButton.addEventListener("click", () => {
    playerChoice = 2;
    scissorButton.style.boxShadow = "0px 0px 15px";
     setTimeout(automateProcess, 2000);
  });

  resetButton.addEventListener("click", () => {
    playerWinCount = 0
    botWinCount = 0
    window.alert("Scores have been resetted!")
    botWinCounter.innerHTML = `Bot Win Count: ${botWinCount}`;
    playerWinCounter.innerHTML = `Player Win Count: ${playerWinCount}`;
  })


function automateProcess() {
  botChooseOption()
  setTimeout(incrementWins, 2000)
}

function botChooseOption() {
  const randomChoice = Math.floor(Math.random() * 10) % 3;

  if(randomChoice === 0) {
    botChoice = 0
    botRockButton.style.transitionDuration = "0.5s"
    botRockButton.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    botRockButton.style.transitionDelay = "75ms";
    botRockButton.style.scale = "90%"
    botRockButton.style.boxShadow = "0px 0px 15px";
  }

  if (randomChoice === 1) {
    botChoice = 1;
    botPaperButton.style.transitionDuration = "0.5s";
    botPaperButton.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    botPaperButton.style.transitionDelay = "75ms";
    botPaperButton.style.scale = "90%"
    botPaperButton.style.boxShadow = "0px 0px 15px";
  }

  if (randomChoice === 2) {
    botChoice = 2;
    botScissorButton.style.transitionDuration = "0.5s";
    botScissorButton.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    botScissorButton.style.transitionDelay = "75ms";
    botScissorButton.style.scale = "90%"
    botScissorButton.style.boxShadow = "0px 0px 15px";
  }
}

function incrementWins() {
  if (playerChoice === 0 && botChoice === 1) {
    botWinCount++;
    window.alert("Bot won this round with Paper!")
    botWinCounter.innerHTML = `Bot Win Count: ${botWinCount}`;
    rockButton.style.boxShadow = "0px 0px 0px";
    botPaperButton.style.boxShadow = "0px 0px 0px"
    botPaperButton.style.scale = "100%";
  }
  
  if (botChoice === 0 && playerChoice === 1) {
    playerWinCount++;
    window.alert("Current Player won this round with Paper!");
    playerWinCounter.innerHTML = `Player Win Count: ${playerWinCount}`;
    botRockButton.style.boxShadow = "0px 0px 0px";
    paperButton.style.boxShadow = "0px 0px 0px";
    botRockButton.style.scale = "100%";
  }

  if (playerChoice === 1 && botChoice === 2) {
    botWinCount++;
    window.alert("Bot won this round with Scissors!");
    botWinCounter.innerHTML = `Bot Win Count: ${botWinCount}`;
    botScissorButton.style.boxShadow = "0px 0px 0px";
    paperButton.style.boxShadow = "0px 0px 0px";
    botScissorButton.style.scale = "100%";
  }

  if (botChoice === 1 && playerChoice === 2) {
    playerWinCount++;
    window.alert("Current Player won this round with Scissors!");
    playerWinCounter.innerHTML = `Player Win Count: ${playerWinCount}`;
    botPaperButton.style.boxShadow = "0px 0px 0px";
    scissorButton.style.boxShadow = "0px 0px 0px";
    botPaperButton.style.scale = "100%";
  }

  if (playerChoice === 2 && botChoice === 0) {
    botWinCount++;
    window.alert("Bot won this round with Rock!");
    botWinCounter.innerHTML = `Bot Win Count: ${botWinCount}`;
    botRockButton.style.boxShadow = "0px 0px 0px";
    scissorButton.style.boxShadow = "0px 0px 0px";
    botRockButton.style.scale = "100%";
  }

  if (botChoice === 2 && playerChoice === 0) {
    playerWinCount++;
     window.alert("Current Player won this round with Rock!");
     playerWinCounter.innerHTML = `Player Win Count: ${playerWinCount}`;
     botScissorButton.style.boxShadow = "0px 0px 0px";
     rockButton.style.boxShadow = "0px 0px 0px";
     botScissorButton.style.scale = "100%";
  }

  if(botChoice === 0 && playerChoice  === 0) {
     window.alert("Tie with Rock!");
     rockButton.style.boxShadow = "0px 0px 0px";
     botRockButton.style.boxShadow = "0px 0px 0px";
     botRockButton.style.scale = "100%";
  }

  if (botChoice === 1 && playerChoice === 1) {
    window.alert("Tie with Paper!");
    paperButton.style.boxShadow = "0px 0px 0px";
    botPaperButton.style.boxShadow = "0px 0px 0px";
    botPaperButton.style.scale = "100%";
  }

  if (botChoice === 2 && playerChoice === 2) {
    window.alert("Tie with Scissors!");
    scissorButton.style.boxShadow = "0px 0px 0px";
    botScissorButton.style.boxShadow = "0px 0px 0px";
    botScissorButton.style.scale = "100%";
  }
}