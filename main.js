console.warn("Starting");
// ====================

const name = "Albert";
const header = document.querySelector("#header");
const links = document.querySelectorAll(".link");
// const pressBtn = document.querySelector("#press-btn");

for (let item of links) {
    item.addEventListener("click", function() {
        console.log(item.text);
        alert("reflex");
    });
    console.log("done - " + item.text);
}

// pressBtn.addEventListener('click', function() {
//     alert("Hi!!!")
// });


console.warn("Start has done!")

