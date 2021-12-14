var BotInput = 0;
var Outcome; //0 je tie, 1 je player win, 2 je computer win

var Rock = 0;
var Paper = 1;
var Scissors = 2;

function Logic(userInput) {
  BotInput = Math.floor(Math.random() * 3); //random številko dobi bot od 0 do 2

  if (userInput == Rock) {
    if (BotInput == Rock) {
      document.getElementById("Result").innerHTML =
        "TIE <br><br> Rock vs. Rock";
      Outcome = 0;
    }
    if (BotInput == Paper) {
      document.getElementById("Result").innerHTML =
        "OPPONENT WINS <br><br> Rock vs. PAPER";
      Outcome = 2;
    }
    if (BotInput == Scissors) {
      document.getElementById("Result").innerHTML =
        "PLAYER WINS <br><br> Rock vs. Scissors";
      Outcome = 1;
    }
  }
  if (userInput == Paper) {
    if (BotInput == Rock) {
      document.getElementById("Result").innerHTML =
        "PLAYER WINS <br><br> Paper vs. Rock";
      Outcome = 1;
    }
    if (BotInput == Paper) {
      document.getElementById("Result").innerHTML =
        "TIE <br><br> Paper vs. Paper";
      Outcome = 0;
    }
    if (BotInput == Scissors) {
      document.getElementById("Result").innerHTML =
        "OPPONENT WINS <br><br> Paper vs. Scissors";
      Outcome = 2;
    }
  }
  if (userInput == Scissors) {
    if (BotInput == Rock) {
      document.getElementById("Result").innerHTML =
        "OPPONENT WINS <br><br> Scissors vs. Rock";
      Outcome = 2;
    }
    if (BotInput == Paper) {
      document.getElementById("Result").innerHTML =
        "PLAYER WINS <br><br> Scissors vs. Paper";
      Outcome = 1;
    }
    if (BotInput == Scissors) {
      document.getElementById("Result").innerHTML =
        "TIE <br><br> Scissors vs. Scissors";
      Outcome = 0;
    }
  }

  ResultCounter(Outcome);
}

var ResultBot = 0;
var ResultPlayer = 0;

function ResultCounter(Outcome) {
  if (Outcome == 0) {
    document.getElementById("PlayerWins").innerHTML = ResultPlayer;
    document.getElementById("ComputerWins").innerHTML = ResultBot;
  }

  if (Outcome == 1) {
    //je player win
    ResultPlayer++;
    document.getElementById("PlayerWins").innerHTML = ResultPlayer;
    document.getElementById("ComputerWins").innerHTML = ResultBot;
  }

  if (Outcome == 2) {
    //je Robot win
    ResultBot++;
    document.getElementById("PlayerWins").innerHTML = ResultPlayer;
    document.getElementById("ComputerWins").innerHTML = ResultBot;
  }
}
