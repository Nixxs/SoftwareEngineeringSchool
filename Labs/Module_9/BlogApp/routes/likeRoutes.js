const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/:userid", (req, res) => {
  likeController.getLikes(req, res);
});

// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
  likeController.createLike(req.body, res);
});

router.delete("/:id", (req, res) => {
    likeController.deleteLike(req, res);
});

module.exports = router;
