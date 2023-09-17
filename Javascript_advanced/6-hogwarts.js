#!/usr/bin/node
// interpreter as node

function studentHogwarts() {
    //set variable privateScore
    let privateScore = 0;
    // set variable name
    let name = 'null';
    // private method changeScoreBy and add it to privateScore
    function changeScoreBy(points) {
        privateScore += points;
    };
    // public method (exposed in the returned object)
    return {
        // setName method with arguement newName and set private variable name
        setName: (newName) => {
            name = newName;
        },

        // rewardStudent, it calls the method changeScoreBy with 1
        rewardStudent: () => {
            changeScoreBy(1);
        },

        // penalizeStudent, it calls the method changeScoreBy with -1
        penalizeStudent: () => {
            changeScoreBy(-1);
        },

        // getScore, it returns name: score (ex: Harry: 14)
        getScore: () => {
            return name + ': ' + privateScore;
        }
    };
};

// Create one variable named harry, that is an instance of studentHogwarts
let harry = studentHogwarts();

// set the name of the object to 'harry'
harry.setName('Harry');
// reward the student four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
//log the name and score to the console
console.log(harry.getScore());

// Create one variable named draco, that is an instance of studentHogwarts
let draco = studentHogwarts();
// set the name of the object to 'draco'
draco.setName('Draco');
// penalize the student three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
//log the name and score to the console
console.log(draco.getScore());