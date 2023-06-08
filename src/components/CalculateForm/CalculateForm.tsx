import {isNumber} from "../../utils/validators/validators";
import React from "react";
import Cookies from "universal-cookie";
import {SubmitHandler, useForm} from "react-hook-form";

interface myProps {

}

type Inputs = {
    field1: number,
    field2: number,
}

function calculate(v1: number, v2: number) {
    return v1 + v2;
}

function getDate(){
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();

    return `${WeekDays[date.getDay()]} ${date.getDate() < 10 ? `0${date.getDate()}`
        : date.getDate()}.${date.getMonth() < 10 ? `0${date.getMonth()}`
        : date.getMonth()}.${date.getFullYear()} ${date.getHours() < 10 ? `0${date.getHours()}`
        : date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}`
        : date.getMinutes()}`;
}

const CalculateForm = (props: myProps) => {
    let coockie = new Cookies()

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        const date = getDate();
        let result: number = calculate(+formData.field1, +formData.field2)
        console.log(result);
        console.log(date);
        //coockie.set("",result, {})
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder="field1"
                           {...register(
                               "field1",
                               {
                                   required: 'This field is required',
                                   validate: {v: (v) => isNumber(v) || "value is not a number"}
                               })}
                           className={errors.field1 ? "field1 Error" : undefined}/>
                    {errors.field1 && <span>{errors.field1?.message}</span>}
                </div>
                <div>
                    <input placeholder="field2"
                           {...register(
                               "field2",
                               {
                                   required: 'This field is required',
                                   validate: {v: (v) => isNumber(v) || "value is not a number"}
                               })}
                           className={errors.field2 ? "passwordError" : undefined}/>
                    {errors.field2 && <span>{errors.field2?.message}</span>}
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default CalculateForm