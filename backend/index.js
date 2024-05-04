const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3011;

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb+srv://VikrantVerma:9044607960@cluster0.yag7mys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
