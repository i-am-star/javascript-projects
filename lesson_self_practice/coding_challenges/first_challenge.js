/*Mark and john are trying to compare their BMI, which is calculated using the formula: BMI = mass / (height * height).
(mass in kg and height in meter).

1. Store mark and john's mass and height in variables
2. Calculate  both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than john

TEST DATA 1: Mark weights 78kg and is 1.69m tall.
john weights 92kg and is 1.95 m tall.

const johnsMass = 92;
const johnsHeight = 1.95;
johnsBmi = johnsMass / (johnsHeight * johnsHeight);

const marksHeight = 1.69;
const marksMass = 78;
marksBmi = marksMass / (marksHeight * marksHeight);

let markHigherBmi = marksBmi > johnsBmi;

console.log("John's BMI is " + johnsBmi);
console.log("Mark's BMI is:" + '' + marksBmi);
console.log("Mark's BMI is higher than John's BMI:" + ' ' + markHigherBmi);*/

//TEST DATA 2: Mark weights 95 kg and is 1.88m tall. john weights 85 kg and is 1.76 m tall*
const johnsMass = 85;
const johnsHeight = 1.76;
 const johnsBmi = johnsMass / (johnsHeight * johnsHeight);

const marksHeight = 1.88;
const marksMass = 95;
const marksBmi = marksMass / (marksHeight * marksHeight);

let markHigherBmi = marksBmi > johnsBmi;

console.log("John's BMI is " + johnsBmi);
console.log("Mark's BMI is:" + '' + marksBmi);
console.log("Mark's BMI is higher than John's BMI:" + ' ' + markHigherBmi);
