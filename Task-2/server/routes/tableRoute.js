const mongoose = require("mongoose");
const express = require("express");
const {
  getData,
  addData,
  updateData,
} = require("../controllers/tableController");

const router = express.Router();

router.get("/item", getData);
router.post("/addItem", addData);
router.post("/updateItem", updateData);

module.exports = router;
