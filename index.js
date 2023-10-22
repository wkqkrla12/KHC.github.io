const flipCard1 = document.getElementById("flip-card-1");
const card1 = flipCard1.querySelector(".card");

const flipCard2 = document.getElementById("flip-card-2");
const card2 = flipCard2.querySelector(".card");

const sourceCodeButton = flipCard1.querySelector(".btn-group button");

// 카드를 클릭하여 flip되도록 하는 이벤트 핸들러
flipCard1.addEventListener('click', (e) => {
    // 클릭 이벤트가 버튼에서 발생한 경우 버블링을 중단하고 링크로 이동
    if (e.target === sourceCodeButton) {
        return;
    }

    card1.classList.toggle("back");
});

// a 태그 클릭 시 버블링 중단
sourceCodeButton.addEventListener('click', (e) => {
    e.stopPropagation(); // 버블링 중단
});


flipCard2.addEventListener('click', (e) => {
    console.log("flipped");
    card2.classList.toggle("back");
});



