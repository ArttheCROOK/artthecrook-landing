const title = "Art The Crook";

console.log(title);

const username = "Santiago";
const age = 24;
const isDesigner = true;

console.log(username);
console.log(age);
console.log(isDesigner);

function sayHello() {
  console.log("Welcome to Art The Crook");
}

sayHello();

const button = document.getElementById("hero-btn1");

button.addEventListener("click", function () {
  alert("Welcome to the dark side.");
});

const subtitle = document.getElementById("subtitle");
const navbar = document.getElementById("navbar");
const heading = document.getElementById("1st-heading");
const heading2 = document.getElementById("2nd-heading");
const button1 = document.getElementById("hero-btn2");
const button2 = document.getElementById("hero-btn3");
const colorOriginal = document.body.style.backgroundColor;

button1.addEventListener("click", function () {
  document.body.style.backgroundColor = "#ffffff";
});


navbar.style.display = "flex";
subtitle.style.display = "flex";
heading.style.display = "flex";
heading2.style.display = "none";
button2.style.visibility = "hidden";

button1.addEventListener('click', () => {
    button.style.visibility = "hidden";
    button1.style.visibility = "hidden";
    button2.style.visibility = "visible";
    heading.style.display = "none";
    subtitle.style.display = "none";
    navbar.style.display = "none";
    heading2.style.display= "flex";
});

button2.addEventListener('click', () => {
    button.style.visibility = "visible";
    button1.style.visibility = "visible";
    button2.style.visibility = "hidden";
    heading.style.display = "flex";
    subtitle.style.display = "flex";
    navbar.style.display = "flex";
    heading2.style.display= "none";
});

button2.addEventListener("click", function () {
  document.body.style.backgroundColor = colorOriginal;
});
