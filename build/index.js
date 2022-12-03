"use strict";
/*
--NPM INSTALL:
to start our ts dev environment first we install dev dependencies:
npm i --save-dev @types/node nodemon ts-node typescript


--TSC INIT:
then we must init TS, to have our config file:
npx tsc --init      //to init the compiler
--rootDir src       //entry files directory (kind of optional)
--outDir build      //out directory for transpiled files
--esModuleInterop   //to init in true the interoperation between ES modules and versions
--resolveJsonModule //to work with json
--lib es6           //to declare the js version
--module commonjs   //to transpile to common js and any browser can read it
--allowjs true      //so we can have js and ts code in our proyect without problem
--noImplicitAny     //can't transpile to ts if theres some implisit any.


--TS-NODE:
To execute our app,we will add this command in "scripts" in the package.json:
"tsNode": "cd src && ts-node index.ts"
Then, we can run "npm run ts-node" in the terminal.

At the same time we can always use "ts-node <filename>" to run files individually.

--NODEMON:
Add the a nodemon.json,
there we give some instructions to nodemon, and add the commando to listen to,
AND we must add a command in the "scripts" section in the package.json,
this will execute the "exec" command in the nodemon.json

--TRANSPILATION:
add in "scripts" in the package.json
transpilation: "tsc"

Then we can run "npm run transpilation"

This will create the build directory with our code transpilled to JavaScript

Notice that we can run that files directly with node and this will beahve exact as the ts-node executed files.

(for practical uses I personally preffer to use just trans or transp insted transpilation)

--RIMRAF FOR PRODUCTION BUILDING:
npm i --save-dev rimraf

and add in "scripts":

"build:prod": "rimraf ./build && tsc"
"start:prod": "npm run build:prod && node build/index.js"

now with just npm run start:prod we compile and execute our code at same time.


And now this is a perfect template to start working with TS :)
*/
console.log("Hello TypeScript!");
//--VARIABLES:
//var, let and const are as valid as in JS
var name = "John Smith";
let email = "john.smith@gmail.com"; //local scope variable
const PI = 3.14159; //not new assign is permitted (like PI = PI + 1)
//here TS will infer the types, it's not "a must", to declare them, BUT, it is best practice to do it.
var name2 = "Jimmy Smith";
let email2 = "jimmy.smith@gmail.com";
const PI2 = 3.14159;
/*
the type number is valid for all number types:

"Data Type - Number. Just like JavaScript, TypeScript supports number data type.
All numbers are stored as floating point numbers.
These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8)."
*/
//Now the typing is strong, we cannot assign new values with different types to our typed variables:
//email = 2
//	"message": "Type 'number' is not assignable to type 'string'.",
// There is an exception to all this:
//--THE ANY TYPE
//but since the idea is to have control over the types,
//to avoid problems, its just reserved for --Really Special Cases--.
let crazyVariable = "hello anyone!";
crazyVariable = 34;
crazyVariable = [1, 2, 3, "a", "b", "c"];
//new values with different types are valid here.
// but if you are searching for that, try JavaScript, lol.
//its valid to CREATE AND THEN PROVIDE VALUE:
let error;
error = true;
//and of course we can OVERRIDE THE VALUE:
error = false;
//NEVER THE TYPE:
// error : string
//	    "message": "'string' only refers to a type, but is being used as a value here.",
//INSTANCIATE MULTIPLE VARIABLES:
let a, b, c;
a = "hello world";
b = 83770.30872;
c = true;
//--------------------------------------------------------------------
//So, by now we already see the BuiltIn or PRIMITIVE TYPES:
//string, number, boolean, null,undefined, void.
//and we have complex or NON PRIMITIVE TYPES:
let myArray = ["hello", "world", "!"];
//i.e. string[] === array of strings
//but if we provide with a lot of different objects to an array without a declared type, like:
let lotOfThings = [false, "hello", 23, true];
//we can see that TS infer this as type "(string | boolean | number)[]"
//i.e.: a strings, booleans and numbers array.
//and we can declare the arrays in this format
let someThings = ["hell0_w0rld_!", 23, null];
someThings.push(false);
console.log(someThings);
