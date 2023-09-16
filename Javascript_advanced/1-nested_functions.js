#!/usr/bin/node
// interpreter 

// global variable
let globalvariable =  'Welcome';

// function
function outer(){
    // calls globalvariable
    alert(globalvariable);
    let course = 'Holberton';
    // function inner
    function inner(){
        alert(globalvariable + ' ' + course);
        let exclamation = '!';
        function inception(){
            alert(globalvariable + ' ' + course + ' ' + exclamation);
        }
        // callback inception
        inception();
    }
    // callback inner
    inner();
}
// callback outer
outer();