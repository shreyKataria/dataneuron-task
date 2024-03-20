const express = require("express");
const router = require("./routes/tableRoute");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const port = 9000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use("/api", router);

// db
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to db ");
});

// server
app.listen(port, () => {
  console.log(`server is runnning on port ${port}`);
});
