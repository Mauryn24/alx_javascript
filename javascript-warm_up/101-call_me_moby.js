#!/usr/bin/bash/node

//Export the function executeXTimes
exports.executeXTimes = function(x, theFunction) {
    //use the while loop to execute theFunction x times
    for (let i = 0; i < x; i++) {
        //call theFunction
        theFunction(i);
    }
}