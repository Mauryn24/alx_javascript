#!/usr/bin/node

// Import the 'request' module
const req = require('request');

// Check if the movie ID argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node starwars_title.js <Movie ID>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL by appending the movieId to the base URL
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send an HTTP GET request to the specified URL
req.get(url, { encoding: 'utf-8' }, (error, response, body) => {
  if (error) {
    // Handle and display any errors
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    // Check if the response status code is not 200 (OK)
    console.error('Error: Unable to fetch movie data. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    // Try to parse the response body as JSON
    const movie = JSON.parse(body);
    //convert json data to objects
    if (movie.title) {
      // Check if the 'title' property exists in the response
      console.log(movie.title);
    } else {
      console.error('Error: Title not found in the response.');
    }
  } catch (parseError) {
    // Handle JSON parsing errors
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});