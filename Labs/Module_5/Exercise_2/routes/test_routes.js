const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is the root of other_routes")
})

router.get("/test", (req, res) => {
    res.send("this is the /test route")
})

router.get("/test2", (req, res) => {
    res.send("this is the /test2 route")
})

module.exports = router;