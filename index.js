const express = require("express");
const connectdb = require("./config/database");
const app = express();
connectdb();
app.listen(4000, () => {
  console.log("app is listening in port 4000");
});
