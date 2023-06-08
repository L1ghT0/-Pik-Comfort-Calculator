import {SubmitHandler, useForm} from "react-hook-form";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

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
            <div key={item.id}>
                <input type="checkbox" value={item.id} {...register("remove",)}/>
                <span >{item.date}__{item.result}__{item.valueFromField1}__{item.valueFromField2}</span>
            </div>
        )
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {elements}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default History