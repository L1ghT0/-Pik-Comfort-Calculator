import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    results: [
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2", id: 1},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2", id: 2},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2", id: 3},
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test2", id: 4},
    ],
}

const historySlice = createSlice({
    name: "history",
    initialState: initialState,
    reducers: {
        initializeHistory(state, action){
            //state.results.push(action.payload)
        },
        // remove(state, action){
        //     state.results.splice(action.payload, 1);
        // }
    }
});

export const { initializeHistory } = historySlice.actions

export default historySlice.reducer