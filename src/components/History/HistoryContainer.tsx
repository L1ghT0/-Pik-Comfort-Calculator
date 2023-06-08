import {connect} from "react-redux";
import History from "./History";
import {initializeHistory, remove} from "../../redux/historyReducer/HistoryReducer";
import {ActionCreator, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {useEffect} from "react";

interface myProps {
    results: Array<any>,
    remove: ActionCreatorWithPayload<any>,
    initializeHistory: ActionCreator<any>,
}

const HistoryContainer = (props: myProps) => {

    useEffect(()=>{
        props.initializeHistory();
    }, [])

    return (
        <div>
            <History results={props.results} remove={props.remove}/>
        </div>
    )
}

let mapStateToProps = (state: {historyReducer: {results: Array<any>}}) => {
    return {
        results: state.historyReducer.results
    }
}

export default connect(mapStateToProps, {remove, initializeHistory})(HistoryContainer);