// const flipCard1 = document.getElementById("flip-card-1");
// const card1 = flipCard1.querySelector(".card");

// const flipCard2 = document.getElementById("flip-card-2");
// const card2 = flipCard2.querySelector(".card");

// flipCard1.addEventListener("click", (e) => {
//   card1.classList.toggle("back");
// });

// flipCard2.addEventListener("click", (e) => {
//   console.log("flipped");
//   card2.classList.toggle("back");
// });

// let flip = document.querySelector(".flip");
// let front = document.querySelector(".project-front");
// let back = document.querySelector(".project-back");

// flip.addEventListener("click", (e) => {
//   console.log("f");
//   front.classList.toggle("project-back");
// });

let flip = document.querySelector(".flip");
let card = flip.querySelector(".project-front");

flip.addEventListener("click", (e) => {
  card.classList.toggle("project-back");

  if (card.className === "project-front project-back") {
    console.log("back");
    const helloDiv = document.createElement("div");
    helloDiv.textContent = "hello";

    const periodDiv = document.createElement("div");
    periodDiv.textContent = "기간";

    const partDiv = document.createElement("div");
    partDiv.textContent = "한 파트";

    const projectLinkDiv = document.createElement("div");
    const link = document.createElement("a");
    link.href = "https://wkqkrla12.github.io/portfolio/";
    projectLinkDiv.appendChild(link);

    // Append the created elements to the card's back side
    project - front.appendChild(helloDiv);
    back.appendChild(periodDiv);
    back.appendChild(partDiv);
    back.appendChild(projectLinkDiv);
  }
});
