#!/usr/bin/node
const request = require('request');
//Request URL
let url = 'https://intranet.alxswe.com/status code';
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

