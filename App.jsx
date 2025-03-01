import React from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Browse from "./src/components/Browse";
import Gpt from "./src/components/GPT";


const App = ()=>{
    return (
        <>
           <Provider store={appStore}>
            <RouterProvider router={appRouter}/>
           </Provider>
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
    },
    {
        path : "/browse",
        element : <Browse/>
    },
    {
        path : "/gptSearch",
        element : <Gpt/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)