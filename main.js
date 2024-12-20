console.warn("Starting");
// ====================

var name = "Unknown";
const header = document.querySelector("#header");
const links = document.querySelectorAll(".link");
// const pressBtn = document.querySelector("#press-btn");

for (let item of links) {
    item.addEventListener("click", function() {
        console.log(item.text);
        // alert("reflex");
    });
    console.log("done - " + item.text);
}

// var name = prompt("What is your name?");
document.querySelector("#user-link").innerHTML = name;
// prompt();


// pressBtn.addEventListener('click', function() {
//     alert("Hi!!!")
// });


console.warn("Start has done!")

