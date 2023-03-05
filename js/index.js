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

function openForm() {
      register_popup.classList.add('openForm')
      container.classList.add('containerBlur')
}

function closeForm() {
  register_popup.classList.remove('openForm')
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

function submitForm() {
  if(validateForm()) {
      var js_object = {
          'firstname': register_form.elements['firstname'].value,
          'lastname': register_form.elements['lastname'].value,
          'email': register_form.elements['email'].value,
          'password': register_form.elements['password'].value,
      }
      var json_object = JSON.stringify(js_object)
      console.log('JSON Object: ',json_object)
      full_name = register_form.elements['firstname'].value + ' ' + register_form.elements['lastname'].value
      closeForm()
  }
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