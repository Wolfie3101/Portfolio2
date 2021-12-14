//narediš new pa mu daš value sounda da narediš da se lahko izvede medtem ko še drugi igra
//če daš samo audio pol počaka

function playMusic(val) {
  switch (val) {
    case "w":
      var snd = new Audio();
      snd.src = "sounds/crash.mp3";
      snd.play();

      break;
    case "a":
      var snd = new Audio();
      snd.src = "sounds/kick.mp3";
      snd.play();

      break;
    case "s":
      var snd = new Audio();
      snd.src = "sounds/snare.mp3";
      snd.play();
      break;
    case "d":
      var snd = new Audio();
      snd.src = "sounds/tom-1.mp3";
      snd.play();
      break;
    case "j":
      var snd = new Audio();
      snd.src = "sounds/tom-2.mp3";
      snd.play();
      break;
    case "k":
      var snd = new Audio();
      snd.src = "sounds/tom-3.mp3";
      snd.play();
      break;
    case "l":
      var snd = new Audio();
      snd.src = "sounds/tom-4.mp3";
      snd.play();
      break;
    case "m":
      var snd = new Audio();
      snd.src = "sounds/hi-hat.mp3";
      snd.play();

      break;
    default:
    // code block
  }
  btnAnimation(val);
}

function btnAnimation(key) {
  //najde query . + key(key je lahko wasdjkl), gre v classlist, doda pressed, kar pa je v cssju style
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + key).classList.remove("pressed");
  }, 150);
}

//to še bi pomoje lahko kak skrajšo tak da bi pogledo kaj je v buttoni pa to passal kot argument v funkcijo
document.querySelector(".w").addEventListener("click", function () {
  playMusic("w");
});
document.querySelector(".a").addEventListener("click", function () {
  playMusic("a");
});
document.querySelector(".s").addEventListener("click", function () {
  playMusic("s");
});
document.querySelector(".d").addEventListener("click", function () {
  playMusic("d");
});
document.querySelector(".j").addEventListener("click", function () {
  playMusic("j");
});
document.querySelector(".k").addEventListener("click", function () {
  playMusic("k");
});
document.querySelector(".l").addEventListener("click", function () {
  playMusic("l");
});
document.querySelector(".m").addEventListener("click", function () {
  playMusic("m");
});

//keydown, pol pa v function daš argument, kateri pa ma pol stvari kot npr. key kaj je pritisno. toti false je pa to če je in focus
window.addEventListener(
  "keydown",
  function (e) {
    playMusic(e.key);
  },
  false
);
