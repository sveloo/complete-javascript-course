// Function Constructors

// Creating using an object literal
// var sanny = {
//   name: "Sanny",
//   yearofBirth: 1976,
//   job: musician,
// };

// Creating using a funciton constructor
// Function constructors use Capital first letter

// var Person = function (name, yearofBirth, job) {
//   this.name = name;
//   this.yearofBirth = yearofBirth;
//   this.job = job;
// };
// // Add function to the Person prototype
// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearofBirth);
// };

// var sanny = new Person("Sanny", 1976, "Musician");
// var amy = new Person("Amy", 1986, "PE Teacher");

// console.log(sanny.calculateAge());
// console.log(amy.calculateAge());

// Passing function as call back function

// Using Bind

var years = [2010, 1990, 1995, 1981, 1976];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(year) {
//   return 2020 - year;
// }

// function legalAge(year, limit) {
//   return year >= limit;
// }

// var ages = arrayCalc(years, calcAge);

// var legalAus = arrayCalc(ages, legalAge.bind(this, 21));

// console.log(ages);
// console.log(years);
// console.log(legalAus);

// function calcHR(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calcAge);
// var legalAges = arrayCalc(ages, legalAge);
// var calcMaxHR = arrayCalc(ages, calcHR);

// console.log(ages);
// console.log(legalAges);
// console.log(calcMaxHR);
