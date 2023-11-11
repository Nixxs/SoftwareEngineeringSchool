const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorController")

router.get("/add", calculatorController.add);

router.get("/subtract", calculatorController.subtract);

router.get("/divide", calculatorController.divide);

router.get("/multiply", calculatorController.multiply);

module.exports = router;
