//Globals
var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var healCount = 2;


// Hook up the start button
var startButton = document.getElementById("startButton");
startButton.onclick = function() {
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
var attackButton = document.getElementById("attackButton");
attackButton.onclick = attack;

function attack() {
  userHealth -= getDamage();
  grantHealth -= getDamage();
  var textArea = document.getElementById('textArea');

  function updateArea(theUpdate) {
    textArea.innerText = theUpdate;
  }
  theUpdate = (`The user has ${userHealth} health remaining. Grant has ${grantHealth} health remaining.`);
  updateArea(theUpdate);
  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;
  var grantProgressBar = document.getElementsByClassName("computer")[0];
  grantProgressBar.value = grantHealth;

  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;
    var textArea = document.getElementById('textArea');

    function updateArea(theUpdate) {
      textArea.innerText = theUpdate;
    }
    theUpdate = (`The user has ${wins} victory.`);
    updateArea(theUpdate);
    if (wins > 1) {
      var textArea = document.getElementById('textArea');

      function updateArea(theUpdate) {
        textArea.innerText = theUpdate;
      }
      theUpdate = (`Grant has ${wins} victory`);
      updateArea(theUpdate);
      var grantProgressBar = document.getElementsByClassName("computer")[0];
      grantProgressBar.value = grantHealth;
      var winProgressBar = document.getElementsByClassName('playerWins')[0];
      winProgressBar.value = wins;
    }
    if (userHealth < 1){
  document.getElementById("attackButton").style.display = "none";
  document.getElementById("healButton").style.display = "none";
  theUpdate = ('The user has lost the game.');
  updateArea(theUpdate);
}
  }
}

//Hook up Heal healButton
var healButton = document.getElementById('healButton');
healButton.onclick = heal;

function heal() {
  healCount--;
  userHealth += (Math.floor(Math.random() * 10) + 1);
  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;
  var heals = document.getElementsByClassName('playerHealCount')[0];
  heals.value = healCount;
}

//quit

var quitButton = document.getElementById('quitButton');
quitButton.onclick = quit;

//text
var textArea = document.getElementById('textArea');

function updateArea(theUpdate) {
  textArea.innerText = theUpdate
}


function startGame() {
  var user = prompt('Please enter your name');
  setPlayerName(user);
}

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}

function quit(){
  var status = document.getElementById('quitButton');
  quitButton.onclick = quit;
  var textArea = document.getElementById('textArea');
  function updateArea (theUpdate){
        textArea.innerText = theUpdate;
  }
  theUpdate = (`The user has ended the game.`);
  updateArea(theUpdate);
  document.getElementById("attackButton").style.display = "none";
  document.getElementById("healButton").style.display = "none";


}
