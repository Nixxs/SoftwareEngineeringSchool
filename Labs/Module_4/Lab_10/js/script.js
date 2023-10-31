let allProducts;

function addCard(title, text, imageurl, price) {
    // clone the template
    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
    // populate the template
    template.querySelector(".card-title").innerText = title;
    template.querySelector(".card-img").innerHTML = `<img width="150" src="${imageurl}" alt="${title}"/>`;
    template.querySelector(".card-price").innerHTML = `<b>$${price}</b>`;
    template.querySelector(".card-text").innerText = text;
    // include the populated template into the page
    document.querySelector("#card-list").appendChild(template);
}

function populateProducts(products){
    document.getElementById("card-list").innerHTML = "";

    products.forEach(
        function(product){
            addCard(product.title, product.description, product.image, product.price);
        }
    );
}

function setupDisplayData(products){
    // we need to store the products somewhere for later
    allProducts = products;
    // populate all products onto the screen
    populateProducts(allProducts);

    // calcualte the unique categories from the fetched product data then store them for later.
    let productCategories = allProducts.map(
        function(product){
            return product.category;
        }
    );
    productCategories = Array.from(new Set(productCategories));
    // populate the dropdown list selection so the user can filter
    productCategories.forEach((category) => document.getElementById("category-select").innerHTML += `<option value="${category}">${category}</option>`);
}

function filterProducts(){
    const selectedCategory = document.getElementById("category-select").value;
    if (selectedCategory === "all"){
        populateProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(
            function(product){
                return product.category === selectedCategory;
            }
        );
        populateProducts(filteredProducts);
    }

}

function getData(){
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => setupDisplayData(json));
}
getData();