let express = require('express');
require('dotenv').config();
let app = express();


const handlerfunc = (req, res) => {

    app.use("/public", express.static(__dirname + "/public"));
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);

} 

const jsonhandle = (req, res) => {
    let response = process.env.MESSAGE_STYLE;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello Json".toUpperCase();
      } else {
        response = "HELLO JSON";
      }
    app.get(res.json({"message": response}));
}

app.get('/json', jsonhandle);

app.get('/', handlerfunc);
































 module.exports = app;
