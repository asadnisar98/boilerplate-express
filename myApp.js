let express = require('express');
require('dotenv').config();
let app = express();


const handlerfunc = (req, res) => {

    app.use("/public", express.static(__dirname + "/public"));
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);

} 

const jsonhandle = (req, res) => {
    const message = process.env.MESSAGE_STYLE.toUpperCase();
    app.get(res.json({"message": message}));
}

app.get('/json', jsonhandle);

app.get('/', handlerfunc);
































 module.exports = app;
