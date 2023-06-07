import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import historyReducer from "./historyReducer/HistoryReducer";


let rootReducer = combineReducers({
    historyReducer: historyReducer,
});


let store = configureStore({
    reducer: rootReducer
})

export default store;
