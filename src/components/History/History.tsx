import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    remove: boolean,
}

interface myProps {
    results: Array<any>
    remove: any
}

const History = (props: myProps) => {

    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        props.remove(formData.remove);
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