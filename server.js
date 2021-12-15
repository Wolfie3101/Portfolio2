const express = require("express");
const app = express();
const path = __dirname;

app.listen(3000, function () {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path + "/index.html");
});

app.get("/Tindog", (req, res) => {
  //res.sendFile(path + "/Tindog_bootstrap/index.html");
  app.use(express.static(path + "Tindog_bootstrap/index.html"));
});
