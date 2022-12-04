"use strict";

(function () {
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const app = express();
    let port = 8080;

    app.use(bodyParser.json());

    // Here we are serving up http pages with GET
    app.use(express.static(path.join(__dirname, 'public')));

    // Some JSON object to be sent back to a request
    const someData = {quote: "Everything good is wild and free."};

    // This reacts to POST requests.  And here I am doing different things based on the
    // body of the post request sent.  This will allow me to, for example, make an API
    // call from the backend using environment variables to avoid exposing API keys to
    // the front end.
    app.post('/', (req, res) => {
        console.log("The req body as per server", req.body);
        if (req.body.info === 'data') {
            res.send(JSON.stringify(someData));
        } else {
            res.send(JSON.stringify({quote: 'This will call the API behind the scenes and you can do different things based on body of the request.'}));
        }
    });

    app.listen(port, function () {
        console.log(`Listening on port ${port}!`);
    });

    module.exports = app;
}());