"use strict";

(function () {

    function getStuff() {
        displayArea.innerHTML += "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. In this situation, we are using GET to fetch the HTML page and not sending a GET request with FETCH.";
    }

    function headStuff() {
        displayArea.innerHTML += "The HEAD method asks for a response identical to a GET request, but without the response body. ";
    }

    function postStuff() {
        displayArea.innerHTML += " The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server. And here I can do different things based on the body of the post request sent.  This will allow me to, for example, make an API call from the backend using environment variables to avoid exposing API keys to the front end.  Try altering the body of this post request in the code.";
        const url = 'http://localhost:8080';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({info: 'data'}) // try changing this to something besides 'data'
        };
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("Data from backend", data);
                displayArea.innerHTML += "\nPOST returned '" + data.quote + "'";
            })
            .catch((e) => console.log("There was an error with the POST request:\n" + e));
    }

    function putStuff() {
        displayArea.innerHTML += "The PUT method replaces all current representations of the target resource with the request payload.";
    }

    function deleteStuff() {
        displayArea.innerHTML += "The DELETE method deletes the specified resource.";
    }

    function connectStuff() {
        displayArea.innerHTML += "The CONNECT method establishes a tunnel to the server identified by the target resource.";
    }

    function optionsStuff() {
        displayArea.innerHTML += "The OPTIONS method describes the communication options for the target resource.";
    }

    function traceStuff() {
        displayArea.innerHTML += "The TRACE method performs a message loop-back test along the path to the target resource.";
    }

    function patchStuff() {
        displayArea.innerHTML += "The PATCH method applies partial modifications to a resource.";
    }

    let displayArea = document.querySelector("#display-area");
    let getButton = document.querySelector("#get-button");
    getButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Get' button. ";
        getStuff();
    })
    let headButton = document.querySelector("#head-button");
    headButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Head' button. ";
        headStuff();
    })
    let postButton = document.querySelector("#post-button");
    postButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Post' button. ";
        postStuff();
    })
    let putButton = document.querySelector("#put-button");
    putButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Put' button. ";
        putStuff();
    })
    let deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Delete' button. ";
        deleteStuff();
    })
    let connectButton = document.querySelector("#connect-button");
    connectButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Connect' button. ";
        connectStuff();
    })
    let optionsButton = document.querySelector("#options-button");
    optionsButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Options' button. ";
        optionsStuff();
    })
    let traceButton = document.querySelector("#trace-button");
    traceButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Trace' button. ";
        traceStuff();
    })
    let patchButton = document.querySelector("#patch-button");
    patchButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Patch' button. ";
        patchStuff();
    })

}());