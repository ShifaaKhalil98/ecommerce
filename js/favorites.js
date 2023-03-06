

const userID = sessionStorage.getItem("user_id");
console.log(userID);
const endpoint = `http://localhost/shoppero-backend/favorites.php?user_id=${userID}`;
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
        products.innerHTML+=`<div class="product">
        <img src="assets\item1.png" alt="Product 3" />
        <h2>${element.product_name}</h2>
        <p class="description">
        ${element.description}
        </p>
        <p class="price">${element.price}</p>
        <button class="remove-btn">Remove from favorites</button>
      </div>`
    })
    }