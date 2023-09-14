#!/usr/bin/node

// import request
const { error } = require('console');
const req = require('request');

// first command line arguement
const APIURL = process.argv[2];

// fetching data from url
req.get(APIURL, function(error, response, body) {
    // checking errors
    if (error) {
        console.error(error);
    }
    // converting json into js objects
    const data = JSON.parse(body);
    
    let count = 0;
    //loop through the data
    for(const x of data.results) {
        // checking if the characterid 18 is present in the characters arrays
        if (x.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'))
        // incrementing the number of times we have encountered charid 18
            count++;
    }
    // printing the number of times we have encountered charid 18
    console.log(count);
})