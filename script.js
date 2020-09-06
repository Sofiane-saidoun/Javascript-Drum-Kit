function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");
  key.addEventListener("transitionend", function () {
    key.classList.remove("play");
  });
}

window.addEventListener("keydown", playSound);
