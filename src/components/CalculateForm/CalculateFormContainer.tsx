import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { addInHistory } from "../../redux/historyReducer/HistoryReducer";
import CalculateForm from "./CalculateForm";

function calculate(value1: number, value2: number) {
    return value1 + value2;
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


interface myProps {
    addInHistory: ActionCreatorWithPayload<any>
}

const CalculateFormContainer = (props: myProps) => {

    return(
        <CalculateForm addInHistory={props.addInHistory} calculate={calculate} getDate={getDate}/>
    )
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps,{addInHistory})(CalculateFormContainer)