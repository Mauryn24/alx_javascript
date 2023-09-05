*javascript warmup*

*Why JavaScript programming is amazing:*

JavaScript is considered amazing for several reasons:

    1. It is a versatile and powerful language that runs in web browsers, making it essential for front-end web development.
    2. JavaScript can be used for both client-side and server-side development (Node.js), providing a full-stack development capability.
    3. It has a large and active community, with a vast ecosystem of libraries and frameworks.
    4.JavaScript is relatively easy to learn and has a forgiving syntax.
    5. It supports asynchronous programming, making it suitable for handling events and performing non-blocking operations.

*How to run a JavaScript script:*

You can run JavaScript code in various environments, including web browsers, Node.js, and even within HTML files. Here are some common ways to run JavaScript:

In a browser: Open the browser's developer console (usually by pressing F12 or right-clicking and selecting "Inspect"), and you can enter JavaScript code directly.
Using Node.js: Save your JavaScript code in a .js file and run it using the node command in your terminal (e.g., node filename.js).


Embedding in HTML: You can include JavaScript within <script> tags in an HTML file, and it will run when the page loads.


*How to create variables and constants:*
In JavaScript, you can create variables using var, let, or const. Constants are created using const. For example:


    var myVariable = 42;
    let anotherVariable = "Hello";
    const PI = 3.14159;
Differences between var, const, and let:

var has function-level scope and can be redeclared within the same scope.
let has block-level scope and can be reassigned within the same scope but not redeclared.
const also has block-level scope but cannot be reassigned or redeclared.
Data types available in JavaScript:
JavaScript has several data types, including:

Primitive types: number, string, boolean, undefined, null, symbol, and bigint.
Reference types: object (including arrays and functions).


*How to use if and if...else statements:*
JavaScript uses if and if...else statements for conditional execution. For example:


    if (condition) {
        // code to execute if the condition is true
    } else {
        // code to execute if the condition is false
    }


*How to use comments:*
You can use // for single-line comments and /* */ for multi-line comments in JavaScript:


    // This is a single-line comment
    /* This is a
    multi-line comment */

*How to assign values to variables:*
You can assign values to variables using the = operator:


    let myVariable = "Hello, world!";

*How to use while and for loops:*


JavaScript provides while and for loops for iterative operations. For example:
    // Using a while loop
    while (condition) {
        // code to execute while the condition is true
    }

    // Using a for loop
    for (let i = 0; i < 5; i++) {
        // code to execute in each iteration
    }

*How to use break and continue statements:*


break is used to exit a loop prematurely.
continue is used to skip the current iteration and move to the next one in a loop.

What is a function and how do you use functions:
A function is a block of code that can be called and executed. Here's how you define and use a function in JavaScript:


    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet("Alice"); // Calling the function

What does a function that does not use any return statement return:
A function that doesn't have a return statement or explicitly returns a value will return undefined by default.



*Scope of variables:*
Variables in JavaScript have function-level or block-level scope, depending on whether they are declared with var, let, or const. Block-level scope means the variable is only accessible within the block where it's defined.


*Arithmetic operators and how to use them:*

JavaScript supports arithmetic operators like +, -, *, /, % for addition, subtraction, multiplication, division, and modulo, respectively.


*How to manipulate a dictionary:*


In JavaScript, dictionaries are typically represented as objects. You can add, access, and modify key-value pairs like this:


    const myDict = {
        key1: "value1",
        key2: "value2",
    };

    myDict.key3 = "value3"; // Adding a new key-value pair
    const value = myDict.key1; // Accessing a value
    myDict.key2 = "new_value"; // Modifying a value


*How to import a file:*


In JavaScript, file imports depend on the environment. In Node.js, you can use require to import modules. In the browser, you can use import and export statements when using JavaScript module