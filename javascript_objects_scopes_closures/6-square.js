!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const PrevSquare = require('./5-square.js');

class Square extends PrevSquare {
    charPrint() {
        const myChar = c === undefined ? 'X' : c;
        for (let i = 0; i < this.height; i++) {
            let myVar = '';
            for (let j = 0; j < this.width; j++) {
                myVar += myChar;
            }
            console.log(myVar);
        }
    }
}

module.exports = Square;