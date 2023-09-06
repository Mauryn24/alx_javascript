#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            //if w or h is equal to 0 or not a number
        } else {
            //initialize the attribute width with the value of w
            this.width = w;
            //initialize the attribute of height with the value of h
            this.height = h;
        }
    }
    // create an instance method called print() to print the rectangle using 'x'
    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                // print 'x' repeated for the width of the rectangle
                console.log('X'.repeat(this.width));
            }
        }
    }

    // exchanges the value of width and height
    rotate() {
        // Exchange the values of width and height
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        // double the width and height
        this.width *= 2;
        this.height *= 2;
    }
}

modules.exports = Rectangle;

// square class that inherits from rectangle

const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
    constructor(size) {
        //call the constructor of the rectangle class using super
        super(size, size);
    }
}

modules.exports = Square