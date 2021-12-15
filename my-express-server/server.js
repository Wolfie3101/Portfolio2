//jshint esversion:6

const express = require("express");
const app = express();

//to je da pošleš neke ko želi kdo "gettat" tvoj server.
//prvi parameter je website destination
//ko on napiše testwebsite.com => gre v /
//pol pe recimo da naredi test.com/test ==> gre v /test
//req res je callback, kaj naj naredi ko se zgodi request

//https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384608#overview

//zaženeš z node ime.js
//sam te moreš vsakič reštartat, zato maš z npm nodemon
//narediš nodemon ime.js, te pa vsakič ko shraniš se ti samo resetira. dope

app.get("/", (req, res) => {
  res.send("<h1>Hello Root</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello Contact</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About:</h1>");
});

//tak narediš server
app.listen(3000, function () {
  console.log("listening on port 3000");
});
