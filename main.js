console.warn("Starting");
// ====================

const name = "Albert";
const header = document.querySelector("#header");
const links = document.querySelectorAll(".link");


for (let item of links) {
    item.addEventListener("click", function() {
        console.log(item.text);
    });
    console.log("done - " + item.text);
}

for (var i = 0; i < 10; i++) {
    console.log(i + ". Hi");
}


console.warn("Start has done!")

