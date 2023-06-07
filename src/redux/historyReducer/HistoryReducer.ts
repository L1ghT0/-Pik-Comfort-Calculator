import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    results: [
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2"},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2"},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2"},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2"},
    ],
}

const historySlice = createSlice({
    name: "history",
    initialState: initialState,
    reducers: {
        initializeHistory(state, action){
            //state.results.push(action.payload)
        }
    }
});

export const { initializeHistory } = historySlice.actions

export default historySlice.reducer