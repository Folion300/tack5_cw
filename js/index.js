const greetings = 'Hello World!';
alert(greetings);

// number
// string
// boolean
// null
// undefined
// object
// symbol

const age = 42;
let isMarried = false;

const userAge = parseFloat(prompt('Enter your age'));
alert('Your are is ' + userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);
//if (userAge < 18) { //< > >= <= == === != !==
//    alert('You are child');
//}
//else {
//    alert('You are adult');
//}

const ageString = checkAge (userAge);
alert('U r ' + ageString);
function checkAge(age) {
    if (userAge > 100) { 
        return 'old'
    }
    if (userAge < 18) { 
        return 'child'
    }
    else {
        return 'adult'
    }
}