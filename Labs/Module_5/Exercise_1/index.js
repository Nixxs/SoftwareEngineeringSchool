const express = require("express");
const app_3000 = express();
const app_3000_port = 3000;

app_3000.get("/", (req, res) => {
    res.send("app running on 3000");
});

app_3000.listen(app_3000_port, () => {
    console.log(`Example app_3000 listening at http://localhost:${app_3000_port}`);
});

const app_3100 = express();
const app_3100_port = 3100;

app_3100.get("/", (req, res) => {
    res.send("app running on 3100");
});

app_3100.listen(app_3100_port, () => {
    console.log(`Example app_3100 listening at http://localhost:${app_3100_port}`);
});

