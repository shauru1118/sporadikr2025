console.log("strart...\n\n");
// ====================

const name = "Albert"
const header = document.querySelector("#header");
const navLinks = document.querySelectorAll("#nav__link");
const convBtn = document.querySelector("#conv");

console.log(navLinks);
console.log(header);


window.addEventListener("scroll", function() {
    if (this.window.scrollY > 0) {
        header.classList.add('red');
    } else {
        header.classList.remove('red');
    }
});

for (let item of navLinks) {
    item.addEventListener("click", function() {
        console.log(item.text);
    });
}

// ====================
console.log("\nend...\n");
