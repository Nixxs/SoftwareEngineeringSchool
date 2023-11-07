const express = require("express");
const test_routes = require("./routes/test_routes")
const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.use("/other_routes", test_routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

