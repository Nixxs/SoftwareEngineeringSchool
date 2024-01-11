const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
    postController.getPosts(res);
});

// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
    postController.createPost(req.body, res);
});

module.exports = router;