!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const Rectangle = require('./5-square.js');

class Square extends Rectangle {
    constructor (size) {
        super(size, size);
        // call the constructor of the rectangle class
    }

    charPrint (c) {
        if (c == undefined) {
            c = 'X';
        }
        for (let i = 0; i < this.size; i++) {
            console.log(c.repeat(this.size));
        }
    }
}