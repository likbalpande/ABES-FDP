// console.log("Hello from js!");

// ------------------------ var

// var username = "Likhilesh"; //declaration
// console.log(username);

// // ... 1000 lines

// var username = "Rajesh"; //re-declaration
// username = "Mohan"; // re-assignment
// console.log(username);

// ------------------------ let
// let username = "Likhilesh"; //declaration
// console.log(username);

// // let username = "Rajesh"; //re-declaration not allowed
// username = "Mohan"; // re-assignment
// console.log(username);

// ------------------------ const
// const username = "Likhilesh"; //declaration
// console.log(username);
// // let username = "Rajesh"; //re-declaration not allowed
// // username = "Mohan"; // re-assignment not allowed
// console.log(username);

// ---------------------- type coersion in js

// let ans = 10+20 // it works
// let ans = "lik" + "moh" // it works
// const ans = "lik" * "Moh"; // it gives NaN
// console.log(ans);

// + op is overloaded but not any other operator

// == --> loose equality
// it has many rules
// but general rules are --> checks for the value (in primitive)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// if (1 == "1") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// if ("1" == "1") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// === --> general rules are --> checks for the type and value (in primitive)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// if (1 === "1") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// if ("1" === "1") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// ------------ template literals

// const username = "Likhilesh";
// const greetings = "Hello";

// // const template = greetings + "," + " " + username;
// const template = `${greetings}, ${username}`;

// console.log(template);

// ------------------ FUNCTION (using function keyword)

// // function definition / declaration
// function printName(str = "#") {
//     console.log("*********", str);
// }

// // function invocation / calling
// printName();
// printName("Likhilesh");

// ----------------- default & return
// function sum(a, b, c = 0) {
//     let res = a + b + c;
//     return res;
// }

// const ans = sum(10, 20, 30);
// const ans = sum(10, 20);
// console.log(ans);

// ---------------- function definition / declaration
// function abc() {
//     console.log("Hello");
// }

// abc();

// ---------------- function assignment / expression
// const temp = function abc() {
//     console.log("Hello");
// };
// temp();

// // ---------------- anonymous function assignment / expression
// const temp = function () {
//     console.log("Hello");
// };
// temp();

// ---------------- arrow function (assignment / expression)
// const temp = () => {
//     console.log("Hello");
// };
// temp();

// difference between function declaration (1) and expression (2/3/4)

// -------------- expression / assignment

// username();

// const username = () => {
//     console.log("Hello");
// };

// username();

// -------------- function keyword
// username();

// function username() {
//     console.log("Hello");
// }

// username();

// --------------------- if else
// if (1 == 2) {
//     console.log(true);
// } else {
//     if (1 == 3) {
//         console.log("Hello");
//     } else {
//         console.log("Hi");
//     }
// }

// --------------------- switch
// let age = 10;
// switch (age) {
//     case 9: {
//         console.log("he is a kid");
//         break;
//     }
//     case 10: {
//         console.log("he is a pupil");
//         break;
//     }
//     case 18: {
//         console.log("he is teen");
//         break;
//     }
//     default: {
//         console.log("can't say");
//     }
// }

// -----------
// const sum = (a, b, c) => {
//     if (c) {
//         console.log("Sum of three numbers is:", a + b + c);
//     } else {
//         console.log("Sum of two numbers is:", a + b);
//     }
// };

// sum(20, 30);
// sum(20, 30, 40);

// ------------ Objects

// const std = new Object();
// console.log(std);

// ------------- initialize object

// const username = "root";

// const student = {
//     city: "Delhi",
//     name: username,
//     21: "date of birth",
// };

// console.log(student);
// console.log(student.name);
// console.log(student.city);
// console.log(student[21]);

// ----------------- access property dynamically
// let key = "city";

// const student = {
//     branch: "CSE",
//     city: "Delhi",
//     name: "Rohit",
//     21: "date of birth",
// };

// console.log(student[key]);

// ----------------- change / add property

// const student = {
//     branch: "CSE",
//     city: "Delhi",
//     name: "Rohit",
//     21: "date of birth",
// };

// student.city = "Mumbai";

// console.log(student);

// ----------------- change / add property (dynamically)

// const k = "hello";

// const student = {
//     branch: "CSE",
//     city: "Delhi",
//     name: "Rohit",
//     21: "date of birth",
// };

// student[k] = "Mumbai";
// student.address = "ABES";

// console.log(student);

// --------------- delete a property from object
// const student = {
//     branch: "CSE",
//     city: "Delhi",
//     name: "Rohit",
//     21: "date of birth",
// };
// // delete student.name;
// console.log(student);

// ------------------ array intro

// const arr2 = new Array();
// const arr = [];

// const arr = ["hello", "world", "city", "Likhilesh"];
// console.log(arr);

// ------------------ read the values
// const arr = ["hello", "world", "city", "Likhilesh"];
// console.log(arr[0]);
// console.log(arr[3]);

// ------------------ update / add (risky) the values
// const arr = ["hello", "world", "city", "Likhilesh"];
// arr[0] = 123;
// arr[3] = "name";

// ------------ this create holes / emptiness
// arr[10] = "city new";

// ----------------- always use push or pop  or other array method to interact with array
// ----------------- direct access may raise some inconsistency
// arr.push("city new");
// console.log(arr);

// ------------ delete is also risky
// const arr = ["hello", "world", "city", "Likhilesh"];
// delete arr[0];
// console.log(arr);

// --------------------------------------
// const arr = ["hello", "world", "city", "Likhilesh"];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.toString());

// --------------------- loops
// const arr = [10, 20, 30, 40];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }
// for (let i in arr) {
//     console.log(i);
// }

// for (let i of arr) {
//     console.log(i);
// }

// -----------------------
// const obj = { name: "hello", age: 99 };

// for (let i in obj) {
//     console.log(i);
// }

// for (let i of obj) {
//     console.log(i);
// }

// ---------------- practice of arrays and looping

const studentsArr = [
    {
        name: "Ajay",
        city: "Delhi",
        CGPA: 9.0,
    },
    {
        name: "Mohit",
        city: "Bhopal",
        CGPA: 8.5,
    },
    {
        name: "Sumit",
        city: "Mumbai",
        CGPA: 8.4,
    },
    {
        name: "Aman",
        city: "Agra",
        CGPA: 8.2,
    },
];

for (let i of studentsArr) {
    if (i.CGPA >= 8.5 || i.city == "Mumbai") {
        console.log(i);
    }
}

for (let i = 0; i < studentsArr.length; i++) {
    if (studentsArr[i].CGPA >= 8.5) {
        console.log(studentsArr[i]);
    } else if (studentsArr[i].city == "Mumbai") {
        console.log(studentsArr[i]);
    }
}
