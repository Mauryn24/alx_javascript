#!/usr/bin/node

// Import necessary modules
const request = require('request');

// first arguement - movieid
const movieId = process.argv[2];

//fetch the movies from the url
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

//send a get request to the url
request.get(url, { encoding: 'utf-8' }, function(error, response, body) {
    if (error) {
        // Handle and display any errors
        console.error(error);
    }
    // convert json to object
    const movieData = JSON.parse(body);
    movieData.characters.forEach(actors => {
        request.get(actors, function(error, response, body) {
            if (error) {
                // Handle and display any errors
                console.error(error);
            }
            // convert json to object
            const actorData = JSON.parse(body);
            console.log(actorData.name);
        })

    })
});