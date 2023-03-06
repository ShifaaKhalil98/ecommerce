const products = document.getElementById('products')

const endpoint = `http://localhost/shoppero_backend/favorites.php`;
axios.get(endpoint)
  .then(response => {
    const favoriteProducts = response.data;
    console.log(favoriteProducts);
    displayProducts(response.data)
  })
  .catch(error => {
    console.error(error);
  });
let displayProducts= (data)=>{
    products.innerHTML = ''
    data.forEach((element) => {
        console.log(element)
        products.innerHTML+=`<div class="item-card" >
        <div onclick="addtofavorites(${element.id})" class="item-img"><img id="add-to-wishlist" src="./assets/heart.png" /><img class="product-image" src="./${element.image}" /></div>
        <div class="product_name"><h3>${element.product_name}</h3></div>
        <div class="flex-box">
          <h3>$${element.price}</h3>
          <button type="button" onclick=(addtoCart(${element.id}))>Add to cart</button>
        </div>
      </div>`
    })
    }

  function addtofavorites(element) {
    let heart = document.getElementById('add-to-wishlist');
    heart.src = 'assets/filled_heart.png'
    let data = new FormData();
    data.append('product_id', element);

    axios({
      "method": "post",
      "url": "http://localhost/shoppero_backend/add_to_favorites.php",
      "data": data
    }).then((result) => {
        if(result.data.status = 'success') {
          console.log(result)
        }
        
    }).catch((err) => {
        console.error(err)
    });
  }

  function addtoCart(id) {
    let data = new FormData();
    data.append('product_id',id);

    axios({
      "method": "post",
      "url": "http://localhost/shoppero_backend/add_to_cart.php",
      "data": data
    }).then((result) => {
      console.log(result)
        
    }).catch((err) => {
        console.error(err)
    });
  }