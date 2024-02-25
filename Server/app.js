
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const port = 8000;

app.post("/", (req, res) => {
  res.status(201).json("Server created")
});

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
