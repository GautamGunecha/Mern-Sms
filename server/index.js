console.clear();
require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// apis
app.get("/", (req, res) => res.status(200).send("Backend connected!"));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`.blue)
);
