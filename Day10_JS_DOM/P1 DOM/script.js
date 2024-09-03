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
// // console.log(res);
// // // ------------ accessing the properties of the html collection list's element
// // console.log(res[0].innerText);
// // console.log(res[1].innerText);
// // // ------------ modify the properties
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

// const res2 = document.querySelectorAll("div>h1>i");
// // --> iterable (NodeList)
// console.dir(res2);
// res2[0].style.color = "violet";

// const res3 = document.querySelector("div>h1>i");
// // --> Node
// console.dir(res3);
// res3.style.textDecoration = "underline";

// ------------------ attributes
// ------------- getter
// const image = document.getElementsByTagName("img");
// const ans = image[0].getAttribute("name");
// console.log(ans);

// ------------- setter
// const image = document.getElementsByTagName("img");
// image[0].setAttribute("alt", "amazon");
// image[0].setAttribute("class", "img1 small");

// --------------------- ADD Element in DOM
// create an element
// const text = document.createElement("p");
// // find the parent
// const divisions = document.getElementsByTagName("div");
// // add the element at right position
// divisions[0].append(text);

// // manipulate the node
// text.innerText = "new born element";

// -------------- ---------------- add multiple child
// const text1 = document.createElement("p");
// const text2 = document.createElement("p");
// text1.innerText = "new born element 1";
// text2.innerText = "new born element 2";
// const divisions = document.getElementsByTagName("div");
// -------------- append can add multiple
// divisions[0].append(text1, text2);

// -------------- append child only adds ONE
// divisions[0].appendChild(text1, text2);

// -------------- append can add plain text / string
// divisions[0].append("Hello world!!!");

// ------------- appendChild can NOT add plain text / string
// divisions[0].appendChild("Hello world!!!");

// -------------- ---------------- remove child

// const dotText2 = document.getElementsByTagName("p")[0];
// dotText2.remove();

// ---------------- remove
// const dotText1 = document.getElementsByTagName("p");
// dotText1[0].remove();

// ---------------- removeChild
// const parent = document.getElementsByTagName("div")[0];
// const dotText = document.getElementsByTagName("p")[0];
// parent.removeChild(dotText);
