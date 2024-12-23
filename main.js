console.warn("Starting");
// ====================

var name = "Unknown";
const header = document.querySelector("#header");
const links = document.querySelectorAll(".link");
const calcBtn = document.querySelector("#calcbtn");
const calcRes = document.querySelector("#calcresult");
const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
// const pressBtn = document.querySelector("#press-btn");

for (let item of links) {
    item.addEventListener("click", function() {
        console.log(item.text);
        // alert("reflex");
    });
    console.log("done - " + item.text);
}

calcBtn.addEventListener("click", function() {
    let num1 = inputNum1.value;
    let num2 = inputNum2.value;
    calcRes.innerHTML = parseFloat(num1) + parseFloat(num2);
    console.log("Calculated!")
});


// if (name == "Unknown") {
//     var name = prompt("What is your name?");
// }

// document.querySelector("#user-link").innerHTML = name;
// document.querySelector("#user_name").innerHTML = name;
// prompt();


// pressBtn.addEventListener('click', function() {
//     alert("Hi!!!")
// });


console.warn("Start has done!")

