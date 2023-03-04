const right_btn = document.getElementById("scroll-right");
const left_btn = document.getElementById("scroll-left");
// const leftBtn = document.querySelector(".scroll-left");
// left_btn.disabled = true;
right_btn.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft += 300;
  //   left_btn.disabled = false;
  event.preventDefault();
});

left_btn.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft -= 300;
  //   left_btn.disabled = false;
  event.preventDefault();
});
