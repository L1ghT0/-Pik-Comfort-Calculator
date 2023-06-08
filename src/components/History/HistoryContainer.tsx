import {connect} from "react-redux";
import History from "./History";
import {remove} from "../../redux/historyReducer/HistoryReducer";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

interface myProps {
    results: Array<any>
    remove: ActionCreatorWithPayload<any>
}

const HistoryContainer = (props: myProps) => {

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

export default connect(mapStateToProps, {remove})(HistoryContainer);