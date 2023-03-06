btn = document.getElementById("submit");
btn.addEventListener("click", add_product);
submit_btn = document.getElementById("loginButton");
submit_btn.addEventListener("click", submitLogin);
container = document.getElementsByClassName("container")[0];
_login = document.getElementsByClassName("login")[0];

function submitLogin() {
  let admin_email = document.getElementById("admin_email").value;
  let admin_password = document.getElementById("admin_password").value;
  let data = new FormData();
  data.append("admin_email", admin_email);
  data.append("admin_password", admin_password);

  axios({
    method: "post",
    url: "http://localhost/GroupProject-2/shoppero-backend/admin-login.php",
    data: data,
  })
    .then((result) => {
      console.log(result);
      if (result.data.status == "admin logged in") {
        _login.style.display = "none";
        container.style.display = "block";
        console.log("done");
      } else if (result.data.status == "admin does not exist") {
        alert("Admin does not exist");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function uploadFiles() {
  var files = document.getElementById("product-image").files;
  if (files.length == 0) {
    alert("Please first choose or drop any file(s)...");
    return;
  }
  var filenames = "";
  for (var i = 0; i < files.length; i++) {
    filenames += files[i].name + "\n";
  }
  alert("Selected file(s) :\n____________________\n" + filenames);
}
function validateForm() {
  let product_name = document.getElementById("product-name").value;
  let description = document.getElementById("description").value;
  let product_image = document.getElementById("product-image").value;
  let product_size = document.getElementById("size").value;
  let product_color = document.getElementById("color").value;
  let product_material = document.getElementById("material").value;
  let price = document.getElementById("price").value;
  let main_color = document.getElementById("main-color").value;

  if (
    product_name == "" ||
    description == "" ||
    product_image == "" ||
    product_size == "" ||
    product_color == "" ||
    product_material == "" ||
    price == "" ||
    main_color == ""
  ) {
    alert("All fields are required!");
    return false;
  }
  return true;
}
function add_product() {
  if (validateForm()) {
    let product_name = document.getElementById("product_name").value;
    let for_men = document.getElementById("category").value;
    let subcategory = document.getElementById("subcategory").value;
    let brand = document.getElementById("brand").value;
    let description = document.getElementById("description").value;
    let product_image = document.getElementById("product_image").value;
    let product_size = document.getElementById("size").value;
    let product_color = document.getElementById("color").value;
    let product_material = document.getElementById("material").value;
    let price = document.getElementById("price").value;
    let main_color = document.getElementById("main_color").value;

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
      url: "http://localhost/GroupProject-2/shoppero-backend/insert-product.php",
      data: data,
    })
      .then((result) => {
        console.log(result);
        if (result.data.status == "added") {
          alert("product added successfully");
        } else if (result.data.status == "exists") {
          alert("Product already exists!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

table_users = document.getElementById("table-users");

axios
  .get(`http://localhost/GroupProject-2/shoppero-backend/display-users.php`)
  .then((res) => {
    console.log(res.data);
    display_users(res.data);
  })
  .catch((err) => {
    console.error(err);
  });
let display_users = (data) => {
  data.forEach((element) => {
    console.log(element);
    table_users.innerHTML += `<tr>
          <td>${element.id}</td>
          <td>${element.first_name}</td>
          <td>${element.last_name}</td>
          <td>${element.email}</td>
          <td>${element.phone_number}</td>
          <td>${element.shipping_address}</td>
          </tr>`;
  });
};
