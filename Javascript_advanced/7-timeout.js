#!/usr/bin/node
// interpreter

// log to the console Final code block to be executed
console.log('Start of the execution queue');
// Log to the console Final code block to be executed using setTimeout (with delay of 0)
setTimeout(() => {
    console.log('Start of the execution queue');
})

// Using a loop that iterates 100 times, each iteration logs to the console the iteration number
for (let i=0; i < 101; i++) {
    console.log(i);
}
console.log('End of the loop printing');