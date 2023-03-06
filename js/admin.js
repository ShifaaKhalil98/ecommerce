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

function display_users(){
table_users = document.getElementById("table-users");
for (//////////////) {
  e = document.createElement("tr");
  for(i = 0; i < 7; i++){
    d = document.createElement("td");
    d.innerText = /////////////////;
    table_users.appendChild(e);
    e.appendChild(d);
  }
}
axios({
  method: "post",
  url: "http://localhost/shoppero-backend/admin.php",
  data: data,
})
  .then((result) => {
    console.log(result);
    if (result.data.status == "exist") {
      ////////////////
      closeForm();
    } else if (result.data.status == "empty") {
      alert("No users to display!");
    }
  })
  .catch((err) => {
    console.error(err);
  });
}
}
}

function add_product() {
  if (validateForm()) {
    let product_name = document.getElementById("product-name").value;
    let for_men = document.getElementById("category").value;
    let subcategory = document.getElementById("subcategory").value;
    let brand = document.getElementById("brand").value;
    let description = document.getElementById("description").value;
    let product_image = document.getElementById("product-image").value;
    let product_size = document.getElementById("product-size").value;
    let product_color = document.getElementById("product-color").value;
    let product_material = document.getElementById("product-material").value;
    let price = document.getElementById("price").value;
    let main_color = document.getElementById("main-color").value;

    let data = new FormData();
    data.append("product_name", product_name);
    data.append("price", price);
    data.append("discount", discount);
    data.append("for_men", for_men);
    data.append("subcategory", subcategory);
    data.append("brand", brand);
    data.append("description", description);
    data.append("product_image", product_image);
    data.append("size", product_size);
    data.append("main_color", main_color);
    data.append("product_color", product_color);
    data.append("product_material", product_material);

    axios({
      method: "post",
      url: "http://localhost/shoppero-backend/insert-product.php",
      data: data,
    })
      .then((result) => {
        console.log(result);
        if (result.data.status == "added") {
          alert("Product added successfully");
          closeForm();
        } else if (result.data.status == "exists") {
          alert("Product already exists");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function validateForm() {
  let product_name = document.getElementById("product-name").value;
  let description = document.getElementById("description").value;
  let product_image = document.getElementById("product-image").value;
  let product_size = document.getElementById("product-size").value;
  let product_color = document.getElementById("product-color").value;
  let product_material = document.getElementById("product-material").value;
  let price = document.getElementById("price").value;
  let main_color = document.getElementById("main-color").value;

  if (
    product_name.value.length == 0 ||
    description.value.length == 0 ||
    product_image.value.length == 0 ||
    product_size.value.length == 0 ||
    product_color.value.length == 0 ||
    product_material.value.length == 0 ||
    price.value.length == 0 ||
    main_color.value.length == 0
  ) {
    alert("All fields are required!");
    return false;
  }
  return true;
}
