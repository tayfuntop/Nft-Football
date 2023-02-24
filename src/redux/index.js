import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import { modalReducer, dataReducer } from "./reducers";

const store = configureStore({
    reducer: combineReducers({ modalReducer, dataReducer }),
    middleware: [thunk],
});

export default store;
