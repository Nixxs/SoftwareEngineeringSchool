const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/:userid", (req, res) => {
    commentController.getComments(req, res);
});

// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
    commentController.createComment(req.body, res);
});

module.exports = router;