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


