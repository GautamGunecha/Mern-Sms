require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  helmet = require("helmet"),
  colors = require("colors"),
  mongoose = require("mongoose");

const app = express();
const notFound = require("./middleware/error");

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// mongoDB setup
const db = process.env.MONGODB_URI;
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongoDB".yellow)
);

app.get("/", (req, res) => res.status(200).send("Backend connected!"));
app.use("/", require("./routes/allRoutes"));

app.use(notFound);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`server running on http://localhost:${port}`.blue)
);
