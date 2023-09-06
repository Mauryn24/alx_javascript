class Rectangle {
    constructor(width, height) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            //if w or h is equal to 0 or not a number
            return{};
        } else {
            //initialize the attribute width with the value of w
            this.width = w;
            //initialize the attribute of height with the value of h
            this.height = h;
        }
    }
}
module.exports = Rectangle;