const express = require("express");
const shopRoutes = require("./routes/shopRoutes")
const app = express();
const port = 3000;

app.use("/", express.static("public"));
app.use("/products", shopRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
