import {connect} from "react-redux";
import History from "./History";

interface myProps {
    results: Array<any>
}

const HistoryContainer = (props: myProps) => {

    return (
        <div>
            <History results={props.results}/>
        </div>
    )
}

let mapStateToProps = (state: {historyReducer: {results: Array<any>}}) => {
    return {
        results: state.historyReducer.results
    }
}

export default connect(mapStateToProps, {})(HistoryContainer);