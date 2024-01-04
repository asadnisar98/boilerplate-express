let express = require('express');
let app = express();

const handlerfunc = (req, res) => {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
} 


app.get('/', handlerfunc);
































 module.exports = app;
