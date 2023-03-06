const items = document.getElementById('container')
let total_counter = 0
const total = document.getElementById('total')

axios({
    "method": "get",
    "url": "http://localhost/shoppero_backend/get_cart.php",
  }).then((result) => {
    console.log(result)
      result.data.forEach((item) => {
        items.innerHTML += `<div class="items">
        <div class="item_container">
          <img class="item_img" src="${item.image}" />
          <div class="name_description">
            <p class="item_name">${item.product_name}</p>
            <p class="item_descrp">${item.description}</p>
          </div>
          <p>$${item.price}</p>
          <button class="remove_button">x</button>
        </div>
      </div>`
      total_counter = total_counter + item.price
      })
      total.innerHTML = "$" + total_counter
  }).catch((err) => {
      console.error(err)
  });

  function clearCart() {
    axios({
        "method": "get",
        "url": "http://localhost/shoppero_backend/clear_cart.php",
      }).then((result) => {
        console.log(result)
      }).catch((err) => {
          console.error(err)
      });
  }