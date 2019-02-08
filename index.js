const express = require('express');
const mongo = require('./mongo')

var port = process.argv[2] || 3000;

console.log(`server runs on http://localhost:${port}`)

var app = express();

app.use(express.json());

app.use('/static', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/public'));



app.get('/data', (req, res) => {
    var data = req.body;
    mongo.getCredentials(data, function (result){
        res.json(result)
    });
});

app.post('/update', (req, res) => {
    var data = req.body
    mongo.updateCredentials(data.filter, data.obj, function (result) {
        res.json(result);
    })
})

app.post('/data', (req, res) => {
    var data = req.body;
    mongo.insertCredentials(data, function (result) {
        res.json(result);
    });
});

app.post('/del', (req, res) => {
    var data = req.body;
    mongo.deleteCredentials(data, function (result) {
        res.json(result);
    })
})

app.listen(port);