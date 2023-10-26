let flip = document.querySelector(".flip");
let card = flip.querySelector(".project-front");
let item = document.querySelector(".projects-item");
let back = null;
let br = document.createElement("br");

flip.addEventListener("click", (e) => {
  card.classList.toggle("project-back");

  if (card.classList.contains("project-back")) {
    console.log("back");

    if (!back) {
      // 역면(back)이 아직 추가되지 않았을 때만 추가합니다
      back = document.createElement("div");
      back.className = "project-back";

      let projectDiv = document.createElement("div");
      projectDiv.textContent = "Mechoori 메뉴 추천 리스트\n\n";
      projectDiv.style.width = "100%";
      projectDiv.style.fontSize = "18px";
      projectDiv.style.fontWeight = "700";
      projectDiv.style.color = "#4c4c6d";
      projectDiv.style.whiteSpace = "pre-line";

      let periodDiv = document.createElement("div");
      periodDiv.textContent = "#기간 \n 23.04.24 ~ 23.07.19\n\n ";
      periodDiv.style.width = "100%";
      periodDiv.style.fontSize = "1em";
      periodDiv.style.whiteSpace = "pre-line";

      let techDiv = document.createElement("div");
      techDiv.textContent = "#Tech\n :: Java, JavaScript, Html, Css\n\n";
      techDiv.style.width = "100%";
      techDiv.style.fontSize = "1em";
      techDiv.style.whiteSpace = "pre-line";

      let partDivWrap = document.createElement("div");
      partDivWrap.textContent = "#My Work \n";
      partDivWrap.style.width = "100%";
      partDivWrap.style.fontSize = "1em";

      let partDiv = document.createElement("div");
      partDiv.textContent =
        ":: 카카오 오픈 API\n :: 로그인 페이지 구현 및 설계 \n :: Map 구현 및 설계 \n :: 회원 가입 시스템 구현\n\n";
      partDiv.style.width = "100%";
      partDiv.style.fontSize = "1em";
      partDiv.style.whiteSpace = "pre-line";

      let projectLinkDiv = document.createElement("div");
      let link = document.createElement("a");
      link.href = "https://wkqkrla12.github.io/portfolio/";
      projectLinkDiv.style.width = "290px";
      projectLinkDiv.style.height = "30px";
      projectLinkDiv.style.position = "relative";
      projectLinkDiv.style.whiteSpace = "pre-line";

      link.style.position = "absolute";
      link.style.backgroundColor = "#ffc3c3";
      link.style.borderRadius = "12px";
      link.style.color = "#fff";
      link.style.cursor = "pointer";
      link.style.marginRight = "10px";
      link.style.padding = "4px 8px";
      link.style.width = "40%";
      link.style.height = "70%";
      link.style.textAlign = "center";
      link.style.justifyItems = "center";
      link.textContent = "Source Code";

      projectLinkDiv.appendChild(link);

      back.appendChild(projectDiv);
      back.appendChild(periodDiv);
      back.appendChild(techDiv);
      back.appendChild(partDivWrap);
      back.appendChild(partDiv);
      back.appendChild(projectLinkDiv);

      item.appendChild(back);
    }
  } else if (back) {
    item.removeChild(back);
    back = null;
  }
});
