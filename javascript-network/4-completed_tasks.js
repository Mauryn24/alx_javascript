#!/usr/bin/node
// specifies the interpreter for the script

const req = require('request');
// Import the 'request' module

if (process.argv.length < 4) {
    console.error('Usage: node 3-request_store.js <URL> <File Path>');
    process.exit(1); // Exit the script with an error
}

// The url to fetch
const apiUrl = process.argv[2];

// Initialize an object to store the count of completed tasks per user
const completedTasksByUser = {};

// Send an HTTP GET request to the specified API URL
request(apiUrl, { json: true }, (error, response, data) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1); // Exit the script with an error code in case of an error
  }

  if (response.statusCode !== 200) {
    console.error('Error: Unable to fetch data. Status code:', response.statusCode);
    process.exit(1); // Exit the script with an error code if the request fails
  }

  // Iterate through the fetched data to count completed tasks per user
  for (const task of data) {
    if (task.completed) {
      // If the task is completed, increment the user's count or initialize to 1
      completedTasksByUser[task.userId] = (completedTasksByUser[task.userId] || 0) + 1;
    }
  }

  // Print the results
  console.log(completedTasksByUser);
});