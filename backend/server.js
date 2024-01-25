const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Shanali Routes
const docRoutes = require("./routes/doctors");
const Routes = require("./routes/nurses");
const Route = require("./routes/surgeons");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//shanali middlewares
app.use(docRoutes);
app.use(Routes);
app.use(Route);

const PORT = 9000;
const DB_URL =
  "mongodb+srv://User:1xnuuagtegvh7rVg@cluster0.rcj6dsu.mongodb.net/";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log("DB Connection error", err));

app.listen(PORT, () => {
  console.log(`App is Running on ${PORT}`);
});
