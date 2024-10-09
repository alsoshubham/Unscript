// /* eslint-disable react/jsx-no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About/About.jsx";

const router =  createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                path:" ",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);

export default createRoot;
