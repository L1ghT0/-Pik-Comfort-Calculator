import {SubmitHandler, useForm} from "react-hook-form";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import HistoryClasses from "./History.module.css"
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"


type Inputs = {
    remove: boolean,
}

interface IHistory {
    results: Array<any>
    removeCookie: ActionCreatorWithPayload<any>
}

const History = (props: IHistory) => {

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        props.removeCookie(formData.remove);
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
                <input type="checkbox" value={item.id} {...register("remove",)}/>
            </div>
        )
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {elements}
                <input type="submit" value="Delete" className={ButtonsClasses.ButtonBasicStyles}/>
            </form>
        </div>
    )
}

export default History