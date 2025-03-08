//defines

let count = 0

// Get elements

let refreshBtn = document.getElementById("ref_btn")


function refresh() {
    count = count + 1
    console.log("Refreshed: " + count)

    let text = document.getElementById("refreshed_text")
    text.textContent = "Обновлено " + count + " раз(-a)"
    console.log("Refreshed text: " + text.textContent)

    localStorage.setItem("count", count)
}

// main code

fetch('../html/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector("header").innerHTML = data
    })

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"))
    let text = document.getElementById("refreshed_text")
    text.textContent = "Обновлено " + count + " раз(-а)"
} else {
    console.log("No refresh count in localStorage")
}


refreshBtn.addEventListener("click", refresh)

