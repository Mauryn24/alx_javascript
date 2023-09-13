#!/usr/bin/node
// This line specifies the interpreter for the script {node.js}

const req = require('request');
// Import the 'request' module

const fs = require('fs');
// import the file system operations

// Check if the URL and file pat arguements are provided
if (process.argv.length < 4) {
    console.error('Usage: node 3-request_store.js <URL> <File Path>');
    process.exit(1); // Exit the script with an error
}

// Get the URL and file path from the command line arguments
const url = process.argv[2]; //The url to fetch
const filePath = process.argv[3]; //The file path to store the data

// create a writable file stream for storing the response
const fileStream = fs.createWriteStream(filePath, { encoding: 'utf-8'});

// Send a GET request to the specified URL
const httpRequest = req.get(url).pipe(fileStream);

//Handle sucessful completion of writing to the file
fileStream.on('finish', () => {
    console.log(`Wrote ${url} to ${filePath}`);
});

//Handle errors
fileStream.on('error', (error) => {
    console.error('Error:', error.message);
    process.exit(1);
});