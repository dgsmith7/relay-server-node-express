"use strict";

(function () {
    require('dotenv').config();
    //console.log(`${process.env.OPEN_WX_MAP_KEY}`);
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const app = express();
    let port = 8080;

    app.use(bodyParser.json());

    // Here we are serving up http pages with GET
    app.use(express.static(path.join(__dirname, 'public')));

    // Some JSON object to be sent back to a request
    let someData = {quote: 'Free your mind and your ass will follow!'};

    // This reacts to POST requests.  And here I am doing different things based on the
    // body of the post request sent.  This will allow me to, for example, make an API
    // call from the backend using environment variables to avoid exposing API keys to
    // the front end.
    app.post('/', (req, res) => {
        console.log("The req body as per server", req.body);
        if (req.body.info === 'data') {
            someData = {quote: "Everything good is wild and free."}
            res.send(JSON.stringify(someData));
        } else {
             let url = "https://api.themoviedb.org/3/search/movie?api_key="+process.env.TMDB_KEY+"&query='Fame'&language=en-US&page=1&include_adult=false";

             fetch(url, {method: 'GET',})
                .then((result) => result.json())
                .then((result) => {
                    res.send(JSON.stringify(result));
                })
                .catch((e) => {
//                alert("There was an error getting local conditions! Check the console for details");
                console.log("There was an error - Error object: " + e);
            });

        }
    });

    app.listen(port, function () {
        console.log(`Listening on port ${port}!`);
    });

    function getLocalWxData() {  // use ajax to get data from api
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=32.88&lon=96.71&units=imperial&appid=${process.env.OPEN_WX_MAP_KEY}`
        $.get(url).done(function (data) {// once we have lat lon from zip code get the local area name
            //someData = data;  // assign file contents to global variable
            return data;
    //        lookUpLocationNameByLatLon(location.lat, location.lon);  // now get local name
        }).fail(function (jqXhr, status, error) {
            alert("There was an error getting local conditions! Check the console for details");
            console.log("Response status: " + status);
            console.log("Error object: " + error);
            return error;
        });
    }


    module.exports = app;
}());