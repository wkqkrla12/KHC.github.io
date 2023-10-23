const flipCard1 = document.getElementById("flip-card-1");
const card1 = flipCard1.querySelector(".card");

const flipCard2 = document.getElementById("flip-card-2");
const card2 = flipCard2.querySelector(".card");

flipCard1.addEventListener("click", (e) => {
  card1.classList.toggle("back");
});

flipCard2.addEventListener("click", (e) => {
  console.log("flipped");
  card2.classList.toggle("back");
});
