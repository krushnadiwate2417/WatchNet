import React from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from "./src/components/Body";


const App = ()=>{
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Body/>
    },
    {
        path : "/login",
        element : <Body/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)