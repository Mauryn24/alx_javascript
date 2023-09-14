// Import the request module
const request = require('request');

// Define the API URL
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Make a GET request to the API
request(API_URL, function(error, response, body) {
  if (error) {
    console.log("Something went wrong while making the request to the API");
    return;
  }

  // Parse the JSON response
  const todos = JSON.parse(body);

  // Create a dictionary to store the number of completed tasks for each user
  const completedTasks = {};

  // Iterate over the todos
  todos.forEach(todo => {
    // Get the user ID
    const userId = todo.userId;

    // If the task is completed, increment the counter for the user
    if (todo.completed) {
      if (!completedTasks.hasOwnProperty(userId)) {
        completedTasks[userId] = 0;
      }
      completedTasks[userId]++;
    }
  });

  // Convert the dictionary to a JSON object
  const outputJson = JSON.stringify(completedTasks, null, 2);

  // Print the JSON object, removing the newline and closing bracket from the last line
  console.log(outputJson.slice(0, -2) + " " + "}");
});