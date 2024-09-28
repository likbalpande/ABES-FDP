import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import InfoPage from "./src/pages/InfoPage";
import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const parent = document.getElementById("parent-root");
const root = ReactDOM.createRoot(parent);

const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
    },
    {
        path: "/search",
        element: <SearchPage></SearchPage>,
    },
    {
        path: "/info",
        element: <InfoPage></InfoPage>,
    },
]);

const App = () => {
    return <RouterProvider router={routerConfig}></RouterProvider>;
};

root.render(<App />);
