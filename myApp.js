let express = require('express');
let app = express();


const handlerfunc = (req, res) => {

    app.use("/public", express.static(__dirname + "/public"));
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);

} 

const jsonhandle = (req, res) => {
    app.get(res.json({"message": "Hello json"}));
}

app.get('/json', jsonhandle);

app.get('/', handlerfunc);
































 module.exports = app;
