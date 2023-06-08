import {connect} from "react-redux";
import History from "./History";
import {initializeHistory, removeCookie} from "../../redux/historyReducer/HistoryReducer";
import {ActionCreator, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {useEffect} from "react";

interface IHistoryContainer {
    results: Array<any>,
    removeCookie: ActionCreatorWithPayload<any>,
    initializeHistory: ActionCreator<any>,
}

const HistoryContainer = (props: IHistoryContainer) => {

    useEffect(()=>{
        props.initializeHistory();
    }, [])

    return (
        <div>
            <History results={props.results} removeCookie={props.removeCookie}/>
        </div>
    )
}

let mapStateToProps = (state: {historyReducer: {results: Array<any>}}) => {
    return {
        results: state.historyReducer.results
    }
}

export default connect(mapStateToProps, {removeCookie, initializeHistory})(HistoryContainer);