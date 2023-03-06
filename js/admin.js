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
