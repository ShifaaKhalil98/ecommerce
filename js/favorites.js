

const userID = sessionStorage.getItem("user_id");
console.log(userID);
const endpoint = `http://localhost/shoppero-backend/favorites.php?user_id=${userID}`;
axios.get(endpoint)
  .then(response => {
    const favoriteProducts = response.data;
    console.log(favoriteProducts);
  })
  .catch(error => {
    console.error(error);
  });
