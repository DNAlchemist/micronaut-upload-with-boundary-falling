const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");

const request = {};

function getRequestParams(options) {
    const body = getBody();
    const headers = getHeaders();

    return {
        body,
        headers,
        method: 'POST'
    };
}

function getHeaders() {
    return {};
}

function getBody() {
    const form = FormData();

    form.append("diagram_1.dmn", fs.createReadStream("../diagram_1.dmn"));
    return form;
}

const requestParams = getRequestParams();
const serverResponse = fetch("http://localhost:9102/deployment/create", requestParams);

serverResponse
    .then(it => console.log(it));

