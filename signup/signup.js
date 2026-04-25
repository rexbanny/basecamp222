const sbt_button = document.getElementById("sbt-button");

function emailTest() {}

function cfn() {
  const error = document.getElementById("error");
  let password = document.getElementById("password").value;
  let password_cfn = document.getElementById("password-cfn").value;
  let name = document.getElementById("name").value;
  error.textContent = "";

  const emailerror = document.getElementById("error");
  let email = document.getElementById("email").value;
  emailerror.textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(name.length <= 0){
    emailerror.textContent = "you must fill all of them";
    return;
  }

  if (email.trim() === "") {
    emailerror.textContent = "email can't be empty";
    return;
  }

  if (!emailRegex.test(email)) {
    emailerror.textContent = "email format is wronge";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be more than 6 character";
    return;
  }
  if (password !== password_cfn) {
    error.textContent = "Password must be same as other password";
    return;
  }
  if (!/[A-Z]/.test(password)) {
    error.textContent = "Password include least one alfabeth";
    return;
  }
  if (!/[0-9]/.test(password)) {
    error.textContent = "Password include least one number";
    return;
  }
  else {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        error.textContent = data.error;
      } else {
        window.location.href = "../login/login.html";
      }
    })
    .catch(() => {
      error.textContent = "An error occurred. Please try again.";
    });
  }
}

sbt_button.addEventListener("click", cfn);
