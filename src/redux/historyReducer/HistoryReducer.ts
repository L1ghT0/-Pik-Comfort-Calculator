import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface historyState {
    results: Array<any>
}

let initialState = {
    results: [
        {date: "date", result: "result", valueFromField1: "test1", valueFromField2: "test1", id: '1'},
        {date: "date", result: "result", valueFromField1: "test2", valueFromField2: "test2", id: '2'},
        {date: "date", result: "result", valueFromField1: "test3", valueFromField2: "test3", id: '3'},
        {date: "date", result: "result", valueFromField1: "test4", valueFromField2: "test4", id: '4'},
    ],
} as historyState

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        initializeHistory(state, action) {
            //state.results.push(action.payload)
        },
        remove(state, action: PayloadAction<Array<string>>) {
            if (action.payload) {
                state.results = state.results.filter(item => !action.payload.includes(item.id))
            }
        },
    }
});

export const {initializeHistory, remove} = historySlice.actions
export default historySlice.reducer