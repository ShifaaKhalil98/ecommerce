const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const products_container = document.getElementById('products_container')
const login_status = document.getElementById('status')

axios({
    "method": "get",
    "url": "http://localhost/shoppero_backend/check_login.php",
    withCredentials: true
  }).then((result) => {
    console.log(result)
    if(result.data.success) {
      login_status.innerHTML = `Welcome, <b>${result.data.first_name}</b>`
    } else {
      console.log('noo')
    }
  }).catch((err) => {
    console.error(err)
  });

axios.get(`http://localhost/shoppero_backend/get_products.php`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
}).catch((err)=>{
    console.error(err)
});

let displayProduct = (data)=>{

}
let displayProducts= (data)=>{
    data.forEach((element) => {
        console.log(element)
        products_container.innerHTML+=`<div class="item-card">
        <div class="item-img"><img id="add-to-wishlist" src="./assets/heart.png" /><img class="product-image" src="./${element.image}" /></div>
        <div class="product_name"><h3>${element.product_name}</h3></div>
        <div class="flex-box">
          <h3>$${element.price}</h3>
          <button type="button">Add to cart</button>
        </div>
      </div>` 
//    element.addEventListener('click', () => {
    
//     window.location.href = `/product.html?id=${element.id}`;
//   });
    })
        

  products.appendChild(element);
    }


// save the id of the clicked product to the local storage
// go to product js and add axious with the id in it
//  then create a function based on that id with the html id's
// 












