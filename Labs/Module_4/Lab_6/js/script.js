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

function handleData(data){
    for (let record in data){
        const title = data[record].title;
        const content = data[record].body;
        
        addCard(title, content);
    }
}

function getData(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((json) => handleData(json));
}
getData();