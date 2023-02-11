//Lesson 1: values and variables
//A value is a piece of data. it is the most fundamental peice of information in a text.
//A variable is used to store values to your computer memory.  to declare a variable simple means to assign a value to it.

//TASK 1: ASSIGN A VALUE TO A VARIABLE
let firstVariable = "value"
console.log("value of first variable is:" + firstVariable)

//Lesson 2: data types
/*In every programming language, values can have diffrent types, depending on the type of data we want the variables to hold.
The types of data we want the variables to hold are numbers, strings, booleans, arrays, null, undefined, and bigInt.
number type is floating point numbers used for decimals and integers.
strings are used for texts, and are kept inside double quotes.
boolean data types are logical types thhat can only be true or false and is used for taking decisons.
undefined is a value taken by a variable that is not yet defined i.e when you declare a variable without assigning a value, the variable will be undefined.
null also means an empty value
arrays are used to store multiple values in a single variable.
symbol(ES2015) is used to create a symbol that can be used to refer to a variable. It is a unique value and cannot be changed.
bigint(ES2020) is used to store large numbers.
These are the primitive data types in javascript*/

//Lesson 3: in javascripts, comments are used to hide or make javascript ignore a code that is within that comment.
//There are two line of javascript comments - single line comments (//) and multi line comments (/**/)

//TASK 2: ASSIGN VALUES TO THEIR RESPECTIVE VARIABLES FOLLOWIWNG ALL YOU LEARNT SO FAR ON DATA TYPES


let bool = false;
console.log("the boolean data type contains values such as:" + bool);
let stR = "Monday";
console.log("The string data type contains values  such as:" + stR);
let numS = 23;
console.log("The number data type contains values such as:" + numS);
let num1;
console.log ("this variable has been declared, but is yet to be assigned a value, so we say it is:" + num1);

//Lesson 3 : The typeof operator is used to show the typeof a value
//for example, to display the datatype of a variable, we can use the typeof operator.
console.log(typeof bool);
console.log(typeof stR);
console.log(typeof numS);
console.log(typeof num1);


//Lesson 4: Operators
/* There are diffrent types of operators in javascript
mathematical/arithemtic operators(+, -, *, /, %, **)
comparison operators
assignment operators, etc*/

//TASK 3 : USING THE ARITHEMETIC OPERATORS TO PERFORM BASIC CALCULATIONS

const age1 = 21;
const num2 = 18;
result = age1 - num2;
console.log(result)

const game = 33;
const time = 23;
result = game + time;
console.log(result);

const made = 20;
const gift = 33;
result = made * gift;
console.log(result);

const principal = 23;
const peg = 10;
result = principal / gift;
console.log(result);