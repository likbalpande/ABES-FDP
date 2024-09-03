// console.log(window.document);
// console.log(document);

// ------------- properties of document
// console.log(document);
// console.dir(document);
// difference between html collection & nodelist & generic array
// (everything is iterable)
// const obj = {
//     name: "likhilesh",
//     hobbies: ["webd", "dsa"],
// };
// console.log(obj);

// ------------ some methods of window object
// window.alert("submitted!");
// window.console.log("submitted!");
// const ans = window.prompt("Hello, what is your name?");
// console.log(ans);
// window.open("https://www.flipkart.com");

// ---------------- DOM manipulations

// ------------ get elements by tag name
// const res = document.getElementsByTagName("h1");
// console.log(res);
// // ------------ accessing the properties of the html collection list's element
// console.log(res[0].innerText);
// console.log(res[1].innerText);
// // ------------ modify the properties
// res[0].innerText = "DOM manipulation <i>Day1</i> !!";
// res[1].innerHTML = "DOM manipulation <i>Day1</i> !!";

// // ------------ styling
// console.dir(res[0].style); // --> style is an object
// res[0].style.backgroundColor = "brown";

// ------------------ different Selector methods (BASIC)

// const res1 = document.getElementsByTagName("h1");
// // --> iterable (HTMLCollection)
// res1[0].style.backgroundColor = "green";
// console.dir(res1);

// const res2 = document.getElementsByClassName("title");
// // --> iterable (HTMLCollection)
// res2[0].style.backgroundColor = "yellow";
// console.dir(res2);

// const res3 = document.getElementById("uniq-title");
// // --> element or null
// res3.style.backgroundColor = "red";
// console.dir(res3);

// const res4 = document.getElementById("uniq-title-np");
// console.dir(res4);

// ------------------ different Selector methods (MORE)
// const res1 = document.querySelectorAll("h1:first-child");
// // --> iterable (NodeList)
// console.log(res1);

const res2 = document.querySelectorAll("div>h1>i");
// --> iterable (NodeList)
console.dir(res2);
res2[0].style.color = "violet";

const res3 = document.querySelector("div>h1>i");
// --> Node
console.dir(res3);
res3.style.textDecoration = "underline";
