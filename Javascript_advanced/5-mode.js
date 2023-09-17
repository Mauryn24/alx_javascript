#!/usr/bin/node
// interpreter as node

function changeMode(size, weight, transform, background, color) {
    // Define a function that applies the styles
    function applyStyles() {
        //select the body element of the page
        const body = document.body;
        
        // set the specified styles
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
    return applyStyles;
}

function main() {
    // set variable spooky
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    
    // set the var darkmode
    let darkmode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    
    // call the function
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // create a paragraph
    var p = createElement('p');
    
    // set the text
    p.textContent = 'Welcome Holberton!';

    // add a button
    var button = createElement('button');
    button.textContent = 'Spooky';

    // add Dark Mode
    var button2 = createElement('button');
    button2.textContent = 'Dark Mode';

    // add Scream Mode button
    var button3 = createElement('button');
    button3.textContent = 'Scream Mode';

    // append the elements to the body
    document.body.append(p, button, button2, button3);
}
// call main function when the DOM is ready
document.addEventListener('DOMContentLoaded', main);