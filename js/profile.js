var first_name = document.getElementById("first-name");
var last_name = document.getElementById("last-name");
var phone_number = document.getElementById("phone-number");
var email = document.getElementById("email");
var shipping_address = document.getElementById("shipping-address");
var edit_btn = document.getElementById("edit");
var btn_click = 0;
edit_btn.addEventListener("click", edit_user);
function edit_user() {
  if (btn_click == 0) {
    first_name.removeAttribute("readonly");
    last_name.removeAttribute("readonly");
    phone_number.removeAttribute("readonly");
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
    shipping_address.setAttribute("readonly", true);
    edit_btn.innerHTML = "edit";
    first_name.style.border = "none";
    last_name.style.border = "none";
    phone_number.style.border = "none";
    email.style.border = "none";
    shipping_address.style.border = "none";
    btn_click = 0;

    let data = new FormData();
    data.append("first_name", first_name.value);
    data.append("last_name", last_name.value);
    data.append("email", email.value);
    if(phone_number.value.length > 0) {
      data.append("phone_number", phone_number.value);
    }
    if(shipping_address.value.length > 0) {
      data.append("shipping_address", shipping_address.value);
    }

    axios({
      method: "post",
      url: "http://localhost/shoppero_backend/edit-profile.php",
      data: data,
    })
      .then((result) => {
        console.log(result);
        if (result.data.status == "edited")
          alert("Profile edited successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

axios({
  method: "get",
  url: "http://localhost/shoppero_backend/get_user.php",
})
  .then((result) => {
    console.log(result.data)
    first_name.value = result.data.first_name
    last_name.value = result.data.last_name
    email.value = result.data.email
    if(result.data.phone != null) {
      phone_number.value = result.data.phone
    }
    if(result.data.shipping != null) {
      shipping_address.value = result.data.shipping
    }
  })
  .catch((err) => {
    console.error(err);
  });
// }
// }
// }
