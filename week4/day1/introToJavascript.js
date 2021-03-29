// Define a variable
// var variable, has a functional scope, function scope
var hello = "Hello World";
// ES6, let has a block scope
let integer = 2;
// constant, has a block scope as well
const boolean = false;

// define a function
function sumNumbers(num1, num2){
    // for loop syntax
    // for (first arg: variable we define, we initialize to 0)
    // for (second arg: our loop condition, is your loop container)
    // for (third arg: incrementer)
    // const pizza = 8
    // for (let slice = 0; slice < pizza.length; slice++){
    //     // does stuff here
    // }
    return num1 + num2
}

console.log(sumNumbers(1,5))

// lis...jk arrays
// list = []
// javascript syntax for a list (now called an array)
let numbersInAnArray = [1, 2, 3];
// we access them in the same way we do in python
// nameOfTheList[index]
list[0];

// python dictionary
// dictionary1 = {"key": "value"}

// new syntax, we now call this an object, that has a key value. the key is not in quotation marks
// the value can be whatever value type we want
let object = {key: "value"};
