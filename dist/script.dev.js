"use strict";

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector(".key[data-key=\"".concat(e.keyCode, "\"]"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");
  key.addEventListener("transitionend", function () {
    key.classList.remove("play");
  });
}

window.addEventListener("keydown", playSound);