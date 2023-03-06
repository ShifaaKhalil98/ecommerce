var first_name = document.getElementById("first-name");
var last_name = document.getElementById("last-name");
var phone_number = document.getElementById("phone-number");
var email = document.getElementById("email");
var shipping_address = document.getElementById("shipping-address");
var edit_btn = document.getElementById("edit");
var btn_click = 0;
edit_btn.addEventListener("click", function () {
  if (btn_click == 0) {
    first_name.removeAttribute("readonly");
    last_name.removeAttribute("readonly");
    phone_number.removeAttribute("readonly");
    email.removeAttribute("readonly");
    shipping_address.removeAttribute("readonly");
    edit_btn.innerHTML = "save";
    first_name.style.border = "2px solid black";
    last_name.style.border = "2px solid black";
    phone_number.style.border = "2px solid black";
    email.style.border = "2px solid black";
    shipping_address.style.border = "2px solid black";
    btn_click++;
  } else {
    first_name.setAttribute("readonly", true);
    last_name.setAttribute("readonly", true);
    phone_number.setAttribute("readonly", true);
    email.setAttribute("readonly", true);
    shipping_address.setAttribute("readonly", true);
    edit_btn.innerHTML = "edit";
    first_name.style.border = "none";
    last_name.style.border = "none";
    phone_number.style.border = "none";
    email.style.border = "none";
    shipping_address.style.border = "none";
    btn_click = 0;
  }
});

// axios({
//   method: "post",
//   url: "http://localhost/shoppero-backend/admin.php",
//   data: data,
// })
//   .then((result) => {
//     console.log(result);
//     if (result.data.status == "exist") {
//       ////////////////
//       closeForm();
//     } else if (result.data.status == "empty") {
//       alert("No users to display!");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// }
// }
// }
