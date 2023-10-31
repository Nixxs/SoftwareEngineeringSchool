function addCard(title, text) {
    // clone the template
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    // populate the template
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-text").innerText = text;
    // include the populated template into the page
    document.querySelector("#card-list").appendChild(template);
}

function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

addCard("the title", "the text content");
addCard("the title", "the text content");
addCard("the title", "the text content");
addCard("the title", "the text content");
addCard("the title", "the text content");