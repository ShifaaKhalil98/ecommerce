const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')

axios.get(`http://localhost/shoppero-backend/get_product.php?id=${id}`).then((res)=>{
    console.log(res.data);
}).then((res)=>{
    displayProduct(res.data)
}).catch((err)=>{
    console.error(err)
});

let displayProduct = (data)=>{

}
let displayProducts= (data)=>{
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

       products.innerHTML+=`<div class="item-card">
       <div id="add-to-wishlist"><img src="./assets/heart.png" /></div>
       <div class="item-img"><img src="./assets/item1.png" /></div>
       <div>
           <h3>${element.name}</h3>
       </div>
       <div class="flex-box">
           <h3>${element.price}</h3>
           <button type="button">Add to cart</button>
       </div>
   </div>` 
   productElem.addEventListener('click', () => {
    
    window.location.href = `/product-details.html?id=${element.id}`;
  });

  products.appendChild(productElem);
    }
}

// save the id of the clicked product to the local storage
// go to product js and add axious with the id in it
//  then create a function based on that id with the html id's
// 



