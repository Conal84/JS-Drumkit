"use strict";

// A function to play key sound and add playing class
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  key.classList.add("playing");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

// Remove playing class on transition end
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if not a transform event
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

// Get all keys and add transition end event listeners
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
