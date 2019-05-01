
/**
 * Lecture 1: Let and const
 */

 /*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);


// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; // error
console.log(name6); 
*/

// ES5
function driverLisence5(passedTest) {

  if (passedTest) {
    console.log(firstName); // hoisting
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
  }

}
driverLisence5(true);

// ES6
function driverLisence6(passedTest) {

  if (passedTest) {
    // console.log(firstName); //error
    let firstName = 'John';
    const yearOfBirth = 1990;

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car');
  }

}
driverLisence6(true);







