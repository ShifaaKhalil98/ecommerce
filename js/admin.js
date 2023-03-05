var _name = document.getElementById("name");
var phone_number = document.getElementById("phone-number");
var email = document.getElementById("email");
var edit_btn = document.getElementById("edit");
var btn_click = 0;
edit_btn.addEventListener("click", function () {
  _name.removeAttribute("readonly");
  phone_number.removeAttribute("readonly");
  email.removeAttribute("readonly");
  edit_btn.innerHTML = "save";
  _name.style.border = "2px solid black";
  phone_number.style.border = "2px solid black";
  email.style.border = "2px solid black";
  if (btn_click == 0) btn_click++;
  else {
    _name.setAttribute("readonly", true);
    phone_number.setAttribute("readonly", true);
    email.setAttribute("readonly", true);
    edit_btn.innerHTML = "edit";
    _name.style.border = "none";
    phone_number.style.border = "none";
    email.style.border = "none";
    btn_click = 0;
  }
});
