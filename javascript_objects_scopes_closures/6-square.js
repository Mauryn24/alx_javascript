!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const PrevSquare = require('./5-square');

class Square extends PrevSquare {
    charPrint() {
        const myChar = c === undefined ? 'X' : c;
        for (let i = 0; i < this.height; i++) {
            let myVar = '';
            let y = 0;
            while (y < this.width) {
                myVar += myChar;
                y++;
            }
            console.log(myVar);
        }
    }
}

module.exports = Square;