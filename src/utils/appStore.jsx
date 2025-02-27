import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import langReducer from "./langSlice";

const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : movieReducer,
            lang : langReducer,
        }
    }
)

export default appStore;