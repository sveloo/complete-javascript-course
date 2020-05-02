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

// var mark = {
//   fullName: "Mark Wahlberg",
//   mass: 200,
//   height: 1.7,
//   calcBmi: function (mass, height) {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// var john = {
//   fullName: "Kevin Hart",
//   mass: 200,
//   height: 1.7,
//   calcBmi: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBmi() > john.calcBmi()) {
//   console.log(mark.bmi, john.bmi);
//   console.log("Mark's BMI is higher than John's");
// } else if (john.calcBmi() > mark.calcBmi()) {
//   console.log(mark.bmi, john.bmi);
//   console.log("Mark's BMI is higher than John's");
// } else {
//   console.log(mark.bmi, john.bmi);
//   console.log("Mark's BMI is equal to John's");
// }

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 42],
  tips: [],
  totals: [],
  averageTip: 0,
  calcTip: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage, tip, total;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill > 100 && bill < 300) {
        percentage = 0.15;
      } else percentage = 0.25;

      tip = this.bills[i] * percentage;
      total = this.bills[i] + tip;

      this.tips.push(tip);
      this.totals.push(total);
    }
  },
  calcAverage: function () {
    var sum = 0;
    for (var i = 0; i < this.tips.length; i++) {
      sum = sum + this.tips[i];
    }
    average = sum / this.tips.length;
    this.averageTip = average;
  },
};

var mark = {
  fullName: "Mark Korn",
  bills: [77, 375, 110, 45],
  tips: [],
  totals: [],
  averageTip: 0,
  calcTip: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage, tip, total;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill > 100 && bill < 300) {
        percentage = 0.15;
      } else percentage = 0.1;

      tip = this.bills[i] * percentage;
      total = this.bills[i] + tip;

      this.tips.push(tip);
      this.totals.push(total);
    }
  },
  calcAverage: function () {
    var sum = 0;
    for (var i = 0; i < this.tips.length; i++) {
      sum = sum + this.tips[i];
    }
    average = sum / this.tips.length;
    this.averageTip = average;
  },
};

john.calcTip();
john.calcAverage();
mark.calcTip();
mark.calcAverage();

console.log(john.averageTip);

if (john.averageTip > mark.averageTip) {
  console.log(
    "John's average tip of " +
      john.averageTip +
      " was more than Mark's average of " +
      mark.averageTip
  );
} else if (mark.averageTip > john.averageTip) {
  console.log(
    "Mark's average tip of " +
      mark.averageTip +
      " was more than John's average of " +
      john.averageTip
  );
} else console.log("Both have the same tipping average");
