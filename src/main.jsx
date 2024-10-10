// /* eslint-disable react/jsx-no-undef */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About/About.jsx";
import './index.css'

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
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
);

export default createRoot;
