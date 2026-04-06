const sbt_button = document.getElementById("sbt-button");

function cfn() {
  let password = document.getElementById("password").value;
  let password_cfn = document.getElementById("password-cfn").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
  } else if (password !== password_cfn) {
    alert("Passwords do not match");
  } else {
    alert("Success!");
  }
}

sbt_button.addEventListener("click", cfn);