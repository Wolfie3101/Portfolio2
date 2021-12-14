/**
 * začetni vari
 * barve,
 * pattern za igro in igralca,
 * bool če se "igra",
 * na kerem levelu smo
 */

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

var playing = false;
var levelVal = 0;

/**
 * če kjerkoli v dokumentu stisne kaki key:
 * če je playing na false, naj gre v next sequence,
 * pa naj da bool na true, da se ve da se igra
 */
$(document).keypress(function () {
  if (!playing) {
    nextSequence();
    playing = true;
  }
});

/**
 * ta jq deluje na vse classe ".btn", in ko user klikne na njih:
 * naj se izbrana barva shrani v userChosenColour ter pushne v userClickedPattern
 * oz. naj vzame barvo tega (skozi id) ter naj ga shrani v pattern
 * naj se igra zvok in pokaže animacija klika,
 * potem pa naj preveri če je odgovor pravilen
 *
 * PAZI
 * argument je userClickedPattern.length - 1
 * to pomeni naj da parameter številko, kolko je dolgi ta pattern - 1
 * -1 pa za to, ker se arrayi začnjo z 0
 *
 */

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  /**
   * problem je bil v argumentu currentLevel
   * jaz sem na začetku podaval levelVal, ker je končni vedno isti
   * ampak je fora da to vsakič preveri ko ti stisneš, zato moreš dat dolžino -1, da pol on sproti preverja če je vse kul
   * jaz sem mislo naret tako da če je pattern narobe, da komaj nakonci ti pove prav/narobe
   */

  //preveri če se odgovor sklada z patternom (pazi ===);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //IF T: pol pa naj preveri če je že konec patterna, da lahko naslednjega da,
    // če ne pa tak čaka uporabnika da spet stisne, da lahko preveri
    if (userClickedPattern.length === gamePattern.length) {
      //naj da čez en cajt next sequence, ne takoj
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
    // v elsu pa naredi wrong screen, sound pa title, ter naj se
    // program že pripravi za novo igro (start over)
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

//standard sound play, v new je za to da lahko se začne novi sound preden se en konča

function playSound(name) {
  var snd = new Audio();
  var path = "sounds/" + name + ".mp3";
  snd.src = path;
  snd.play();
}

//da zgleda kot da je stisneš

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

/**
 * tukaj pa nastavimo userClickedPattern na 0, za to ker more spet znova delat, drugače bi samo ponavljo
 * level se poveča, napiše, ter se zbere random barva spet, ter se jo da v gamePattern
 *
 * naredimo še samo fadein/fadeout da se vidi kaj je bilo izbrano ter se igra appropriate sound
 */

function nextSequence() {
  userClickedPattern = [];
  levelVal++;

  $("#level-title").html("Level " + levelVal);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

//tukaj pa samo nastavimo level spet na 0, spraznimo pattern ter damo da ne igramo več
function startOver() {
  levelVal = 0;
  gamePattern = [];
  playing = false;
}
