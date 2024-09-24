// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// // React Element
// // const Title = <h1>Hello fro React APP!</h1>;
// // root.render(Title);

// // React Component
// const Title = () => {
//     return <h1>HelloWorld!</h1>;
// };

// // root.render(Title());
// root.render(<Title />);

// ------------------------------- Nesting Components ------------
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const Navbar = () => {
//     const companyName = "Programming Pathshala";
//     return <div>{companyName}</div>;
// };

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             <h1>Hello World!</h1>
//         </div>
//     );
// };

// root.render(<App />);

// ------------------- CSS + Component with parameters ----------------------
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const Navbar = () => {
//     const companyName = "Programming Pathshala";
//     return <div className="navbar">{companyName}</div>;
// };

// const Card = (userName) => {
//     // let userName = "Likhilesh";
//     return (
//         <div className="info-card">
//             <h4>Name: {userName}</h4>
//             <h5>City: Delhi</h5>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             {Card("Ajay")}
//             {Card("Hemanth")}
//             {Card("Likhilesh")}
//         </div>
//     );
// };

// root.render(<App />);

// -------------- Function Props vs JSX Props ------------------
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const Navbar = () => {
//     const companyName = "Programming Pathshala";
//     return <div className="navbar">{companyName}</div>;
// };

// const Card = (properties) => {
//     console.log(properties);
//     return (
//         <div className="info-card">
//             <h4>Name: </h4>
//             <h5>City: Delhi</h5>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             {Card("Ajay")}
//             <Card name="ajay" />
//         </div>
//     );
// };

// root.render(<App />);

// ------------------------ JSX PROPS
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const Navbar = () => {
//     const companyName = "Programming Pathshala";
//     return <div className="navbar">{companyName}</div>;
// };

// const Card = (properties) => {
//     console.log(properties);
//     return (
//         <div className="info-card">
//             <h4>Name: {properties.name}</h4>
//             <h5>City: {properties.city}</h5>
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             {/* {Card({ name: "Ajay", city: "Delhi" })} */}
//             <Card name="Ajay" city="Jaipur" />
//         </div>
//     );
// };

// root.render(<App />);

// --------------- OBJECT destructuring ---------------
// const student = {
//   name: 'Ajay',
//   city: "Jaipur"
// }
// console.log(student.name)

// const student = {
//     name: "Ajay",
//     city: "Jaipur",
// };
// const { name } = student;
// console.log(name);

// -----------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const Navbar = () => {
    const companyName = "Programming Pathshala";
    return <div className="navbar">{companyName}</div>;
};

// const Card = (properties) => {
//     const { name, city } = properties;
//     return (
//         <div className="info-card">
//             <h4>Name: {name}</h4>
//             <h5>City: {city}</h5>
//         </div>
//     );
// };

const Card = ({ name, city }) => {
    return (
        <div className="info-card">
            <h4>Name: {name}</h4>
            <h5>City: {city}</h5>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <Card name="Ajay" city="Jaipur" />
        </div>
    );
};

root.render(<App />);
