#!/usr/bin/node

req = require('request');
//import the request module

const url = process.argv[2];
//get the url from the command line arguements

//send a Get request to the specified url
req.get(url, (error, response) => {
    if (error) {
        //handle and display errors
        console.error('Error:', error.message);
        process.exit(1);
    }
    //Display the status code
    console.log('code:', response.statusCode);
})