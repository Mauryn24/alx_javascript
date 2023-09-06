#!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const PrevSquare = require('./5-square');

class Square extends PrevSquare {
    charPrint() {
        // Define a variable to hold the character to be printed
        const myChar = c === undefined ? 'X' : c;
        // iterate through the height
        for (let i = 0; i < this.height; i++) {
            // Define a variable to hold the row of the character
            let myVar = '';
            // iterate over the width
            for (let j = 0; j < this.width; j++) {
                //concentate the character to the row
                myVar += myChar;
            }

            // log the row of characters to the console
            console.log(myVar);
        }
    }
}

module.exports = Square;