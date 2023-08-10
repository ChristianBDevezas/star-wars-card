import imageData from "./products-data.js";

window.addEventListener("DOMContentLoaded", () => {
    displayItems();
    selectItem();
});

function displayItems() {
    const body = document.body;

    const section = document.createElement("section");
    section.classList.add("container");

    for(let item of imageData) {
        const article = document.createElement("article");

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.setAttribute("src", item.img);
        img.setAttribute("alt", item.title);
        
        figure.appendChild(img);

        const h3 = document.createElement("h3");
        h3.innerText = item.title;

        const span = document.createElement("span");
        span.innerText = item.description;

        const link = document.createElement("a");
        link.setAttribute("href", "products.html");
        link.innerText = "Select Item";

        article.appendChild(figure);
        article.appendChild(h3);
        article.appendChild(span);
        article.appendChild(link);

        section.appendChild(article);
    }    

    body.appendChild(section);
}

function selectItem() {
    const links = document.querySelectorAll("section a");

    links.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            try {
                const parentLink = link.parentElement;
                console.log(parentLink);

                const image = parentLink.firstElementChild.firstElementChild;
                console.log(image);

                const title = parentLink.firstElementChild.nextElementSibling;
                console.log(title);

                console.log(imageData[idx].id);

                localStorage.setItem("imageID", imageData[idx].id);

                // window.location.href = `elements-selected.html?id=${imageData[idx].id}`;
                window.location.href = `./products.html`;
            }
            catch {
                console.log("Not found");
            }            
        });
    });
}