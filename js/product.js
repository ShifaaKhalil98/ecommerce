const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const products = document.getElementById('products_container')
const heart = document.getElementById('add-to-wishlist');
axios({
    "method": "get",
    "url": "http://localhost/shoppero-backend//get_products.php",
    
}).then((result) => {
    console.log(result.data)
    displayProducts(result.data)
}).catch((err) => {
    console.error(err)
});


heart.addEventListener('click', () => {
  const user =  sessionStorage.getItem('user_id');
  const product = 
  axios.post('http://localhost/shoppero_backend/add_to_favorites.php', { user, product })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
