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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello TypeScript!");
//--VARIABLES:
//var, let and const are as valid as in JS
var name1 = "John Smith";
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
//and of course we can OVERWRITE THE VALUE:
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
//i.e.: a strings, nulls, booleans and numbers array.
//and we can declare the arrays in this format
let someThings = ["hell0_w0rld_!", 23, null]; //is not neccesary to complete all the types...
someThings.push(false); //...but allowed to do it later
console.log(someThings); // [ 'hell0_w0rld_!', 23, null, false ]
//---------------------ENUMS TYPE:
//This is a custom type that works as a typical JS object:
var Status;
(function (Status) {
    Status[Status["Complete"] = 0] = "Complete";
    Status[Status["Incomplete"] = 1] = "Incomplete";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
//So we have a type that provides variations, a common use will be:
let taskOne = Status.Pending; //taskOne === 2
//the structure is: var declaration : enum type = enum.key
/*
See how "Pending" works as a KEY
This meaning that the value of the variable will be his VALUE
And when we talk about ENUM type this values are CRECSENT NUMBERS
*/
//---------------------------------
//Modify ENUM
//By default the enumeration of our keys will start by zero
//just changing the first value, we increase all the secuence.
var bigStatus;
(function (bigStatus) {
    bigStatus[bigStatus["Complete"] = 6] = "Complete";
    bigStatus[bigStatus["Incomplete"] = 7] = "Incomplete";
    bigStatus[bigStatus["Pending"] = 8] = "Pending";
})(bigStatus || (bigStatus = {}));
let taskTwo = bigStatus.Pending; //taskTwo === 8
//--------------------------------
//We can also play with the values like
var statusCode;
(function (statusCode) {
    statusCode[statusCode["Complete"] = 10] = "Complete";
    statusCode[statusCode["Incomplete"] = 40] = "Incomplete";
    statusCode[statusCode["Pending"] = 41] = "Pending";
})(statusCode || (statusCode = {}));
let taskThree = statusCode.Pending; //taskThree === 41
//We can put arbitrary numbers but if we stop declaring them, TS will behave as always
//increasing the next.
//--------------------------------
//We can use string too, but
//as that can't be increased we will have to decalre all the values.
var stringStatus;
(function (stringStatus) {
    stringStatus["Complete"] = "C";
    stringStatus["Incomplete"] = "I";
    stringStatus["Pending"] = "P";
})(stringStatus || (stringStatus = {}));
let taskFour = stringStatus.Pending; //taskFour === "P"
//--------------------------------
//Check this cool beahviour
//Anything after the number will be the increased number by default, 
//But if we add a string, TS will stop doing that
//But is a valid way of combining values
var CombinedStatus;
(function (CombinedStatus) {
    CombinedStatus[CombinedStatus["Complete"] = 1] = "Complete";
    CombinedStatus[CombinedStatus["Incomplete"] = 2] = "Incomplete";
    CombinedStatus[CombinedStatus["Pending"] = 3] = "Pending";
    CombinedStatus["Name"] = "Roger";
})(CombinedStatus || (CombinedStatus = {}));
let taskFive = [CombinedStatus.Pending, CombinedStatus.Name]; //taskFive === [3, Roger]
//and this task is "Pending" and "asigned to Roger".
//--------------------------------
//Other example jumping the number values
var sequenceStatus;
(function (sequenceStatus) {
    sequenceStatus[sequenceStatus["Complete"] = 1] = "Complete";
    sequenceStatus[sequenceStatus["Incomplete"] = 2] = "Incomplete";
    sequenceStatus[sequenceStatus["Pending"] = 3] = "Pending";
    sequenceStatus[sequenceStatus["inProcess"] = 10] = "inProcess";
    sequenceStatus[sequenceStatus["inReview"] = 11] = "inReview";
    sequenceStatus[sequenceStatus["Reasigned"] = 12] = "Reasigned";
})(sequenceStatus || (sequenceStatus = {}));
let taskSix = [sequenceStatus.Pending, sequenceStatus.Reasigned]; //taskSix === [3, 12]
let taskSeven = {
    name: "add a feature",
    status: stringStatus.Incomplete,
    urgency: 5
};
let taskNew = {
    name: "do it",
    status: stringStatus.Complete,
    urgency: 0
};
let taskSevenUpdate = {
    data: taskSeven,
    version: 1.0
};
//Asingation tip:
//one to one factor
//as we have acces to the values, this work as common objects.
let myTaskName = taskSeven.name;
let myTaskStatus = taskSeven.status;
let myTaskUrgency = taskSeven.urgency; //see how the types are already defined here
//---
//Propagation factor
let { name, status, urgency } = taskSeven;
let Car = {
    name: "Audi",
    price: 45.000,
    year: 2017
};
//a simple use case
console.log(Car.year < 2007 ? `This ${Car.name} car is old.` : `This ${Car.name} car is new.`);
//-----------------------------------------------------------------------------------
//Ifs, switchs and try-catch statements for control flow works the same, so let see some loop JS-TS differences .
//------LOOPS COMMON CASES:
//For Each:
let tasksForToday = [
    {
        name: "task 1",
        status: stringStatus.Pending,
        urgency: 0
    },
    {
        name: "task 2",
        status: stringStatus.Complete,
        urgency: 10
    },
    {
        name: "task 3",
        status: stringStatus.Incomplete,
        urgency: 5
    }
]; //array of tasks, each one with his required fields.
tasksForToday.forEach((task, index) => {
    console.log(`${index}.-${task.name} status is: ${task.status}`);
});
//So in this case, the only difference is that when declaring the arguments, we must specify the type.
/*
Output:
0.-task 1 status is: P
1.-task 2 status is: C
2.-task 3 status is: I
*/
//--------FOR-IN / FOR-OF:
let someData = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"];
for (const i in someData) {
    console.log(someData[i]);
}
for (const i of someData) {
    console.log(i);
}
/*
Same Outputs:
H
e
l
l
o

W
o
r
l
d
!
*/
//So, FOR-IN works with the INDEX
//FOR-OF with the VALUE
//lets try to get the same result as in the ForEach above.
//FOR-IN
for (const i in tasksForToday) {
    console.log(`${i}.-${tasksForToday[i].name} status is: ${tasksForToday[i].status}`);
}
/*
Output:
0.-task 1 status is: P
1.-task 2 status is: C
2.-task 3 status is: I
*/
//FOR-OF
for (const task of tasksForToday) {
    console.log(`${tasksForToday.indexOf(task)}.-${task.name} status is: ${task.status}`);
}
//Of course, this is just to show behaviour
//this will never be more practical than the ForEach example!
//-----Classic FOR LOOP:
for (let i = 0; i < tasksForToday.length; i++) {
    console.log(`${i}.-${tasksForToday[i].name} status is: ${tasksForToday[i].status}`);
}
//Same output.
//Just need to add the i type.
//--------WHILE and DO-WHILE:
//works the same as JS.
while (taskSeven.status !== "C") {
    if (taskSeven.urgency === 10) {
        console.log("Please finish task number 7 first!");
        break;
    }
    taskSeven.urgency++;
    console.log(`task 7 urgency increased to ${taskSeven.urgency}`);
}
//do while condition ALWAYS run at least one time.
do {
    console.log("can't continue..."); //run just one time...
    taskSeven.urgency--;
} while (taskSeven.urgency === 10);
//-----------------------FUNCTIONS:                        -------------------------------->>
/**
 * Function to give greeting message by console
 * @param name name of the person to greet
 */
function print(name) {
    console.log(`Hello ${name}!`);
}
//now if we select the function we can see the docs
print("World");
//print(2)  //if we pass another type we get an error.
//----DEFAULT PARAMETERS:
/**
 * function to give greetings
 * but if it doesn't receive a value for "name",
 *it will return a Hello World!
 * @param name by default will be "World".
 *  */
function print2(name = "World") {
    console.log(`Hello ${name}!`);
}
print2(); //Hello World!
print2("Jose"); //Hello Jose!
print2(name = "cool feature"); //we can names the params, this is useful when we have a lot of params.
//----ACCEPT UNDEFINED PARAMETERS:
/**
 * Function to say goodbye to user
 * @param name (Optional) if not given will return a generic goodbye.
 */
function goodbye(name) {
    if (name) {
        console.log(`Goodbye ${name}!`);
    }
    else {
        console.log("Goodbye World!");
    }
}
goodbye(); //Goodbye World!
goodbye("Leo"); //Goodbye Leo!
//So param? is for a parameter that can exist or not.
//param : type = "default value" if for a parameter that can be defined or if it not, it will have a default value.
//----OPTIONAL TYPES:
function typeCheck(a) {
    if (typeof a === "string") {
        console.log("it's a string");
    }
    else if (typeof a === "number") {
        console.log("it's a number");
    }
}
typeCheck("hi");
typeCheck(34);
//----MULTIPLE RETURN TYPES:
function returnExample(a) {
    return `Hello ${a}!`;
}
const info = returnExample("world");
const info2 = returnExample(8);
//----LISTS AS PARAMS:
/**
 * @param list is a list, it acepts an array of string <...array>
 * or just lots of strings <"foo","bar","foobar">
 */
function multipleParams(...list) {
    list.forEach(str => console.log(str));
}
multipleParams("hi", "hello", "goodbye"); //in this case an array is generated inside the function.
let mySet = ["goodbye", "hello", "hi"];
multipleParams(...mySet);
//------------------ARROW FUNCTIONS:
//In general they work the same as in ES6...
let fnctn = () => console.log("hi");
let newFunc = (a) => { return a; };
//create an instance
let developer = {
    name: "John",
    age: 23,
    salary: 45000
};
let verifySalary = (employee, salary) => {
    //The second param salary, is a callback that recives a param Employee type too.
    //we can say that salary returns a type <()=>type> or just <()=>{}>
    //so verifySalary recies an employee, and salary recives his own employee
    //that in this case is the same when verifySalary in invoked.
    //We receive it as a param , an then we use it as a param for our callback.
    if (employee.age > 70) {
        return;
    }
    else {
        let newSalary = salary(employee); //callback to execute
        console.log(newSalary);
    }
};
let getSalary = (employee) => { return employee.salary; };
//outside we have the real function that returns the salary
//now we just need to invoke verifySalary, with the employee and the callback function as an argument.
verifySalary(developer, getSalary); //45000
//very dirty example, we are going deep on this later...
//The core idea here is to see how we can put multipl functions inside another
//and have a flow thah manipulates then as the program requires it.
//--------------ASYNC FUNCTIONS:
function asyncTask() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("async task to complete before the time expires");
        return "async response";
    });
}
//----then.catch.finally treatment:
asyncTask()
    .then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("async task complete");
});
/*
 * Output:
async task to complete before the time expires
async response
async task complete
*/
//--------------GENERATORS:
function* generatorEx() {
    //yield-->keyword to emit values
    let index = 0;
    while (index < 5) {
        yield index++; //emit an incremented value (value++ is return then increment, thats why we get from 0 to 4)
    }
}
//save it in a variable
let generate = generatorEx();
//Here we acces to the emitted values
console.log(generate.next().value); //0  //.next generates the next value, .value return the value
console.log(generate.next().value); //1
console.log(generate.next().value); //2
console.log(generate.next().value); //3
console.log(generate.next().value); //4
console.log(generate.next().value); //undefined
//------WORKERS AND WATCHERS:
//watcher
function* watcher(value) {
    yield value; //initial value emittion,(given when invoke the watcher)
    yield* worker(value); //yield* to call another generator function to emit his values (this will work until the worker function ends)
    yield value + 4; //next, our final value generation
}
//worker
function* worker(value) {
    yield value + 1;
    yield value + 2;
    yield value + 3;
}
//save watcher
let generator = watcher(0);
console.log("wa:" + generator.next().value); //0 by watcher
console.log("wo:" + generator.next().value); //1 by worker
console.log("wo:" + generator.next().value); //2 by worker
console.log("wo:" + generator.next().value); //3 by worker
console.log("wa:" + generator.next().value); //4 by worker
//---------FUNCTIONS OVERLOAD:
function versatilTask(input) {
    typeof (input) === "string" ? console.log("your string is:" + input) : console.log("your number is:" + input);
}
versatilTask(55); //your number is:55
versatilTask("hey"); //your string is:hey
const cookieOptions = {
    name: "user",
    value: "John",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
// //set the cookie
//setCookie(cookieOptions)
// //get cookier
// let userCookie = getCookieValue("user")
// //delete the cookie
// deleteCookie("user")
// //delete all cookies
// deleteAllCookies()
//-----------EVENTS:
class Timer {
    start(name) {
        setTimeout(() => {
            //since finish is optional we check for it (TS need this check)
            if (!this.finish)
                return;
            //then run it
            this.finish(name);
        }, 1000);
    }
    startWithDate() {
        setInterval(() => {
            //since finish is optional we check for it
            if (!this.finishWithDate)
                return;
            //then run it
            this.finishWithDate(new Date().toString());
        }, 1000);
    }
}
//new Timer instance
let myTimer = new Timer(); //note how we use the same class as the type.
//now we write the finish method, the idea of not decalring it is that we can change his behaviour whenever we want.
myTimer.finish = (name) => {
    console.log("Event finished by " + name);
};
myTimer.finishWithDate = (date) => {
    console.log("Event finished on: " + date);
};
//the we run the start of the timer.
myTimer.start("nico"); //Event finished by nico
myTimer.startWithDate(); //Event finished on: Thu Dec 08 2022 06:57:42 GMT-0300 (Argentina Standard Time)
//What we have here? methods that gives us a callback to what we want when they finish.
//we can delete this properties too. in case we need something to stop executing.
let del = () => delete myTimer.finishWithDate;
setTimeout(del, 4000);
//this quit all the "finish With Date" executions of the code.
