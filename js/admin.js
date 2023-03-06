btn = document.getElementById("submit");
btn.addEventListener("click", add_product);
submit_btn = document.getElementById("submit");
submit_btn.addEventListener("click", submitLogin);
container = document.getElementsByClassName("container")[0];
_login = document.getElementsByClassName("login")[0];

function submitLogin() {
  if (validateForm()) {
    _login.style.display = "none";
    container.style.display = "block";

    let admin_email = document.getElementById("admin_email").value;
    let admin_password = document.getElementById("admin_password").value;
    let data = new FormData();
    data.append("admin_email", admin_email);
    data.append("admin_password", admin_password);
    axios({
      method: "post",
      url: "http://localhost/shoppero_backend/signup.php",
      data: data,
    })
      .then((result) => {
        console.log(result);
        if (result.data.status == "user added") {
          login_status.style.display = "none";
          logged_in.style.display = "inline-block";
          welcome.innerHTML = "Welcome, " + result.data.first_name;
          closeForm();
        } else if (result.data.status == "password not validated") {
          alert("Could not validate password!");
        } else if (result.data.status == "email already exists") {
          alert("This email already exists, try logging in instead");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function submitLogin() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let status = document.getElementById("status");

  let data = new FormData();
  data.append("email", email);
  data.append("password", password);

  console.log("yea");

  axios({
    method: "post",
    url: "http://localhost/shoppero_backend/login.php",
    data: data,
  })
    .then((result) => {
      console.log(result);
      if (result.data.status == "user logged in") {
        login_status.style.display = "none";
        logged_in.style.display = "inline-block";
        welcome.innerHTML = "Welcome, " + result.data.first_name;
        closeForm();
      } else if (result.data.status == "password not validated") {
        alert("Could not validate password!");
      } else if (result.data.status == "email already exists") {
        alert("This email already exists, try logging in instead");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
function validateForm() {
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var error = document.getElementById("errormessage");
  var confirm_password = document.getElementById("confirmPassword");
  var email = document.getElementById("email");
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  error.innerHTML = "";

  if (firstname.value.length == 0) {
    error.innerHTML = "Please provide your first name!";
    firstname.classList.add("errorField");
    return false;
  }
  if (lastname.value.length == 0) {
    error.innerHTML = "Please provide your last name!";
    lastname.classList.add("errorField");
    return false;
  }
  if (!email.value.match(email_regex) || email.value.length == 0) {
    error.innerHTML = "Please provide a valid email!";
    email.classList.add("errorField");
    return false;
  }
  if (!password_validated) {
    error.innerHTML = "Please fix your password!";
    password.classList.add("errorField");
    return false;
  }
  if (password.value != confirm_password.value) {
    error.innerHTML = "Passwords don't match!";
    password.classList.add("errorField");
    confirm_password.classList.add("errorField");
    return false;
  }
  return true;
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
    let product_name = document.getElementById("product-name").value;
    let for_men = document.getElementById("category").value;
    let subcategory = document.getElementById("subcategory").value;
    let brand = document.getElementById("brand").value;
    let description = document.getElementById("description").value;
    let product_image = document.getElementById("product-image").value;
    let product_size = document.getElementById("size").value;
    let product_color = document.getElementById("color").value;
    let product_material = document.getElementById("material").value;
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
      url: "http://localhost/GroupProject-2/shoppero-backend/insert-product.php",
      data: data,
    })
      .then((result) => {
        console.log(result);
        if (result.data.status == "added") {
          alert("product added successfully");
          closeForm();
        } else if (result.data.status == "exists") {
          alert("Product already exists!");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

// axios({
//   method: "POST",
//   url: "http://localhost/GroupProject-2/shoppero-backend/display-users.php"
// }).then((result) => {
//   console.log(result);
// });

// function display_users(){
// table_users = document.getElementById("table-users");
// for (//////////////) {
//   e = document.createElement("tr");
//   for(i = 0; i < 7; i++){
//     d = document.createElement("td");
//     d.innerText = /////////////////;
//     table_users.appendChild(e);
//     e.appendChild(d);
//   }
// }
// axios({
//   method: "post",
//   url: "http://localhost/GroupProject-2/shoppero-backend/display-users.php",
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

// axios({
//   method: "POST",
//   url: "http://localhost/GroupProject-2/shoppero-backend/display-users.php",
//   data: data,
// })
//   .then((result) => {
//     console.log(result);
//     if (result.data.status == "exist") {
//       alert("displayed");
//       closeForm();
//     } else if (result.data.status == "empty") {
//       alert("empty");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });
