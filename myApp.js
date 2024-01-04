let express = require('express');
let app = express();

const handlerfunc = (req, res) => {
    res.send('Hello Express')
} 


app.get('/', handlerfunc);
































 module.exports = app;
