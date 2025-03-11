// general code 

// fetch('../html/header.html')
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("header").innerHTML = data
//     })



//defines

// const mysql = require('mysql2');


let count = 0

let login = ""
let password = ""


// Get elements

let refreshBtn = document.getElementById("ref_btn")
let login_input = document.getElementById("login_input")
let password_input = document.getElementById("password_input")
let login_btn = document.getElementById("login_btn")

// ⁡⁢⁣⁢𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀⁡

function refresh() {
    if (refreshBtn == null) {
        return
    }

    count = count + 1
    // console.log("Refreshed: " + count)

    let text = document.getElementById("refreshed_text")
    text.textContent = "Обновлено " + count + " раз(-a)"
    console.log("Refreshed text: " + text.textContent)

    localStorage.setItem("count", count)
}

// ⁡⁢⁣⁢𝗠𝗔𝗜𝗡 𝗖𝗢𝗗𝗘⁡ ​

if (localStorage.getItem("login") && localStorage.getItem("password")) {
    login = localStorage.getItem("login")
    password = localStorage.getItem("password")

    let lk_name = document.getElementById("lk_name")
    if (lk_name) {
        lk_name.innerText = login
    } else {
        console.log("lk_name: " + true)
    }
}

if (refreshBtn != null) {
    refreshBtn.addEventListener("click", refresh)
    console.log("RefreshBtn: " + true)
    if (localStorage.getItem("count")) {
        count = parseInt(localStorage.getItem("count"))
        let text = document.getElementById("refreshed_text")
        text.textContent = "Обновлено " + count + " раз(-а)"
        console.log("Loaded count: " + count)
    } else {
        console.log("No refresh count in localStorage")
    }
} else {
    console.log("RefreshBtn: " + false)
}

if (login_btn != null) {
    console.log("login: " + true)

    login_btn.addEventListener("click", function () {
        let login__ = login_input.value
        let password__ = password_input.value
        if (login__ == "") {
            // login__ = "Unknown"
            alert("Введите логин!")
        } else {
            console.warn("login: " + login__ + "\npassword: " + password__)
            login = login__
            password = password__
            localStorage.setItem("login", login)
            localStorage.setItem("password", password)

            let lk_name = document.getElementById("lk_name")
            if (lk_name) {
                lk_name.innerText = login
            } else {
                console.log("lk_name: " + true)
            }
        }
    })

}

// console.log("refreshBtn : ", refreshBtn)
// console.log("aaa")

