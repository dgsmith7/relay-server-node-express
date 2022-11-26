"use strict";

(function () {

//    const createError = require('http-errors');
    const express = require('express');
    const path = require('path');
//    const cookieParser = require('cookie-parser');
//    const logger = require('morgan');

//    const indexRouter = require('./routes/index');
//    const usersRouter = require('./routes/users');

    const app = express();
    let port = 8080;
// view engine setup
//    app.set('views', path.join(__dirname, 'views'));
//    app.set('view engine', 'jade');

//    app.use(logger('dev'));
//    app.use(express.json());
//    app.use(express.urlencoded({extended: false}));
//    app.use(cookieParser());

    const someData = {quote: "Everything good is wild and free."};
    app.use(express.json(someData));
    app.use(express.static(path.join(__dirname, 'public')));
    // app.get('/', function (req, res) {
    //     res.sendFile(path.join(__dirname,'/index.html'));
    //     res.json(someData);
    // });
    app.listen(port, function () {
        console.log(`Listening on port ${port}!`);
    });

//    app.use('/', indexRouter);
//    app.use('/users', usersRouter);

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
    app.use(function (req, res, next) {
        next(createError(404));
    });

// error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    module.exports = app;

}());