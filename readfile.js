var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');

app.use(cors());
app.use('/', (req, res) => {

    fs.readFile('/Users/pctr487330/Desktop/Newfile.txt', (err, data) => {
        if (err) throw e;
        res.send(data);
    });
});

app.listen(5000);