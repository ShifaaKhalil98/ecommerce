const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const color = document.getElementById('color')
const products = document.getElementById('products_container')
const urlParams = new URLSearchParams(window.location.search);
const type = document.getElementById('type')
const image = document.getElementById('image')
const id = urlParams.get('id');
const size = document.getElementById('size')
let colors = []
let sizes = []
let color_images = {}
let added = false
const login_status = document.getElementById('login-text')
const logged_in = document.getElementById('logged-in')
const welcome = document.getElementById('welcome')
const heart = document.getElementById('add-to-wishlist');
axios({
    "method": "get",
    "url": `http://localhost/shoppero_backend/get_product.php?id=${id}`,
    
}).then((result) => {
    console.log(result)
    result.data.forEach((r) => {
        // console.log('kk')
        if (r.for_men == 1) {
            type.innerHTML = "Men's " + r.subcategory_name
        } else {
            type.innerHTML = "Women's " + r.subcategory_name
        }
        name.innerHTML = r.product_name
        description.innerHTML = r.description
        if(!colors.includes(r.color_name)) {
            colors.push(r.color_name)
            color.innerHTML += `<button type="button" value = ${r.color_name} onclick="switchColor('${r.color_name}')"></button>`
            color_images[r.color_name] = r.image
        }
        if(!sizes.includes(r.size) && r.size !=null) {
            console.log(r.size)
            sizes.push(r.size)
            size.innerHTML += `<button type="button">${r.size}</button>`
        }
        price.innerHTML = "$" + r.price
    })
    image.src = color_images[colors[0]]
}).catch((err) => {
    console.error(err)
});

function switchColor(color) {
    image.src = color_images[String(color)]
}

axios({
    "method": "get",
    "url": "http://localhost/shoppero_backend/check_login.php",
    withCredentials: true
  }).then((result) => {
    console.log(result)
    if(result.data.success) {
      console.log('loggedin')
      login_status.style.display = 'none'
      logged_in.style.display = 'inline-block'
      welcome.innerHTML = 'Welcome, ' + result.data.first_name
      loggedin = true
    } else {
      console.log('noo')
    }
  }).catch((err) => {
    console.error(err)
  });

// heart.addEventListener('click', () => {
//   axios.get('http://localhost/shoppero_backend/add_to_favorites.php', { user_id: userID, product_id: productID })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });
// add value attribute in html
// 0

function addtofavorites() {
    let heart = document.getElementById('heart');
    if(added) {
        heart.src = './assets/heart.png'
        added = false
    } else {
        heart.src = './assets/filled_heat.png'
        added = true
    }
    let data = new FormData();
    data.append('product_id', id);

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

  function addtoCart() {
    let data = new FormData();
    data.append('product_id',id);

    axios({
      "method": "post",
      "url": "http://localhost/shoppero_backend/add_to_cart.php",
      "data": data
    }).then((result) => {
      document.getElementById('add').innerHTML = "Added"
        
    }).catch((err) => {
        console.error(err)
    });
  }