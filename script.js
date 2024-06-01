const bossSliders = document.querySelector(".bossSliders");
const arrowBtns = document.querySelectorAll(".img-slider i");
const firstCardWidth = bossSliders.querySelector(".card").offsetWidth;
const bossSlidersChildrens = [...bossSliders.children];

// Here I made it so that you can scroll horizontally when hovering over the images
let isDragging = false,
  startX,
  startScrollLeft;

// Here it gets the number of cards that can fit in the bossSliders at once
let cardPerview = Math.round(bossSliders.offsetWidth / firstCardWidth);

bossSlidersChildrens
  .slice(-cardPerview)
  .reverse()
  .forEach((card) => {
    bossSliders.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

bossSlidersChildrens.slice(0, cardPerview).forEach((card) => {
  bossSliders.insertAdjacentHTML("beforeend", card.outerHTML);
});

//  Here I added an event listener for the arrows to scroll the carousel left or right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    bossSliders.scrollLeft +=
      btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  bossSliders.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = bossSliders.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  bossSliders.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  bossSliders.classList.remove("dragging");
};

const infiniteScroll = () => {
  if (bossSliders.scrollLeft === 0) {
    bossSliders.classList.add("no-transition");
    bossSliders.scrollLeft =
      bossSliders.scrollWidth - 2 * bossSliders.offsetWidth;
    bossSliders.classList.remove("no-transition");
  } else if (
    Math.ceil(bossSliders.scrollLeft) ===
    bossSliders.scrollWidth - bossSliders.offsetWidth
  ) {
    bossSliders.classList.add("no-transition");
    bossSliders.scrollLeft = bossSliders.offsetWidth;
    bossSliders.classList.remove("no-transition");
  }
};

bossSliders.addEventListener("mousedown", dragStart);
bossSliders.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
bossSliders.addEventListener("scroll", infiniteScroll);
