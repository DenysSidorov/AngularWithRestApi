// Mock NodeJS server for PUT request

var request = require('request');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var item_d = 36;
    var obj = {
    "id": item_d,
    "region_id": 800,
    "street": "Тест 11",
    "house": "112",
    "longitude": "123",
    "latitude": "123",
    "status": "DEACTIVATED",
    "exploitation": 0
};

    var options = {
        url: 'http://demo.aser360.com/api/v1/counter-addresses/' + item_d,
        method: 'PUT',
        json: obj,

    };
    request(options, function (error, response, body) {
        if (error) console.log(error );
        if (!error && response.statusCode == 200) {

             console.log(response.statusCode);
            res.send(response.statusCode); // Print the shortened url.
        }
    });
});


app.listen(8080);
console.log('Express server listening on port 8080');
