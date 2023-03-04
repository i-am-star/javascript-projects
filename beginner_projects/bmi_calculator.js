//BMI CALCULATOR
function bmi_calculator()
{
let weight = parseInt(prompt("Enter your weight"));

let height = parseInt(prompt("Enter your height"));
 
let Bmi = weight / (height * height);

alert(`Your weight is: ${weight}kg, and your height is: ${height}cm.`);
alert(`Your BMI is: ${Bmi}`);

if (Bmi <= 24.9 && Bmi >= 18.5)
{
  alert("You are within the healthy weight range!!!");
}
else if (Bmi < 18.5) 
{
  alert("You are underweight!!!");
}
else {
  alert("You are overweight!!!");
}
}
bmi_calculator();