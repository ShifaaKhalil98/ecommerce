const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const products_container = document.getElementById('products_container')
const login_status = document.getElementById('login-text')
const logged_in = document.getElementById('logged-in')
const men = document.getElementById('men')
const women = document.getElementById('women')
const select_price = document.getElementById('price_filter')
const select_color = document.getElementById('color_filter')
const select_brand = document.getElementById('brand_filter')
const select_material = document.getElementById('material_filter')
const welcome = document.getElementById('welcome')


select_price.addEventListener('change', () => {
    axios.get(`http://localhost/shoppero_backend/get_products.php?filter=price&value=${select_price.value}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
})
select_color.addEventListener('change', () => {
    axios.get(`http://localhost/shoppero_backend/get_products.php?filter=color&value=${select_color.value}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
})
select_material.addEventListener('change', () => {
    axios.get(`http://localhost/shoppero_backend/get_products.php?filter=color&value=${select_material.value}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
})
select_brand.addEventListener('change', () => {
    axios.get(`http://localhost/shoppero_backend/get_products.php?filter=color&value=${select_brand.value}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
})
axios({
    "method": "get",
    "url": "http://localhost/shoppero_backend/check_login.php",
    withCredentials: true
  }).then((result) => {
    console.log(result)
    if(result.data.success) {
        login_status.style.display = 'none'
        logged_in.style.display = 'inline-block'
        welcome.innerHTML = 'Welcome, ' + result.data.first_name
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
let displayProducts= (data)=>{
    products_container.innerHTML = ''
    data.forEach((element) => {
        console.log(element)
        products_container.innerHTML+=`<div class="item-card" onclick="window.location.href = window.location.href = 'product.html?id=${element.id}';">
        <div onclick="addtofavorites(${element.id})" class="item-img"><img id="add-to-wishlist" src="./assets/heart.png" /><img class="product-image" src="./${element.image}" /></div>
        <div class="product_name"><h3>${element.product_name}</h3></div>
        <div class="flex-box">
          <h3>$${element.price}</h3>
          <button type="button">Add to cart</button>
        </div>
      </div>` 

    })
    }
    const addtofavorites=(id)=>{
      axios.get(`http://localhost/shoppero_backend/add_to_favorites.php?user_id=${userID}&product_id=${productID}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    }

function fetchCat(gender) {
    products_container.innerHTML = ''
    axios.get(`http://localhost/shoppero_backend/get_products.php?category=${gender}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
    if(gender == 'men') {
        men.classList.add('selected')
        women.classList.remove('selected')
        men.onclick = null
        men.innerHTML = `
        <div class="subcategories">
            <img onclick="fetchSubCat('clothes', 'men')" class="subcat" src="assets/clothes.png">
            <img onclick="fetchSubCat('shoes', 'men')" class="subcat" src="assets/shoes.png">
            <img onclick="fetchSubCat('accessories', 'men')" class="subcat" src="assets/accessories.png">
            <img onclick="fetchSubCat('watches', 'men')" class="subcat" src="assets/watches.png">
        </div>`
        women.innerHTML = `
        <div class="text-wrapper">
                <h2>Women Collection</h2>
            </div>
            <img class="woman" src="assets/women_products.svg" alt="image">
        `
    } else {
        men.classList.remove('selected')
        women.onclick = null
        men.onclick = 
        women.classList.add('selected')
        men.innerHTML = `<div class="image-wrapper">
        <img class="man" src="assets/men_products.svg" alt="image">
    </div>
    <div class="text-wrapper">
        <h2>Men Collection</h2>
    </div>`
        women.innerHTML = `<div class="subcategories">
        <img onclick="fetchSubCat('clothes', 'women')" class="subcat" src="assets/clothes.png">
        <img onclick="fetchSubCat('shoes', 'women')" class="subcat" src="assets/shoes.png">
        <img onclick="fetchSubCat('accessories', 'women')" class="subcat" src="assets/accessories.png">
        <img onclick="fetchSubCat('watches', 'women')" class="subcat" src="assets/watches.png">
    </div>`

    }
}

function fetchSubCat(subcat, gender) {
    products_container.innerHTML = ''
    axios.get(`http://localhost/shoppero_backend/get_products.php?category=${gender}&subcat=${subcat}`).then((res)=>{
    console.log(res.data);
    displayProducts(res.data)
    }).catch((err)=>{
        console.error(err)
    });
}












