const right_btn_1 = document.getElementById("scroll-right-1");
const left_btn_1 = document.getElementById("scroll-left-1");
const right_btn_2 = document.getElementById("scroll-right-2");
const left_btn_2 = document.getElementById("scroll-left-2");
const right_btn_3 = document.getElementById("scroll-right-3");
const left_btn_3 = document.getElementById("scroll-left-3");
const down_btn = document.getElementById("scroll-down");
//category-1
var right_clicks_1 = 0;
var left_clicks_1 = 0;
left_btn_1.style.visibility = "hidden";
right_btn_1.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft += 300;
  left_btn_1.style.visibility = "visible";
  right_clicks_1++;
  left_clicks_1--;
  if (right_clicks_1 > 1) right_btn_1.style.visibility = "hidden";
  event.preventDefault();
});
right_btn_1.addEventListener("mouseover", function (event) {
  right_btn_1.style.cursor = "pointer";
});
left_btn_1.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft -= 300;
  right_btn_1.style.visibility = "visible";
  left_clicks_1++;
  right_clicks_1--;
  if (left_clicks_1 == 0) left_btn_1.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_1.addEventListener("mouseover", function (event) {
  left_btn_1.style.cursor = "pointer";
});
//category-2
var right_clicks_2 = 0;
var left_clicks_2 = 0;
left_btn_2.style.visibility = "hidden";
right_btn_2.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft += 300;
  left_btn_2.style.visibility = "visible";
  right_clicks_2++;
  left_clicks_2--;
  if (right_clicks_2 > 1) right_btn_2.style.visibility = "hidden";
  event.preventDefault();
});
right_btn_2.addEventListener("mouseover", function (event) {
  right_btn_2.style.cursor = "pointer";
});
left_btn_2.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft -= 300;
  right_btn_2.style.visibility = "visible";
  left_clicks_2++;
  right_clicks_2--;
  if (left_clicks_2 == 0) left_btn_2.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_2.addEventListener("mouseover", function (event) {
  left_btn_2.style.cursor = "pointer";
});
//category-3
var right_clicks_3 = 0;
var left_clicks_3 = 0;
left_btn_3.style.visibility = "hidden";
right_btn_3.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft += 300;
  left_btn_3.style.visibility = "visible";
  right_clicks_3++;
  left_clicks_3--;
  if (right_clicks_3 > 1) right_btn_3.style.visibility = "hidden";
  event.preventDefault();
});
right_btn_3.addEventListener("mouseover", function (event) {
  right_btn_3.style.cursor = "pointer";
});
left_btn_3.addEventListener("click", function (event) {
  const content = document.querySelector("#items");
  content.scrollLeft -= 300;
  right_btn_3.style.visibility = "visible";
  left_clicks_3++;
  right_clicks_3--;
  if (left_clicks_3 == 0) left_btn_3.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_3.addEventListener("mouseover", function (event) {
  left_btn_3.style.cursor = "pointer";
});
//down
down_btn.addEventListener("click", function (event) {
  window.scrollBy(0, 700);
});
down_btn.addEventListener("mouseover", function (event) {
  down_btn.style.cursor = "pointer";
});
