"use strict";

(function () {

    function getStuff() { // The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

    }

    function headStuff() { // The HEAD method asks for a response identical to a GET request, but without the response body.

    }

    function postStuff() { // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

    }

    function putStuff() { // The PUT method replaces all current representations of the target resource with the request payload.

    }

    function deleteStuff() { // The DELETE method deletes the specified resource.

    }

    function connectStuff() { // The CONNECT method establishes a tunnel to the server identified by the target resource.

    }

    function optionsStuff() { // The OPTIONS method describes the communication options for the target resource.

    }

    function traceStuff() { // The TRACE method performs a message loop-back test along the path to the target resource.

    }

    function patchStuff() { // The PATCH method applies partial modifications to a resource.

    }
    let displayArea = document.querySelector("#display-area");
    let getButton = document.querySelector("#get-button");
    getButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Get' button";
    })
    let headButton = document.querySelector("#head-button");
    headButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Head' button";
    })
    let postButton = document.querySelector("#post-button");
    postButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Post' button";
    })
    let putButton = document.querySelector("#put-button");
    putButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Put' button";
    })
    let deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Delete' button";
    })
    let connectButton = document.querySelector("#connect-button");
    connectButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Connect' button";
    })
    let optionsButton = document.querySelector("#options-button");
    optionsButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Options' button";
    })
    let traceButton = document.querySelector("#trace-button");
    traceButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Trace' button";
    })
    let patchButton = document.querySelector("#patch-button");
    patchButton.addEventListener("click", () => {
        displayArea.innerHTML = "You clicked the 'Patch' button";
    })

}());