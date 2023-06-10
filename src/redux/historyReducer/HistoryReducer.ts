import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie';

interface historyState {
    results: Array<any>,
    newCookie: boolean,
}

let initialState = {
    results: [],
    newCookie: !isEmpty((new Cookies()).getAll()),
} as historyState

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        initializeHistory(state) {
            const cookies = new Cookies();
            if(state.newCookie){
                state.results = [];

                let result: Array<Array<string | object>> = Object.entries(cookies.getAll());
                result.forEach(([id, obj]: any) => {
                    state.results.push({...obj, id})
                });
                state.newCookie = false;
            }
        },
        removeCookie(state, action: PayloadAction<Array<string>>) {
            const cookies = new Cookies();
            if (action.payload) {
                let ArrCookies: any = Object.entries(cookies.getAll());
                ArrCookies.forEach(([id, obj]: any) => {
                    if(action.payload.includes(id)){
                        state.results = state.results.filter(item => !action.payload.includes(item.id))
                        cookies.remove(id, { path: '/' })
                    }
                });
            }
        },
        addCookie(state, action: PayloadAction<object>){
            const cookies = new Cookies();
            cookies.set(`${Object.entries(cookies.getAll()).length + 1}`, {...action.payload}, { path: '/' });
            state.newCookie = true;
        }
    }
});

function isEmpty(obj:object) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }
    return true;
}

export const {initializeHistory, removeCookie, addCookie} = historySlice.actions
export default historySlice.reducer