#!/usr/bin/node
// this line specifies the interpreter to use Node.js

const req = require('request');
//import the request module

const id = process.argv[2];
//get the url from the command line arguements

const url = "https://swapi-api.alx-tools.com/api/films/:id";
//line constructs the URL by appending the extracted ID to the base URL

req.get(url, {encoding: "utf-8"})
//This line sends an http GET request to the specified url with UTF-8 encoding

.on('data', function(data) {
    //event listener
    const title = JSON.parse(data);
    // turning json string to an object
    console.log(films.title);
    // print the title
})