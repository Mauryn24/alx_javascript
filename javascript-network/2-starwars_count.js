#!/usr/bin/node

const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node starwars_count.js <API URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Send an HTTP GET request to the specified API URL
request.get(apiUrl, { json: true }, (error, response, data) => {
  if (error) {
    // Handle and display any errors
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    // Check if the response status code is not 200 (OK)
    console.error('Error: Unable to fetch data. Status code:', response.statusCode);
    process.exit(1);
  }

  // Filter the movies where Wedge Antilles (character ID 18) is present
  const moviesWithWedgeAntilles = data.results.filter(movie =>
    movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
  );

  // Print the number of movies where Wedge Antilles is present
  console.log(moviesWithWedgeAntilles.length.toString()); // Convert the count to a string
});