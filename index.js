const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.listen(4000, () => {
  console.log("app is listening in port 4000");
});
