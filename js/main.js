let count = 0

let refreshBtn = document.getElementById("ref_btn")

function refresh() {
    count = count + 1
    let text = document.getElementById("refreshed_text")
    text.textContent = "Обновлено " + count + " раз(-a)"
    console.log("Refreshed text: " + text.textContent)
}

refreshBtn.addEventListener("click", refresh)
