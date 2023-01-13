//for the carrousel os songs
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");

let carouselWidth = document.querySelector(".carousel-container").offsetWidth;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(".carousel-container").offsetWidth;
});

let index = 0;

next.addEventListener("click", () => {
  index++;
  prev.classList.add("show");
  track.style.transform = `translateX(-${index * carouselWidth}px)`;

  if (track.offsetWidth - index * carouselWidth < carouselWidth) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", () => {
  index--;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
});

//play-pause

const playBtns = document.querySelectorAll(".play-btn");

playBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(language);
    if (!btn.parentElement.classList.contains("pause")) {
      btn.parentElement.classList.add("pause");
      // btn.innerText = "Pause";
      if (language === "nl") {
        btn.innerText = "Pauze";
      } else if (language === "en") {
        btn.innerText = "Pause";
      } else if (language === "it") {
        btn.innerText = "Pausa";
      }
      playBtns[1].parentElement.childNodes[7].play();

    } else {
      btn.parentElement.classList.remove("pause");
      //btn.innerText = "Play";
      if (language === "nl") {
        btn.innerText = "Toneelstuk";
      } else if (language === "en") {
        btn.innerText = "Play";
      } else if (language === "it") {
        btn.innerText = "Giocare";
      }
      playBtns[1].parentElement.childNodes[7].pause();
    }
  });
});
