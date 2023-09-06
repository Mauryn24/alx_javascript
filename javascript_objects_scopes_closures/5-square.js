#!/usr/bin/node

/*
    Square class that inherits from rectangle
*/

const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
    constructor (size) {
        //call the constructor of the rectangle class using super
        super(size, size);
    }
}

module.exports = Square;