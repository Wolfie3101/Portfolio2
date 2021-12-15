//greš na npmjs, najdeš module ki bi ga rad
//npm install XXXXXX, kjer X je ime modula
//potem narediš var ime = require('ime');
//v dokumentaciji modula pol vidiš kaj lahko delaš z tem

var superheroes = require("superheroes");
var supervillains = require("supervillains");

console.log(superheroes.random() + " vs. " + supervillains.random());
