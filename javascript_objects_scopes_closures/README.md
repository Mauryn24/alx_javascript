*objects, closure and closures*

*objects*
Objects are one of the fundamental data types in JavaScript, and they are used to represent and organize data in a structured way. In JavaScript, almost everything is an object, and objects can contain properties and methods.


*Object Literals*


You can create objects using object literals, which are key-value pairs enclosed in curly braces {}. For example:
    const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    },
    };
You can access object properties using dot notation (e.g., person.firstName) or bracket notation (e.g., person['firstName']).

*Object Properties*


Objects can have properties that store data. These properties can be of any data type, including other objects. For example:


    const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    engine: {
        cylinders: 4,
        horsepower: 200,
    },
    };


*Object Methods*

Objects can have methods, which are functions stored as properties of the object. Methods allow you to perform actions on the object's data. In the example above, sayHello is a method.

*Object Prototypes and Inheritance*


JavaScript is a prototype-based language, which means objects can inherit properties and methods from other objects through their prototypes. You can create object hierarchies and share behavior among objects using prototypes.


*Creating Objects*


Besides object literals, you can create objects using constructor functions, ES6 classes, or the Object.create() method. Here's an example using ES6 classes:

    class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }
    }

    const person = new Person("John", "Doe");


*Object Enumeration*


You can iterate over an object's properties using for...in loops or methods like Object.keys(), Object.values(), and Object.entries().

    for (const key in person) {
    console.log(`${key}: ${person[key]}`);
    }

*Object Mutation*


Objects in JavaScript are mutable, meaning you can change their properties and methods even after creation. This can be useful for dynamic data.

    person.age = 31; // Modify an existing property
    person.city = "New York"; // Add a new property


*Object Destructuring*


You can destructure objects to extract specific properties into variables easily.


    const { firstName, lastName } = person;
    console.log(firstName); // "John"

    *SCOPE*
In JavaScript, scope refers to the context in which variables and functions are declared and accessed. 

It determines the visibility and accessibility of variables and functions throughout your code. 

Understanding scope is crucial for writing error-free and maintainable JavaScript code.

JavaScript has two main types of scope: global scope and local scope.

*Global Scope*

Variables and functions declared in the global scope are accessible throughout the entire JavaScript program.

In web browsers, the global scope is often associated with the window object. Variables declared in the global scope become properties of the window object.

Global variables should be used sparingly because they can lead to naming conflicts and make it difficult to manage large codebases.
Example:

    // Variable in global scope
    var globalVariable = "I'm in global scope";

    function globalFunction() {
    console.log(globalVariable); // Accessible
    }

    globalFunction();
    console.log(globalVariable); // Accessible


*Local Scope*


Variables declared within a function or block are considered to have local scope, meaning they are only accessible within that function or block.

Local scope variables are not accessible from outside their enclosing function or block.

Each function creates a new local scope, and JavaScript uses a mechanism called "lexical scoping" to determine which variables are accessible within a given scope.
Example:

    function outerFunction() {
    var outerVariable = "I'm in outer scope";

    function innerFunction() {
        var innerVariable = "I'm in inner scope";
        console.log(outerVariable); // Accessible (due to lexical scoping)
    }

    innerFunction();
    console.log(innerVariable); // Not accessible
    }

    outerFunction();
    console.log(outerVariable); // Not accessible

*Block Scope (ES6 and later)*


With the introduction of ES6 (ECMAScript 2015), JavaScript introduced block-scoped variables using the let and const keywords.

Variables declared with let and const are block-scoped, meaning they are accessible only within the block of code where they are defined.
Example:

    if (true) {
    let blockVariable = "I'm in block scope";
    const constantVariable = "I'm also in block scope";
    }

    console.log(blockVariable); // Error: blockVariable is not defined
    console.log(constantVariable); // Error: constantVariable is not defined

    *CLOSURES*

Closures are a fundamental and powerful concept in JavaScript.

A closure is a function that "closes over" its lexical (enclosing) scope, retaining access to variables and parameters from that outer scope even after the outer function has finished executing.

This behavior allows you to create private variables, encapsulate functionality, and maintain state in JavaScript.

Here's how closures work and why they are important:

Lexical Scope: JavaScript uses lexical scoping, which means that functions are executed in the scope in which they are defined, not the scope in which they are called. This concept is crucial to understanding closures.

Access to Outer Variables: When a function is defined within another function, it has access to all the variables and parameters of the outer function, as well as variables from any higher-level outer functions.

Preservation of Scope: Even after the outer function has finished executing and its execution context has been removed from the call stack, the inner function retains a reference to its outer scope (the environment in which it was created). This means it can still access and manipulate variables from that outer scope.

Here's an example to illustrate closures:

    function outerFunction(outerVar) {
    // Inner function defined within outerFunction
    function innerFunction(innerVar) {
        console.log(outerVar + innerVar);
    }

    // Return the inner function
    return innerFunction;
    }

    const closure = outerFunction(10); // outerVar is 10
    closure(5); // innerVar is 5, outputs 15
In this example:

outerFunction takes an argument outerVar and defines an innerFunction within it.

innerFunction can access outerVar, even though it is defined inside outerFunction.

outerFunction returns innerFunction as a value, creating a closure.

When you call closure(5), you are invoking innerFunction with innerVar set to 5.

It still has access to outerVar, which was 10 when the closure was created, so it outputs 15.

Closures are commonly used in JavaScript for various purposes, including:

Data Encapsulation: Closures can be used to create private variables and methods, ensuring that they are not directly accessible from outside the closure.

Function Factories: Closures can generate and return specialized functions with predefined behavior based on their enclosing context.

Callbacks: Closures are often used in callback functions to remember and work with data from the surrounding scope.

Partial Application and Currying: Closures can be used to partially apply arguments to functions, enabling the creation of functions with varying degrees of specialization.