import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {addCookie} from "../../redux/historyReducer/HistoryReducer";
import CalculateForm from "./CalculateForm";

function calculate(value1: number, value2: number) {
    return value1 + value2;
}

function getDate() {
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();

    return `${WeekDays[date.getDay()]} ${date.getDate() < 10
        ? `0${date.getDate()}`
        : date.getDate()}.${date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1}.${date.getFullYear()} ${date.getHours() < 10
        ? `0${date.getHours()}`
        : date.getHours()}:${date.getMinutes() < 10
        ? `0${date.getMinutes()}`
        : date.getMinutes()}`;
}


interface ICalculateFormContainer {
    addCookie: ActionCreatorWithPayload<any>
}

const CalculateFormContainer = (props: ICalculateFormContainer) => {

    return (
        <CalculateForm addCookie={props.addCookie} calculate={calculate} getDate={getDate}/>
    )
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {addCookie})(CalculateFormContainer)