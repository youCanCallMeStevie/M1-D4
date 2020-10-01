// SWITCH CASE - this is a construct!!!
/*
if(x==="value 1"){
    //lines of code to do something else
}else if (x === "value 2") {
        //lines of code to do something else
}else if (x === "value 3") {
        //lines of code to do something else
}else if (x === "value 4") {
    //something not covered by previous conditions
}


const i = 6; // or example: "input from an external client (something that you dont know when you are developing"
switch (i) {
    case 0: // called label
        console.log("I is zero"); // or an example "Error we don't want zeros"
        break; //breaks the reading of the code
    case 1:
        console.log("I is one");
        break;
    case 2: dbsfdn gfh bdkngfhg
        console.log("I is two");
        break;
    case 3:
        console.log("I is three");
        break;
    case 4:
        console.log("I is four");
        break;
    case 5:
        console.log("I is five");
        break;
    default:
        console.log("I is something else");
        break;
}

/* the above is the same as  writing

if (i == 0) {
    console.log code
} else if (i === 1) {
    console.log code
} else if (i === 1) {
    console.log code
} else if (i === 1) {
*/

/*/ ************ STRING*********

const example = 123123;
const singleQuoted = 'first';
const doubleQuoted = "second";
const templateLiterals = `Variable of Examplee is:  ${example}
Variable of Second Example is: ${doubleQuoted}
`;
console.log(templateLiterals);

console.log(templateLiterals.length);
console.log(templateLiterals.toLowerCase());
console.log(templateLiterals.indexOf("e"));
console.log(templateLiterals.slice(4, 10));
console.log(templateLiterals.indexOf("ee"));

const arrayOfWords = templateLiterals.split(" "); //sliceing at the spaces
console.log(arrayOfWords);

const joinedWithhDots = arrayOfWords.join(". . . . . "); // inserting something in to where you spliced above
console.log(joinedWithhDots);
console.log("HI".repeat(3));

//******* Function****
//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship
//between the input and the output.To use a function, you must define it somewhere in the scope from which you wish to call it.

//declaring a function
const square = function (x) {
    //function (parameter) , line above ^^^ A function could have none, single or many parameters (x, y,z)
    // body of the function
    const result = x * x;
    return result; //or instead of 82 & 83, we could commandreturn x * x;
    // end of body
};

const sum = function (a, b) {
    return a + b;
}
console.log(result);
const bark = function () {
    console.log("BARK!");
};
// console.log(result); / / this won't print anything as result hasnt been defined, as result only exists in the world of function , within the world of { }

console.log(square(4)); // we are giving x, the parameter, the value of 4
console.log("The result of 4*4 is: " + square(4));

const squareOf25 = square(25); //square("25") in JS would still work, but square("sdf") would create a NaN
console.log(squareOf25);

let myFuntion = function () {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
};

myFunction = function () { }; //if function is a let i can overwrite it!
console.log(squareOf25);

const one = function () {
    let a = 0;
    function two() {
        a = 10;
        requestAnimationFrame;
    }
    two();
    return a;
};
console.log(one);

ARROW FUNCTIONS (modern Javascript)

