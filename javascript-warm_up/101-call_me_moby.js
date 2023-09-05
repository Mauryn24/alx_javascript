#!/usr/bin/bash/node

//Export the function executeXTimes
exports.executeXTimes = function(x, theFunction) {
    //use the while loop to execute theFunction x times
    let i = 0;
    while (i < x) {
        //call the function
        theFunction();
        i++;
    }
}