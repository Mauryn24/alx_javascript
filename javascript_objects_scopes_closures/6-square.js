!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const Rectangle = require('./5-square.js');

class Square {
    constructor (size) {
        this.size = size;
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