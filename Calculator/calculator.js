const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const path = __dirname;

//samo index.html ne dela, ker server ni runnan v diru, ampak kompu
//! zato maš __dirname, kjerkoli maš to ti pol runna
//recimo console.log(__dirname);
//C:\Users\Dell-2\Downloads\backup\udemy projects\Calculator
//kul naret const path = __dirname pa maš mir

//fora je, naret morš gete za več strani, pol pa poste za več formov

app.get("/calc", (req, res) => {
  //console.log(__dirname);
  res.sendFile(path + "/index.html");
});
app.get("/bmiCalculator", (req, res) => {
  //console.log(__dirname);
  res.sendFile(path + "/bmiCalculator.html");
});
app.get("/", (req, res) => {
  res.send("pick a website: <br> /bmicalculator or <br> /calc");
});

app.post("/calculate", (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var BMI = weight / (height * height);
  res.send("Your BMI is: " + BMI);
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  num = num1 + num2;
  res.send("Odgovor je: " + num);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**
//ko kdo naredi formo oz. karkoli z post, naredip app.post(), in pol ko on stisne na submit se to zgodi
//če češ dobit podatke, rabiš npm i body-parser
//ga dodaš not, ter uporabiš app.use(bodyParser.urlencoded());
//console.log(req.body);
//dostopaš pa na izi, req.body.IME, to ime pa najdeš v .html */

/**
 */
