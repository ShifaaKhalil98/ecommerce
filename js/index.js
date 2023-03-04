const right_btn = document.getElementById("scroll-right");
const left_btn = document.getElementById("scroll-left");
var right_clicks = 0;
var left_clicks = 0;
left_btn.style.visibility = "hidden";
// const leftBtn = document.querySelector(".scroll-left");
// left_btn.disabled = true;
right_btn.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft += 300;
  left_btn.style.visibility = "visible";
  right_clicks++;
  left_clicks--;
  if (right_clicks > 1) right_btn.style.visibility = "hidden";
  event.preventDefault();
});

left_btn.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft -= 300;
  right_btn.style.visibility = "visible";
  left_clicks++;
  right_clicks--;
  if (left_clicks == 0) left_btn.style.visibility = "hidden";
  event.preventDefault();
});
