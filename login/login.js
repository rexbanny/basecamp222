const sbt_button = document.getElementById("sbt-button");

function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    error.textContent = "";

    if(email.trim() ==="") {
        error.textContent = "Email is required.";
        return;
    }

    if (!emailRegex.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters long.";
        return;
    }

    else {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                error.textContent = data.error;
            } else {
                window.location.href = "../main_menu/projects.html";
            }
        })
        .catch((err) => {
            error.textContent = "An error occurred. Please try again.";
        });
    }
}
sbt_button.addEventListener("click", validateLogin);