var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');
const path = require('path');

app.use(cors());
app.use('/', (req, res) => {
   
    fs.readFile('/Users/pctr487330/Desktop/Newfile.txt', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(8080);