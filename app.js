const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const monster = require("./routes/monster.route");
const app = express();

app.use("/monsters", monster);

let port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
