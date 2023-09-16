#!/usr/bin/node
// interpreter

// function createclassroom taking numberofstudents as a parameter
function createClassRoom(numbersofstudents) {
    // function studentSeat takes seat as a parameter
    function studentSeat(seat) {
        // returns a function that returns the seat
        return function () {
            return seat;
        };
    }
    // students array
    let  students = [];
    // looping through the numberofstudents
    for (let i = 0; i < numbersofstudents; i++) {
        // pass the number of iteration(i+1) to studentseat 
       let  seatNumber = i+1;
        // push the studentseat into the students array
        students.push(studentSeat(seatNumber));
    }
    // return the students array
    return students;
}
// Creating a closure classRoom, calling createClassRoom with 10 students
const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());