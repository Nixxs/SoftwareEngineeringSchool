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
    .then(
        function(json){
            for (let record in json){
                const title = json[record].title;
                const content = json[record].body;
                
                addCard(title, content);
            }

            console.log(json);
        }
    );
}
getData();