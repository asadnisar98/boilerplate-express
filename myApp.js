let express = require('express');
require('dotenv').config();
let app = express();

const handlerfunc = (req, res) => {
    app.use("/public", express.static(__dirname + "/public"));
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
}

const jsonhandle = (req, res) => {
    let response;
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "hello json";
    }
    res.json({"message": response});
}

app.get('/json', jsonhandle);
app.get('/', handlerfunc);

module.exports = app;
