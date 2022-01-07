//      Modules
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

//  !   Da body-parser deluje
app.use(bodyParser.urlencoded({ extended: true }));

//      Prva spletna stran
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//      API ki dobi podatke iz post-a
app.post("/", (req, res) => {
  //    Variables
  //            dostopamo do podatka ki ga je uporabnik dal z req.body. zato rabimo bodyparser
  const query = req.body.cityName;
  const APIkey = "aceb0c76e2095b4e09e736226317ddc8";
  const units = "metric";
  //            razdeljen URL, da lahko spreminjamo po želji
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    APIkey +
    "&units=" +
    units +
    "";

  //    https module ma get, kjer dobi podatke iz spletne strani v HEX format
  https.get(url, (response) => {
    //      iz responsa vzemeš .on, not pa je data ("data", (data))
    response.on("data", (data) => {
      //    API Data Variables
      //        Da dobiš data, moreš prvo parsat v JSON, to pa maš JSON.parse(data)
      const weatherData = JSON.parse(data);
      //        Da pa dobiš podatke iz data, pa maš en extension (poglej spodaj v extended komentarjih)
      //        Tam lahko kopiraš pot ki jo prilepiš sem not
      const Temp = weatherData.main.temp;
      const Desc = weatherData.weather[0].description;
      const IconID = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + IconID + "@2x.png";

      //    HTML writes
      res.write("<h1>API test with OpenWeatherMap</h1> <hr>");
      res.write(
        "<h3>The temparature in " +
          query +
          " is " +
          Temp +
          " degrees celcius</h3>"
      );

      res.write("<p>The weather is currently " + Desc + " </p>");

      res.write("<img src=" + imageUrl + ">");

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});

//NodeJs maš boilerplate

//dodaš https
//na netu najdeš API, rabiš ključ
//najlažje dobit prek https.get(url,function(res){}); stvari, stvari so not v res
//da pa dobiš DATA ven, rabiš res.on("data",(data)=>{});
// pol maš hexadecimalno dato
//zato samo pol daš v neki const JSON.parse(data), pa ti da v json
//če pa bi mel v stringi, pa daš stringify

//da dobiš data vun, recimo temparaturo, pogledaš json format
//greš v var.NEKAJ.NEKAJ.NEKAJ.nevem, tak kot bi šo v classe v c++
//sam da se ne jebeš, maš extension: https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc/related
//to ko greš na spletno stran recimo https://api.openweathermap.org/data/2.5/weather?q=Maribor&appid=aceb0c76e2095b4e09e736226317ddc8&units=metric
//                                   to je api za to stvar
//ti lepo vse napiše pa lahko path kopiraš pa vse

//NE POZABIT, da "sendaš" več stvari, prvo vse writeaš, pol pa nakonci sam res.send();

//da dobiš iz formov vun stvari da jih pošlješ na server da lahko obdeluje podatke:
//npm i body-parser da ti inštalira package body-parser
//ga dodaš, te pa lahko skozi app.post(ker gre prek metode post v HTML)
//narediš isto filepath pa req/req =>, pol pa lahko z req.body dostopaš do date
//za specificen input, pac das req.body.NAME (name je name inputa, tam doli je cityName);
// pol pa to daš samo namesto query da ti najde za to mesto, in je to to
