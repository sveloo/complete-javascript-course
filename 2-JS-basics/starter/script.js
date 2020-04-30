/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var markWeight = 75;
// var markHeight = 1.92;
// var markBMI = markWeight / (markHeight * markHeight);

// var johnWeight = 75;
// var johnHeight = 1.85;
// var johnBMI = johnWeight / (johnHeight * johnHeight);

// var bmiCompare = markBMI > johnBMI;

// bmiCompare
//   ? console.log("Mark's BMI is higher than John's")
//   : console.log("John's BMI is higher than Mark's");

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// johnAverage = (89 + 120 + 103) / 3;
// mikeAverage = (116 + 94 + 123) / 3;
// maryAverage = (400 + 134 + 105) / 3;

// if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//   console.log(
//     johnAverage,
//     mikeAverage,
//     maryAverage,
//     "John has the highest average!"
//   );
// } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//   console.log(
//     johnAverage,
//     mikeAverage,
//     maryAverage,
//     "Mike has the highest average!"
//   );
// } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
//   console.log(
//     johnAverage,
//     mikeAverage,
//     maryAverage,
//     "Mary has the highest average!"
//   );
// } else {
//   console.log(
//     johnAverage,
//     mikeAverage,
//     maryAverage,
//     "Mike, John & Mary have the same average!"
//   );
// }

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var tips = [];
// var totals = [];

// var tip;

// function pushResults(tip, total) {
//   tips.push(tip);
//   totals.push(total);
// }

// function calcTip(bill) {
//   if (bill < 50) {
//     tip = bill * 0.2;
//     total = bill + tip;
//   } else if (bill >= 50 && bill < 200) {
//     tip = bill * 0.15;
//     total = bill + tip;
//   } else {
//     tip = bill * 0.1;
//     total = bill + tip;
//   }
//   return pushResults(tip, total);
// }

// calcTip(124);
// calcTip(48);
// calcTip(268);
// console.log(tips);
// console.log(totals);

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var mark = {
  fullName: "Mark Wahlberg",
  mass: 200,
  height: 1.7,
  calcBmi: function (mass, height) {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var john = {
  fullName: "Kevin Hart",
  mass: 200,
  height: 1.7,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBmi() > john.calcBmi()) {
  console.log(mark.bmi, john.bmi);
  console.log("Mark's BMI is higher than John's");
} else if (john.calcBmi() > mark.calcBmi()) {
  console.log(mark.bmi, john.bmi);
  console.log("Mark's BMI is higher than John's");
} else {
  console.log(mark.bmi, john.bmi);
  console.log("Mark's BMI is equal to John's");
}
