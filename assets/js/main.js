var diceValues = [6, 6, 6, 6, 6];
var diceHold = [false, false, false, false, false];
var rollNumber = 0;
var turnNumber = 0;

var scoreSheet = {
  '1s': 0,
  '2s': 0,
  '3s': 0,
  '4s': 0,
  '5s': 0,
  '6s': 0,
  'threeOfKind': 0,
  'fourOfKind': 0,
  'straight': 0,
  'fullHouse': 0,
  'yeetzah': 0,
  'chance': 0
};

function writeDice() {
  for (var i = 0; i <= 4; i++) {
    var die = document.getElementById('die' + i + 'Value');
    die.innerHTML = diceValues[i];
  }
};

function rollDice() {
  if (rollNumber <= 2) {
    for (var i = 0; i <= 4; i++) {
      isHold = document.getElementById('die' + i).checked;
      if (!isHold) {
        diceValues[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    rollNumber++;
  }
  writeDice();
}

function scoreSingleNumber(number) {
  console.log('number: ' + number);
  for (var i = 0; i <= 4; i++) {
    if (diceValues[i] == number) {
      scoreSheet[number + 's'] += number;
    }
  }
  var result = document.getElementById(number);
  result.innerHTML = scoreSheet[number + 's'];
  rollNumber = 0;
  turnNumber++;
}

function threeOfKind() {
  var counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }
  var score = 0;
  var hasThree = false;
  for (var i = 0; i <= 4; i++) {
    counts[diceValues[i]]++;
    score += diceValues[i];
    if (counts[diceValues[i]] >= 3) {
      hasThree = true;
    }
  }
  if (hasThree) {
    scoreSheet['threeOfKind'] = score;
  } else {
    scoreSheet['threeOfKind'] = 0;
  }
  var result = document.getElementById('threeOfKindScore');
  result.innerHTML = scoreSheet['threeOfKind'];
}

//Initialization
window.onload = function(){
  writeDice();
  var rollButton = document.getElementById('roll');
  rollButton.addEventListener('click', rollDice);
  
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');
  var button4 = document.getElementById('button4');
  var button5 = document.getElementById('button5');
  var button6 = document.getElementById('button6');

  button1.addEventListener('click', function(){scoreSingleNumber(1)});
  button2.addEventListener('click', function(){scoreSingleNumber(2)});
  button3.addEventListener('click', function(){scoreSingleNumber(3)});
  button4.addEventListener('click', function(){scoreSingleNumber(4)});
  button5.addEventListener('click', function(){scoreSingleNumber(5)});
  button6.addEventListener('click', function(){scoreSingleNumber(6)});  
}

