#!/usr/bin/node
// interpreter

// create function
function welcomeMessage(fullname) {
    alert('welcome ' + fullname);
}
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
// callback variables to functions
guillaume();
alex();
fred();