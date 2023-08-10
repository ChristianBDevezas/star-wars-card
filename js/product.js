import imageData from "./products-data.js";

const currentImageId = localStorage.getItem("imageID");
const h2 = document.querySelector("h2.title");

// ======================================================
if(typeof currentImageId !== 'string') {
    // alert("None card is selected!");
    h2.innerHTML = "None card is selected!";
    throw new Error("This value is not a string type");
}

if(currentImageId.match(/[^0-9]/) instanceof Array) {
    throw new Error("This value is not a numeric type");
}
// ======================================================

const imageId = +(localStorage.getItem("imageID"));
console.log(imageId);

const body = document.querySelector("body");

const section = document.createElement("section");
section.classList.add("container");

const article = document.createElement("article");

const figure = document.createElement("figure");

const img = document.createElement("img");
// img.setAttribute("src", "images/vader.jpg");
// img.setAttribute("alt", "Darth Vader");

let currentData;
for(let item of imageData) {
    if(item.id === imageId) {
        currentData = item;
        break;
    }
}
console.log(currentData);

img.setAttribute("src", currentData.img);
img.setAttribute("alt", currentData.title);
figure.appendChild(img);

const h3 = document.createElement("h3");
h3.innerText = currentData.title;

const span = document.createElement("span");
span.innerText = currentData.description;

const flex = document.createElement("div");
flex.classList.add("flex-container");

const link = document.createElement("a");
link.innerText = "Back to Home";
link.setAttribute("href", "index.html");
// link.setAttribute("target", "_blank");

const button = document.createElement("button");
button.innerText = "Delete";

flex.appendChild(link);
flex.appendChild(button);

article.appendChild(figure);
article.appendChild(h3);
article.appendChild(span);
// article.appendChild(link);
// article.appendChild(button);
article.appendChild(flex);

section.appendChild(article);

body.appendChild(section);

console.log("imageId", imageId);

button.addEventListener("click", () => {
    article.remove();
    localStorage.removeItem("imageID");
    window.location.href = "./index.html";
});