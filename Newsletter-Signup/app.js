//jshint esversion: 6

//  MODULES
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const request = require("request");
const app = express();

//  MAILCHIMP
const APIkey = "ead56f58adffd75d6fe233aebcf9fba7-us20";
const AudienceID = "b749a2fd8f";

app.use(bodyParser.urlencoded({ extended: true }));

//STATIC FILE NE MOREŠ KAR TAK DAT GOR(slike, local css itd. itd. itd.)
//to narediš tako, da uporabiš express.static("IMEMAPE"));
//tu not v mapo pa pol daš stvari kot so css, images itd. itd.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

//req.body.NAME gre v !NAME!
app.post("/", (req, res) => {
  var fName = req.body.Fname;
  var lName = req.body.Lname;
  var Email = req.body.email;

  //      v dokumentaciji mailchimpa si pogledo kak je zgrajen object members, in ga isto tu naredis
  //      sam da vkljucis zraven stvari
  var data = {
    members: [
      {
        email_address: Email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  //    JSON => STRING
  var jsonData = JSON.stringify(data);

  //    najdli v dokumentaciji spet url ter dodali audienceID
  const url = "https://us20.api.mailchimp.com/3.0/lists/" + AudienceID;
  //    https://nodejs.org/api/http.html -> ctrl + f na http.request da vidiš kaj vse maš oz. kaj rabiš
  //    Tu not pa smo dali da moremo z metodo post in kakšna je avtorizacija (ime:APIkey)
  //    kaj točno vse RABIŠ tu, pa pogledaš spet na api, tam po curl, bo auth pa method itd. itd.
  const options = {
    method: "POST",
    auth: "Wolfie310a1:" + APIkey,
  };

  // !  KO BI RAD Z SERVERJA KAJ REQUESTAL GA DAŠ V CONST VAR
  // ! https.request rabi url ter options
  //   pol pa spet z .on dostopamo do date, katerega nam pošlje server(console.log data)

  //    pazi, response tu je data iz requesta
  //    res pa je od zgornjega posta
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  //    z request.write(jsonData) pa pošljemo serverju data. more bit nakonci .end
  request.write(jsonData);
  request.end();
});

//  ko bi rad retry, samo narediš action recimo /failure method post
//  narediš app.post ("/FAILURE")
//  pol pa samo redirect na root
app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
