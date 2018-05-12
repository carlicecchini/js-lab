//Globals
var userHealth = 40;
var grantHealth = 10;
var wins = 0;

// Hook up the start button
var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}

// Define a function to update the player name
var playerName = document.getElementById("playerName");
function setPlayerName(user) {
  playerName.innerText = user;
}

// Hook up the attack button
var attackButton=document.getElementById("attackButton");
attackButton.onclick=attack;
function attack() {
  userHealth -= getDamage();
  grantHealth -= getDamage();
  console.log(`The user has ${userHealth} health remaining`);
  console.log(`Grant has ${grantHealth} health remaining`);
  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;
  var grantProgressBar = document.getElementsByClassName("computer")[0];
  grantProgressBar.value = grantHealth;

  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;
    var message = `The user has 1 victory`
    if (wins > 1) {
    var message = `The user has 1 victory`
    var grantProgressBar = document.getElementsByClassName("computer")[0];
    grantProgressBar.value = grantHealth;
    var winProgressBar = document.getElementsByClassName('playerWins')[0];
    winProgressBar.value = wins;
    }
  }
}

function startGame() {
  var user = prompt('Please enter your name');
  setPlayerName(user);
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1
}

// function startCombat(user) {
//   var userHealth = 40;
//   var grantHealth = 10;
//   var wins = 0;
//
//   while (wins < 3 && userHealth > 0) {
//     var attack = prompt("Do you want to attack or quit?");
//     if (attack === 'quit') {
//       console.log(`The user has ended the game`);
//       return;
//     }

  document.getElementsByClassName('playerHealth')[0]


    //   if (grantHealth <= 0) {
    //     wins++;
    //     grantHealth = 10;
    //     var message = `The user has 1 victory`
    //     if (wins > 1) {
    //       var message = `The user has 1 victory`
    //     }
    //   }
    // }
