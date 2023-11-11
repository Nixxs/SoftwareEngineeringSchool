async function getData(url){
    const response = await fetch(url)
    const json = await response.json();
    return json
}

const getProducts = async (req, res) => {
    console.log("get the products");
    let data = await getData("https://fakestoreapi.com/products");
    res.json(data);
}

module.exports = {
    getProducts
}