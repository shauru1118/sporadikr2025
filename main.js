console.log("strart...\n\n");
// ====================

const name = "Albert"
const header = document.querySelector("#header");
const links = document.querySelectorAll(".link")

console.log(links);
console.log(header);


for (let item of links) {
    item.addEventListener("click", function() {
        console.log(item.text);
    });
}


// ====================
console.log("\nend...\n");
