console.log("Hello world!")


let presbut = document.querySelector("#pressbut")

presbut.addEventListener('click', loginbut)

function loginbut() {
    let l = document.getElementById("login-input").value
    let p = document.getElementById("password-input").value

    alert("Login_______:    " + l + "\nPassword___:    " + p + "\n")

}

