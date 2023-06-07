
interface myProps {
    results: Array<any>
}

const History = (props:myProps) => {

    let elements = props.results.map(item => <div>{item.date}__{item.result}__{item.valueFromField1}__{item.valueFromField2}</div>)

    return (
        <div>
            {elements}
        </div>
    )
}

export default History