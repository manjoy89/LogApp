var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');
const path = require('path');

app.use(cors());
app.use('/', (req, res) => {
    res.send("Hello Manoj");
    console.log('Hello Manoj');

  //  fs.readFile('/Users/pctr487330/Desktop/Newfile.txt', (err, data) => {
    //    if (err) throw err;
  //      res.send("Hello Manoj");
  //  });
});

app.listen(5000);