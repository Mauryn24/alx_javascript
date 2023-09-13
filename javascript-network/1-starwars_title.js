#!/usr/bin/node
// this line specifies the interpreter to use Node.js

const req = require('request');
// import the request module

const id = process.argv[2];
// get the movie ID from the command line arguments

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
// construct the URL by appending the extracted ID to the base URL

req.get(url, { encoding: 'utf-8' })
// This line sends an HTTP GET request to the specified URL with UTF-8 encoding

.on('data', function (data) {
    // event listener
    const title = JSON.parse(data).title;
    // parse the JSON string to an object
    console.log(title);
    // print the title
});