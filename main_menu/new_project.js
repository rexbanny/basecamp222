const creatproject = document.getElementById("creat_project");


function full(){
    const error = document.getElementById("error");
    error.textContent = "";
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    if(name.length <= 0){
        error.textContent = "please fill the all of them";
    }
    if(description.length <= 0){
        error.textContent = "please fill the all of them";
    }
}

creatproject.addEventListener("click", full);