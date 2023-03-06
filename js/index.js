const right_btn_1 = document.getElementById("scroll-right-1");
const left_btn_1 = document.getElementById("scroll-left-1");
const right_btn_2 = document.getElementById("scroll-right-2");
const left_btn_2 = document.getElementById("scroll-left-2");
const right_btn_3 = document.getElementById("scroll-right-3");
const left_btn_3 = document.getElementById("scroll-left-3");
const down_btn = document.getElementsByClassName("scroll-down")[0];
const down_arrow = document.getElementById('animation-container');
const first_section = document.getElementById('first-section');
const container = document.getElementById('main-container');
const password = document.getElementById('password')
const register_popup = document.getElementById('registerPopup')
const register_form = document.getElementById('registerForm')
const login_popup = document.getElementById('loginPopup')
const login_form = document.getElementById('loginForm')
const search_bar = document.getElementById('search')
const search_result = document.getElementById('search-results')
const login_status = document.getElementById('status')
let password_validated = false
let position = 0
let direction = 1

var moveText = setInterval(() => {
  position += direction
  if (position > 10 || position < 0) {
    direction *= -1
  }
  down_arrow.style.top = position + 'px'
}, 50)

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

//category-1
var right_clicks_1 = 0;
var left_clicks_1 = 0;
left_btn_1.style.visibility = "hidden";
const content_1 = document.querySelector("#items-1");
right_btn_1.addEventListener("click", function (event) {
  content_1.scrollLeft += 300;
  left_btn_1.style.visibility = "visible";
  right_clicks_1++;
  left_clicks_1--;
  if (right_clicks_1 > 1) right_btn_1.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_1.addEventListener("click", function (event) {
  content_1.scrollLeft -= 300;
  right_btn_1.style.visibility = "visible";
  left_clicks_1++;
  right_clicks_1--;
  if (left_clicks_1 == 0) left_btn_1.style.visibility = "hidden";
  event.preventDefault();
});
//category-2
var right_clicks_2 = 0;
var left_clicks_2 = 0;
right_btn_2.style.visibility = "hidden";
const content_2 = document.querySelector("#items-2");
right_btn_2.addEventListener("click", function (event) {
  content_2.scrollLeft += 300;
  left_btn_2.style.visibility = "visible";
  right_clicks_2++;
  left_clicks_2--;
  if (right_clicks_2 == 0) right_btn_2.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_2.addEventListener("click", function (event) {
  content_2.scrollLeft -= 300;
  right_btn_2.style.visibility = "visible";
  left_clicks_2++;
  right_clicks_2--;
  if (left_clicks_2 > 1) left_btn_2.style.visibility = "hidden";
  event.preventDefault();
});
//category-3
const content_3 = document.querySelector("#items-3");
var right_clicks_3 = 0;
var left_clicks_3 = 0;
left_btn_3.style.visibility = "hidden";
right_btn_3.addEventListener("click", function (event) {
  content_3.scrollLeft += 300;
  left_btn_3.style.visibility = "visible";
  right_clicks_3++;
  left_clicks_3--;
  if (right_clicks_3 > 1) right_btn_3.style.visibility = "hidden";
  event.preventDefault();
});
left_btn_3.addEventListener("click", function (event) {
  content_3.scrollLeft -= 300;
  right_btn_3.style.visibility = "visible";
  left_clicks_3++;
  right_clicks_3--;
  if (left_clicks_3 == 0) left_btn_3.style.visibility = "hidden";
  event.preventDefault();
});
//down
down_btn.addEventListener("click", function (event) {
  first_section.scrollIntoView({ behavior: 'smooth' })
});
down_btn.addEventListener("mouseover", function (event) {
  down_btn.style.cursor = "pointer";
});

search_bar.addEventListener('keyup', () => {
  if(search_bar.value.length > 0) {
    axios({
      "method": "get",
      "url": `http://localhost/shoppero_backend/search.php?query=${search_bar.value}`
    }).then((result) => {
      console.log(result)
      search_result.innerHTML = ''
      if(result.data.length > 0 ) {
        
      result.data.forEach((result) => {
        let product_card = `<div class="item-card">
        <div class="item-img"><img id="add-to-wishlist" src="./assets/heart.png" /><img class="product-image" src="./${result.image}" /></div>
        <div class="product_name"><h3>${result.product_name}</h3></div>
        <div class="flex-box">
          <h3>$${result.price}</h3>
          <button type="button">Add to cart</button>
        </div>
      </div>`

      search_result.innerHTML += product_card;
      })
      } else {
        search_result.innerHTML = 'No results!'
      }
    }).catch((err) => {
        console.error(err)
    });
    container.classList.add('move-to-side')
    if(container.style.display != 'none') {
      const animate = setTimeout(() => {
        container.style.display = 'none';
      }, 300)
    }
  } else {
    search_result.innerHTML = ''
    container.classList.remove('move-to-side')
    container.style.display = 'block';
  }
})
function openLogin() {
      register_popup.classList.remove('openForm');
      login_popup.classList.remove('openForm');
      login_popup.classList.add('openForm')
      container.classList.add('containerBlur')
}
function openRegister() {
  register_popup.classList.remove('openForm');
  login_popup.classList.remove('openForm');
  register_popup.classList.add('openForm');
  container.classList.add('containerBlur');
}

function closeForm() {
  register_popup.classList.remove('openForm')
  login_popup.classList.remove('openForm')
  container.classList.remove('containerBlur')
}

password.addEventListener('focus', () => {
  var validation = document.getElementById('validation')
  validation.classList.add('validationOpened')
  })

password.addEventListener('focusout', () => {
  var validation = document.getElementById('validation')
  validation.classList.remove('validationOpened')
  })

password.addEventListener('keyup', () => {
  var lower = document.getElementById("lowercase")
  var upper = document.getElementById("uppercase")
  var special = document.getElementById("special")
  var number = document.getElementById("number")
  var length = document.getElementById("length")

  var lower_case = /[a-z]/g
  var upper_case = /[A-Z]/g
  var special_characters = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
  var numbers = /[0-9]/g

  password.value.match(lower_case) ? lower.classList.replace('error', 'correct') : lower.classList.replace('correct', 'error')
  password.value.match(upper_case) ? upper.classList.replace('error', 'correct') : upper.classList.replace('correct', 'error')
  password.value.match(special_characters) ? special.classList.replace('error', 'correct') : special.classList.replace('correct', 'error')
  password.value.match(numbers) ? number.classList.replace('error', 'correct') : number.classList.replace('correct', 'error')
  password.value.length >= 8 ? length.classList.replace('error', 'correct') : length.classList.replace('correct', 'error')

  if(password.value.match(lower_case) && password.value.match(upper_case)
  && password.value.match(special_characters) && password.value.match(numbers)
  && password.value.length >= 8) {
      password_validated = true
  } else {
      password_validated =  false
  }
})

// function getProduct(id) {
//   axios({
//     "method": "get",
//     "url": `http://localhost/shoppero_backend/getproduct.php?id=${id}`,
//     "data": data
//   }).then((result) => {
//       console.log(result)
      
//   }).catch((err) => {
//       console.error(err)
//   });
// }

function submitForm() {
  if(validateForm()) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('firstname').value;
    let last_name = document.getElementById('lastname').value;
    let status = document.getElementById('status')

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('first_name', first_name);
    data.append('last_name', last_name);

    axios({
        "method": "post",
        "url": "http://localhost/shoppero_backend/signup.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "user added") {
            status.innerHTML = `Welcome, <b>${result.data.first_name}</b>`
            closeForm()
        } else if(result.data.status == "password not validated") {
          alert("Could not validate password!")
        } else if(result.data.status == "email already exists") {
          alert("This email already exists, try logging in instead")
        }
    }).catch((err) => {
        console.error(err)
    });
      
  }
}

function submitLogin() {
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;
  let status = document.getElementById('status')

  let data = new FormData();
    data.append('email', email);
    data.append('password', password);
  
    console.log('yea')

  axios({
    "method": "post",
    "url": "http://localhost/shoppero_backend/login.php",
    "data": data
  }).then((result) => {
      console.log(result)
      if (result.data.status == "user logged in") {
          status.innerHTML = `Welcome, <b>${result.data.first_name}</b>`
          closeForm()
      } else if(result.data.status == "password not validated") {
        alert("Could not validate password!")
      } else if(result.data.status == "email already exists") {
        alert("This email already exists, try logging in instead")
      }
  }).catch((err) => {
      console.error(err)
  });
}
function validateForm() {
  var firstname = document.getElementById('firstname')
  var lastname = document.getElementById('lastname')
  var error = document.getElementById('errormessage')
  var confirm_password = document.getElementById('confirmPassword')
  var email = document.getElementById('email')
  var email_regex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  error.innerHTML = ''

  if(firstname.value.length == 0) {
      error.innerHTML = 'Please provide your first name!'
      firstname.classList.add('errorField')
      return false
  }
  if(lastname.value.length == 0) {
      error.innerHTML = 'Please provide your last name!'
      lastname.classList.add('errorField')
      return false
  }
  if(!email.value.match(email_regex) || email.value.length == 0) {
      error.innerHTML = 'Please provide a valid email!'
      email.classList.add('errorField')
      return false
  }
  if(!password_validated) {
      error.innerHTML = "Please fix your password!"
      password.classList.add('errorField')
      return false
  }
  if(password.value != confirm_password.value) {
      error.innerHTML = "Passwords don't match!"
      password.classList.add('errorField')
      confirm_password.classList.add('errorField')
      return false
  }
  return true
}