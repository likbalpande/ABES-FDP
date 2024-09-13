// --------------- PLAIN JS
// const parent = document.getElementById("parent");

// const title = document.createElement("h4");
// title.innerText = "Shopping List";
// parent.appendChild(title);

// const list = document.createElement("ul");
// parent.appendChild(list);

// const veg = document.createElement("li");
// veg.innerText = "Vegetables";
// list.appendChild(veg);

// const fruits = document.createElement("li");
// fruits.innerText = "Fruits";
// list.appendChild(fruits);

// --------------- USE React (add CDN Links)
// const parent = document.getElementById("parent"); // JS DOM elements
// const root = ReactDOM.createRoot(parent); // connect JS DOM to React DOM

// const title = React.createElement("h4", {}, "Shopping List");
// //                               (type, properties, children)
// //                                                 -> string, array, reactElement (Object)
// root.render(title);

// --------------- USE React to create unordered list with single item
// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// const item1 = React.createElement("li", {}, "Vegetables");
// const list = React.createElement("ul", {}, item1);

// root.render(list);

// --------------- USE React to create unordered list with single item
// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// const item1 = React.createElement("li", {}, "Vegetables");
// const item2 = React.createElement("li", {}, "Fruits");
// const list = React.createElement("ul", {}, [item1, item2]);

// root.render(list);

// ------------------ Understanding react object
// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// const item1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Vegetables , Fruits",
//     },
//     _owner: null,
//     _store: {},
// };
// console.log(item1);
// const list = React.createElement("ul", {}, item1);
// root.render(list);

// ----------------- more elements
// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// const item1 = React.createElement("li", {}, "Vegetables");
// const item2 = React.createElement("li", {}, "Fruits");
// const list = React.createElement("ul", {}, [item1, item2]);

// const heading = React.createElement("h4", {}, "Shopping List");

// const container = React.createElement("div", {}, [heading, list]);
// root.render(container);

// // -------------------------------- JSX
// // Add Babel CDN link
// // Add type="text/babel" in your script tag

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// // const heading = React.createElement("h4", {}, "Shopping List");
// const heading = <h4>Shopping List</h4>;

// root.render(heading);

// ---------------------------------------------
// -------------------------------- JSX

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);

// const heading = <h4>Shopping List</h4>;
// const li1 = <li>Vegetables</li>;
// const li2 = <li>Fruits</li>;
// const ul = (
//     <ul>
//         {li1} {li2}
//     </ul>
// );
// const container = (
//     <div>
//         {heading} {ul}
//     </div>
// );
// root.render(container);

// ------------------=====================================
const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

// React ELEMENT
const container = (
    <div>
        <h4 id="title">Shopping List</h4>
        <ul>
            <li className="list-item">Vegetables</li>
            <li className="list-item">Fruits</li>
        </ul>
    </div>
);

root.render(container);
