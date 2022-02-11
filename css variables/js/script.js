const input = document.querySelectorAll(".container input");

function menanganiPembaruan() {
  const akhiran = this.dataset.sizing || "px";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + akhiran);
}
function menanganiPembaruann() {
  const akhiran = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + akhiran);
}

input.forEach((input) => input.addEventListener("change", menanganiPembaruann));

input.forEach((input) => input.addEventListener("mousemove", menanganiPembaruan));
