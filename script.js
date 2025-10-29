function showPay() {
  hideAll();
  document.getElementById("pay-page").classList.remove("hidden");
}

function showMenu() {
  hideAll();
  document.getElementById("menu-page").classList.remove("hidden");
}

function showOwner() {
  hideAll();
  document.getElementById("owner-page").classList.remove("hidden");
}

function showMusic() {
  hideAll();
  document.getElementById("music-page").classList.remove("hidden");
}

function goHome() {
  hideAll();
  document.getElementById("main-menu").classList.remove("hidden");
}

function hideAll() {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
}

function playMusic(url) {
  const player = document.getElementById("player");
  player.src = url;
  player.hidden = false;
  player.play();
}

function stopMusic() {
  const player = document.getElementById("player");
  player.pause();
  player.currentTime = 0;
  player.hidden = true;
}
