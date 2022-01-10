//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//nova stvarca da uporabiš ejs:
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();

  var currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;
    default:
      console.log("Error");
      break;
  }
  //    to je fora ejs: da daš neki variable iz js ter passaš v html kot var
  //    res.render("IME.ejs, {HTMLVAR : JSVAR}")
  //        !pazi!: IME.ejs file more bit v ./views/IME.ejs. če maš sam tak nebo prijelo
  //    idi gledat list.ejs
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
