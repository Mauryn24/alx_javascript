#!/usr/bin/node

// import request
const req = require('request');

// first command line arguement
const APIURL = process.argv[2];

req.get(APIURL, function (error, response, body) {
  // checking errors
  if (error) {
    console.error(error);
  }
  // converting json into js objects
  const data = JSON.parse(body);

  // creating an empty object
  const obj = {};
  // loop through the data
  data.forEach(x => {
    if (x.completed === true) {
      if (obj[x.userId]) {
        obj[x.userId]++;
      } else {
        obj[x.userId] = 1;
      }
      // console.log(obj);
    }
    // console.log(obj);
  });
  console.log(obj);
});
