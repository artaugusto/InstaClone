let login = document.getElementById("login"),
  textLogin = document.getElementById("textLogin"),
  inputLogin = document.getElementById("inputLogin"),
  password = document.getElementById("password"),
  textPassword = document.getElementById("textPassword"),
  inputPassword = document.getElementById("inputPassword"),
  imgPassword = document.getElementById("imgPassword"),
  forgotPassword = document.getElementById("forgotPassword"),
  btnLogin = document.getElementById("btnLogin"),
  time = 4000,
  currentImageVisible = 0,
  currentImageTransition = 3,
  images = document.querySelectorAll("#phoneScreen img"),
  max = images.length,
  darkMode = document.getElementById("darkMode"),
  darkModeSwitch = document.getElementById("darkModeSwitch"),
  ball = document.getElementById("ball"),
  textApp = document.getElementById("textApp"),
  textRegister = document.getElementById("textRegister"),
  areaLogin = document.getElementById("areaLogin"),
  areaRegister = document.getElementById("areaRegister"),
  logo = document.getElementById("logo");

darkMode.addEventListener("change", () => {
  document.body.classList.toggle("darkMode");
  darkModeSwitch.classList.toggle("darkModeSwitch--light");
  ball.classList.toggle("ball--dark");
  textApp.classList.toggle("textApp--dark");
  textRegister.classList.toggle("textApp--dark");
  forgotPassword.classList.toggle("forgotPassword--dark");
  areaLogin.classList.toggle("areaLogin--dark");
  areaRegister.classList.toggle("areaLogin--dark");
  login.classList.toggle("areaInput--dark");
  password.classList.toggle("areaInput--dark");
  inputLogin.classList.toggle("input--dark");
  inputPassword.classList.toggle("input--dark");

  logo.classList.toggle("logoDarkMode");
  if (logo.classList.contains("logoDarkMode")) {
    logo.src = "./assets/instagramLogoDarkMode.png";
  } else {
    logo.src = "./assets/instagramLogo.png";
  }
});

function loginSelected() {
  login.classList.add("areaInput--changed");
}

function loginNotSelected() {
  login.classList.remove("areaInput--changed");
}

function passwordSelected() {
  password.classList.add("areaInput--changed");
}

function passwordNotSelected() {
  password.classList.remove("areaInput--changed");
}

function loginChanged() {
  if (inputLogin.value.length > 0) {
    login.classList.add("areaInput--changed");
    textLogin.classList.add("textInput--changed");
    inputLogin.classList.add("input--changed");
  } else {
    login.classList.remove("areaInput--changed");
    textLogin.classList.remove("textInput--changed");
    inputLogin.classList.remove("input--changed");
  }
}

function passwordChanged() {
  if (inputPassword.value.length > 0) {
    password.classList.add("areaInput--changed");
    textPassword.classList.add("textInput--changed");
    inputPassword.classList.add("input--changed");
    imgPassword.classList.add("eyeButton--changed");
  } else {
    password.classList.remove("areaInput--changed");
    textPassword.classList.remove("textInput--changed");
    inputPassword.classList.remove("input--changed");
    imgPassword.classList.remove("eyeButton--changed");
  }
}

imgPassword.addEventListener("click", function () {
  password.classList.toggle("passwordVisible");
  if (password.classList.contains("passwordVisible")) {
    imgPassword.src = "./assets/eye-off.svg";
    inputPassword.type = "text";
  } else {
    imgPassword.src = "./assets/eye.svg";
    inputPassword.type = "password";
  }
});

function checkInputs() {
  var filled = false;
  var usuario = inputLogin.value.length;
  var senha = inputPassword.value.length;

  if (usuario > 0 && senha > 5) {
    filled = true;
  }

  return filled;
}
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
  input.addEventListener("keyup", function () {
    if (checkInputs(inputs)) {
      btnLogin.disabled = false;
      btnLogin.classList.add("btn--enabled");
    } else {
      btnLogin.disabled = true;
      btnLogin.classList.remove("btn--enabled");
    }
  });
});

function nextImage() {
  images[currentImageVisible].classList.remove("imgDisplay");

  currentImageVisible++;

  if (currentImageVisible >= max) {
    currentImageVisible = 0;
  }

  images[currentImageVisible].classList.add("imgDisplay");
}

function imageTransition() {
  images[currentImageTransition].classList.remove("imgTransition");

  currentImageTransition++;

  if (currentImageTransition >= max) {
    currentImageTransition = 0;
  }

  images[currentImageTransition].classList.add("imgTransition");
}

function startPhoneScreen() {
  setInterval(() => {
    nextImage();
    imageTransition();
  }, time);
}

window.addEventListener("load", startPhoneScreen);
