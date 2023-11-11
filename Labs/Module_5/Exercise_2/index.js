const express = require("express");
const calculator_routes = require("./routes/calculator_routes")
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.use("/calculator", calculator_routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

