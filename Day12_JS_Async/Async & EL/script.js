// ---------- heavy computation (try to type in input after you click on start)
// console.log("START");

// function temp() {
//     console.log("TEMP");
// }

// function handleClick() {
//     for (let i = 0; i < 100000; i++) {
//         for (let j = 0; j < 50000; j++) {
//             // ...
//         }
//     }
//     console.log("...");
//     document.getElementById("display").innerText = "Done !";
// }

// temp();

// console.log("END");

// ------------ timeout
// function cbS() {
//     console.log("Completed!");
// }

// const time = 10000; //milliseconds

// setTimeout(cbS, time);

// -------------------- attaching event handlers in js
// function cbE() {
//     const p = document.getElementById("display");
//     p.innerText = "Done";
// }

// const p = document.getElementById("btn");

// const type = "click";

// p.addEventListener(type, cbE);

// ---------------- understanding EVENT LOOP using setTimout

// console.log("Start");

// function temp() {
//     console.log("TEMP");
// }

// setTimeout(temp, 0);

// console.log("End");

// ------------------- Ex 2
// let cnt = 0;
// console.log("Start");

// function hello() {
//     console.log("Hello");
//     function done() {
//         console.log("-- done hello --", cnt++);
//     }
//     setTimeout(done, 1000);
//     world();
// }

// function world() {
//     console.log("World");
//     function done() {
//         console.log("-- done world --", cnt++);
//     }
//     setTimeout(done, 1000);
//     hello();
// }

// hello();
// world();

// console.log("End");

// -------------------------- EX3

// const arr = ["a", "b", "c", "d"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);
// }

// ---- way 1 of passing callbacks
// const cb = (elem, indx) => {
//     console.log(elem, indx);
// }
// arr.forEach(cb);

// ---- way 2 of passing callbacks
// arr.forEach((elem, indx) => {
//     console.log(elem, indx);
// });

// ------- asynchronous functions : promises --> fetchAPI

// const url = "https://api.github.com/users/likbalpande";
// const options = {};

// const pr = fetch(url, options);

// pr.then(successCB).catch(errorCB);

// function successCB(res) {
//     console.log("success -->", res);
// }
// function errorCB(res) {
//     console.log("error -->", res);
// }

// ---------------------------------------------- understanding fetch response
// const url = "https://dummyjson.com/products";

// const pr = fetch(url);

// pr.then(successCB);

// function successCB(x) {
//     console.log("success -->", x);
//     const pr2 = x.json();
//     pr2.then(print);
// }

// function print(x) {
//     console.log("final data -->", x);
// }

// ----------------- reduced code

const url = "https://api.github.com/users";
const pr = fetch(url);

pr.then((x) => {
    const pr2 = x.json();

    pr2.then((x) => {
        console.log("final data -->", x);
    });
});
