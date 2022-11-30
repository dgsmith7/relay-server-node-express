"use strict";

(function () {

    function getStuff() {
        console.log("The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.");
        const url = 'http://localhost:8080';
        const options = {
            method: 'GET'
        };
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                displayArea.innerHTML += "\nGET returned " + data.quote;
            })
            .catch((e) => console.log("There was an error with the GET request:\n" + e));
    }

    function headStuff() {
        console.log("The HEAD method asks for a response identical to a GET request, but without the response body.")
    }

    function postStuff() {
        console.log(" The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.")
        const url = 'http://localhost:8080';
        const options = {
            method: 'POST'
        };
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                displayArea.innerHTML += "\nPOST returned '" + data.quote + "'";
            })
            .catch((e) => console.log("There was an error with the POST request:\n" + e));
    }

    function putStuff() {
        console.log("The PUT method replaces all current representations of the target resource with the request payload.")
    }

    function deleteStuff() {
        console.log("The DELETE method deletes the specified resource.")
    }

    function connectStuff() {
        console.log("The CONNECT method establishes a tunnel to the server identified by the target resource.")
    }

    function optionsStuff() {
        console.log("The OPTIONS method describes the communication options for the target resource.")
    }

    function traceStuff() {
        console.log("The TRACE method performs a message loop-back test along the path to the target resource.")
    }

    function patchStuff() {
        console.log("The PATCH method applies partial modifications to a resource.")
    }

    let displayArea = document.querySelector("#display-area");
    let getButton = document.querySelector("#get-button");
    getButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Get' button.  Check console for description.";
        getStuff();
    })
    let headButton = document.querySelector("#head-button");
    headButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Head' button.  Check console for description.";
        headStuff();
    })
    let postButton = document.querySelector("#post-button");
    postButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Post' button.  Check console for description.";
        postStuff();
    })
    let putButton = document.querySelector("#put-button");
    putButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Put' button.  Check console for description.";
        putStuff();
    })
    let deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Delete' button.  Check console for description.";
        deleteStuff();
    })
    let connectButton = document.querySelector("#connect-button");
    connectButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Connect' button.  Check console for description.";
        connectStuff();
    })
    let optionsButton = document.querySelector("#options-button");
    optionsButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Options' button.  Check console for description.";
        optionsStuff();
    })
    let traceButton = document.querySelector("#trace-button");
    traceButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Trace' button.  Check console for description.";
        traceStuff();
    })
    let patchButton = document.querySelector("#patch-button");
    patchButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Patch' button.  Check console for description.";
        patchStuff();
    })

}());