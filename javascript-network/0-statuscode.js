#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
//Request URL

request(process.argv[2], function (error, response) {
    //Printing the error if occurred
    if (error) {
        console.error(error);
    }
    //Printing status code
    console.log('code:', response && response.statusCode);
});

