import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    results: [],
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