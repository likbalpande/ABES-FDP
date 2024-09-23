// const React = require("react"); // common js
import React from "react"; // ES6
import ReactDOM from "react-dom";

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

// const title = React.createElement("h1", {}, "Hello from React APP!");

// React ELEMENT
// const Title = <h1>Hello from JSX</h1>; // Pascal Case
// root.render(Title);

// React Component
const Title = () => {
    // logic
    return (
        <div>
            <ul>
                <li>Hello from React Component</li>
                <li>Hello from Pont 2</li>
            </ul>
        </div>
    );
};
root.render(Title());
// root.render(<Title />);
