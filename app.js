"use strict";

(function () {
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const app = express();
    let port = 8080;

    app.use(bodyParser.json());

    const someData = {quote: "Everything good is wild and free."};
    app.use(express.static(path.join(__dirname, 'public')));

    // app.get('/', function (req, res) {
    //         console.log("Yes - in the server for page.")
    //         res.sendFile(path.join(__dirname,'/index.html'));
    // });
    app.get('/', (req, res) => res.send(someData));
    app.post('/', (req, res) => {
        console.log("The req body as per server", req.body);
        if (req.body.info === 'data') {
            console.log("yes data");
            res.send(JSON.stringify(someData));
        } else {
            console.log('no data');
            res.send(JSON.stringify({quote: 'This will call the API behind the scenes and you can do different things based on body of the request.'}));
        }
    });

    app.listen(port, function () {
        console.log(`Listening on port ${port}!`);
    });


    // app.get('/', (req, res) => {
    //     res.send('Hello World!')
    // })
    //
    // app.post('/', (req, res) => {
    //     res.send('Got a POST request')
    // })
    //
    // app.put('/user', (req, res) => {
    //     res.send('Got a PUT request at /user')
    // })
    //
    // app.delete('/user', (req, res) => {
    //     res.send('Got a DELETE request at /user')
    // })
    //
//    app.use(express.static(path.join(__dirname, 'public')))

    // catch 404 and forward to error handler
    // app.use(function (req, res, next) {
    //     next(createError(404));
    // });

// error handler
//     app.use(function (err, req, res, next) {
//         // set locals, only providing error in development
//         res.locals.message = err.message;
//         res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//         // render the error page
//         res.status(err.status || 500);
//         res.render('error');
//     });

    module.exports = app;

}());