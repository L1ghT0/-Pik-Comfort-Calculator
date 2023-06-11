import {isNumber} from "../../utils/validators/validators";
import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"
import CalculateFormClasses from "./CalculateForm.module.css"


export interface ICalculateForm {
    addCookie: ActionCreatorWithPayload<any>
    getDate: () => string,
    calculate: (value1: number, value2: number) => number,
}

type Inputs = {
    field1: number,
    field2: number,
}

const CalculateForm = (props: ICalculateForm) => {
    let [result, setResult] = useState<number>(0)

    const {handleSubmit, reset, register, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        const date = props.getDate();
        let result: number = props.calculate(+formData.field1, +formData.field2)
        setResult(result);
        props.addCookie({
            date: date,
            result: result,
            valueFromField1: formData.field1,
            valueFromField2: formData.field2
        })
    };

    useEffect(()=> {
        if(isSubmitSuccessful){
            reset();
        }
    }, [isSubmitSuccessful, reset])

    return (
        <div className={CalculateFormClasses.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={CalculateFormClasses.inputWrapper}>
                    <div>
                        <input placeholder="field1"
                               {...register(
                                   "field1",
                                   {
                                       required: 'This field is required',
                                       validate: {isNumber: (v) => isNumber(v) || "Value is not a number",},
                                       maxLength : { value: 10, message: 'Max length is 10 symbols' },
                                   })}
                               className={errors.field1 ? CalculateFormClasses.fieldError : undefined}/>
                        {errors.field1 && <span>{errors.field1?.message}</span>}
                    </div>
                    <div>
                        <input placeholder="field2"
                               {...register(
                                   "field2",
                                   {
                                       required: 'This field is required',
                                       validate: {isNumber: (v) => isNumber(v) || "Value is not a number",},
                                       maxLength : { value: 10, message: 'Max length is 10 symbols' },
                                   })}
                               className={errors.field2 ? CalculateFormClasses.fieldError : undefined}/>
                        {errors.field2 && <span>{errors.field2?.message}</span>}
                    </div>
                    <div className={CalculateFormClasses.submitButton}>
                        <input type="submit" value="Calculate" className={ButtonsClasses.ButtonBasicStyles}/>
                    </div>
                </div>
                <div className={CalculateFormClasses.result}>
                    Result: {result}
                </div>
            </form>
        </div>
    )
}

export default CalculateForm