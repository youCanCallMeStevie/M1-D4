/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = function (x, y) {
    console.log(x * y)
    return x * y
}

let rectangleArea = area(7, 9)

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = function (x1, x2) {
    if (x1 === x2) {
        return 3 * (x1 + x2);
    } else {
        return (x1 + x2);
    }
}
console.log(crazySum(5, 5))

/* EXERCISE 3
Write a function "crazyDiff" that computes the
absolute difference between a given number and 19.
Returns triple their absolute difference if
the specified
number is greater than 19.
*/

const crazyDiff1 = function (a) {
    if (a <= 19) {
        return (19 - a);
    } else {
        return (a - 19) * 3;
    }
}
console.log(crazyDiff1(39))

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
const boundary = function (n) {
    return (20 < n && n <= 100 || n === 400 ? true : false)
}
console.log(boundary(500));

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/
// team works answer, i dont agree....
const strivify = function (passedString) {

    // const result = `Strive${passedString}`
    const result = "Strive" + passedString
    if (passedString.startsWith("Strive")) {
        return passedString
    } else {
        return result
    }

}
console.log(strivify("Strive"));


/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function (num) {
    if (num % 7 === 0 || num % 3 === 0) {
        console.log("it's a multiple of 3 or 7")
    } else {
        console.log("it's not a multiple of 3 or 7")
    }
}

console.log(check3and7(22))
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter

const upperFirst = function
    console.log('Hello'.toUpperCase()); */
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
// team works answer, i dont agree....
const giveMeRandom0 = (n) => {
    let arrayN = [];
    for (i = 0; i <= n; i++) {
        arrayN.push(Math.floor(Math.random() * 10 + 0));
    }
    return arrayN;
};
console.log(giveMeRandom0(6));

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
