let btn = document.getElementById("submitBtn");

// -----------------All-error-class-sected-------------
let errorName = document.querySelector(".errorN");
let errorEmail = document.querySelector(".errorE");
let errorPassword = document.querySelector(".errorP");
let errorNumber = document.querySelector(".errorNum");

// -------------All--icon--id----sected---------------
let icon1 = document.getElementById("icon-1");
let icon2 = document.getElementById("icon-2");
let icon3 = document.getElementById("icon-3");
let icon4 = document.getElementById("icon-4");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    validationName() &&
    validationEmail() &&
    validatePassword() &&
    validationNumber()
  ) {
    alert("Form Submmited ");
  }
  console.log(number);
});

function validationName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    errorName.innerHTML = "Name required";
    icon1.classList.add("fa-x");
    return false;
  }

  errorName.innerHTML = "";
  icon1.classList.remove("fa-x");
  icon1.classList.add("fa-check");
  return true;
}

function validationEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    errorEmail.innerHTML = "Email required";
    icon2.classList.add("fa-x");
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errorEmail.innerHTML = "Write full Eamil";
    icon2.classList.add("fa-x");
    return false;
  }

  errorEmail.innerHTML = "";
  icon2.classList.remove("fa-x");
  icon2.classList.add("fa-check");
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length == 0) {
    errorPassword.innerHTML = "Password is required";
    icon3.classList.add("fa-x");
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    errorPassword.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";

    return false;
  }
  errorPassword.innerHTML = "";
  icon3.classList.remove("fa-x");
  icon3.classList.add("fa-check");
  return true;
}

function validationNumber() {
  let number = document.getElementById("number").value;
  if (number.length < 10 || number.length < 10) {
    errorNumber.innerHTML = "Number should be 10 digit";
    icon4.classList.add("fa-x");
    return false;
  } else if (isNaN(number)) {
    errorNumber.innerHTML = "Type number";

    return false;
  }

  errorNumber.innerHTML = "";
  icon4.classList.remove("fa-x");
  icon4.classList.add("fa-check");
  return true;
}


