const btn = document.getElementById("startBtn");
const jumpscare = document.getElementById("jumpscare");
const scream = document.getElementById("scream");

btn.addEventListener("click", () => {
  document.querySelector(".tela-inicial").style.display = "none";

  setTimeout(() => {
    jumpscare.classList.remove("hidden");
    scream.play();
  }, 3000);
});
