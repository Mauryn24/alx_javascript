#!/usr/bin/node

function welcome(firstName, lastName) {
    const fullname = `${firstName} ${lastName}`;
    function displayFullName() {
        alert('welcome ' + fullname + '!');
    }
    return displayFullName();
    //console.log(`Welcome ${firstName} ${lastName}`);
}
welcome('John', 'Doe');
displayFullName();