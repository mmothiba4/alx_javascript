#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
//Request URL

request(url, (error, response, body) => {
    //Printing the error if occurred
    if (error) {
        console.error(error);
    }
    //Printing status code
    console.log('code: ${response.statusCode}');
    //Printing body
    console.log(body);
});

