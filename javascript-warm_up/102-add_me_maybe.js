#!/usr/bin/Node
exports.addme = function (number, theFunction) {
    theFunction(++number);
};