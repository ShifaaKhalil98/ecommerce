const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const products = document.getElementById('products_container')
axios({
    "method": "get",
    "url": "http://localhost/shoppero-backend//get_products.php",
    
}).then((result) => {
    console.log(result.data)
    displayProducts(result.data)
}).catch((err) => {
    console.error(err)
});

