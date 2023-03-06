const description = document.getElementById('description')
const price = document.getElementById('price')
const name = document.getElementById('name')
const color = document.getElementById('color')
const products = document.getElementById('products_container')
const urlParams = new URLSearchParams(window.location.search);
const type = document.getElementById('type')
const image = document.getElementById('image')
const id = urlParams.get('id');
let colors = []
let sizes = []
let color_images = {}
const heart = document.getElementById('add-to-wishlist');
axios({
    "method": "get",
    "url": `http://localhost/shoppero_backend/get_product.php?id=${id}`,
    
}).then((result) => {
    result.data.forEach((r) => {
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
        if(!sizes.includes(r.size)) {
            sizes.push(r.size)
        }
    })
    image.src = color_images[colors[1]]
}).catch((err) => {
    console.error(err)
});

function switchColor(color) {
    image.src = color_images[String(color)]
}

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
