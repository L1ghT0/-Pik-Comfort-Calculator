import {SubmitHandler, useForm} from "react-hook-form";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import HistoryClasses from "./History.module.css"
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"
import React, {useState} from "react";


type Inputs = {
    readyToRemove: boolean,
}

interface IHistory {
    results: Array<any>
    removeCookie: ActionCreatorWithPayload<any>
}

const History = (props: IHistory) => {

    let [readyToRemove, SetReadyToRemove] = useState<string[]>([])
    const checkboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target){
            if(readyToRemove.includes(e.target.value)){
                SetReadyToRemove(readyToRemove.filter(item => item !== e.target.value))
                return;
            }
            SetReadyToRemove([...readyToRemove, e.target.value]);
        }
    }
    const cleanReadyToRemove = () => {
        SetReadyToRemove([]);
    }

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        cleanReadyToRemove();
        props.removeCookie(formData.readyToRemove);
    };

    let elements = props.results.map(item => {
        return (
            <div key={item.id} className={HistoryClasses.historyItem}>
                <div>
                    <span>Date: {item.date}</span><br/>
                    <span>Value from field1: {item.valueFromField1}</span><br/>
                    <span>Value from field2: {item.valueFromField2}</span><br/>
                    <span>Result: {item.result}</span>
                </div>
                <input type="checkbox" onInput={checkboxToggle} value={item.id} {...register("readyToRemove",)}/>
            </div>
        )
    });
    console.log(readyToRemove);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {elements}
                {elements.length ? undefined : <span className={HistoryClasses.noRecords}>No records</span>}
                {readyToRemove.length ? <input type="submit" value="Delete" className={ButtonsClasses.ButtonBasicStyles}/> : undefined}
            </form>
        </div>
    )
}

export default History