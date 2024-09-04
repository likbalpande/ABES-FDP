// ---------- understanding function execution and CALL Stack
// function printHello() {
//     printWorld();
//     console.log("Hello");
// }

// function printWorld() {
//     console.log("World");
// }

// console.log("Start");
// printHello();
// console.log("End");

// ----------- Callbacks & HoF
// function printOnScreen(x) {
//     console.log("-->", x);
// }
// function sum(a, b) {
//     const ans = a + b;
//     return ans;
// }
// const i1 = 10;
// const i2 = 40;
// const res = sum(i1, i2);
// printOnScreen(res);

// -----------------------
// console.log("Start");
// function printOnScreen(x) {
//     console.log("-->", x);
// }
// function sum(a, b, cb) {
//     console.log("Inside SUM...");
//     const ans = a + b;
//     console.log("Calculation Done");
//     cb(ans);
//     console.log("Sum Function completed");
// }
// const i1 = 10;
// const i2 = 40;
// // inversion of control
// console.log("Calling SUM...");
// sum(10, 40, printOnScreen);
// console.log("END");

// ---------------------------------

// function printOnScreen(x) {
//     console.log("-->", x);
// }
// function sum(a, b) {
//     const ans = a + b;
//     return ans;
// }
// const i1 = 10;
// const i2 = 40;

// const res = sum(10, 40);
// printOnScreen(res);

// printOnScreen(sum);

// ------------------------------- ITERATION METHODS
// forEach, map, filter,
// reduce

// const arr = ["green", "yellow", "orange"];

// green 0 ["green", "yellow", "orange"]
// yellow 1 ["green", "yellow", "orange"]
// orange 2 ["green", "yellow", "orange"]

// for(let i=0; i<arr.length; i++){...}
// for (let i of arr) {
//     console.log(i);
// }

// ---------------------------------------- FOR EACH
// function myPrint(elem, indx, arr) {
//     console.log(elem, indx, arr);
// }

// for (let i = 0; i < arr.length; i++) {
//     myPrint(arr[i], i, arr);
// }

// arr.forEach(myPrint);

// ------------------------------------ FOR EACH

// function myPrint(a, b, c) {
//     console.log("Hello", a, b, c);
// }

// const arr = ["a", "b", "c"];

// arr.forEach(myPrint);

// -------------------------- RETURN from FOR EACH loop (MAP)

// function myPrint(elem) {
//     console.log("Hello", elem);
//     return elem + "!";
// }

// const arr = ["a", "b", "c"];

// // const res = arr.forEach(myPrint); // does not support return inside CB
// const res = arr.map(myPrint); // Supports return inside CB
// console.log(res);

// ------------------------ FILTER
// function myPrint(elem) {
//     console.log("Hello", elem);
//     if (elem % 2 != 0) {
//         return true;
//     }
//     return false;
// }

// const arr = [2, 10, 14, 19, 23, 28];

// const res1 = arr.map(myPrint);
// console.log(res1);
// const res2 = arr.filter(myPrint);
// console.log(res2);

// ------------------------------ PRACTICE
input = ["ABC", "CD", "DE", "EF", "JKX", "HI", "MN", "IO"];
// output = ["ABC", "DE", "EF", "HI", "IO"];

function cb(elem) {
    for (ch of elem) {
        if (ch == "A" || ch == "E" || ch == "I") {
            return true;
        }
    }
    return false;
}

const res = input.filter(cb);
console.log(res);
