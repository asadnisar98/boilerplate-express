let express = require('express');
require('dotenv').config();
let app = express();


const handlerfunc = (req, res) => {

    app.use("/public", express.static(__dirname + "/public"));
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);

} 

const jsonhandle = (req, res) => {
    let response = "Hello Json".toUpperCase(); // now becomes "HELLO WORLD"
    if (process.env.MESSAGE_STYLE === "allCaps") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello Json";
      }
    app.get(res.json({"message": response}));
}

app.get('/json', jsonhandle);

app.get('/', handlerfunc);
































 module.exports = app;
