let express = require('express');
let app = express();

const handlerfunc = (req, res) => {
    res.send('Response String')
} 


app.get('/', handlerfunc);
































 module.exports = app;
