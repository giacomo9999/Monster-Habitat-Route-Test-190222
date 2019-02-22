const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
let port = process.env.PORT || 3001;
let db = process.env.DB;

const monster = require("./routes/monster.route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/monsters", monster);

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connection successful."))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
