import { connect } from "react-redux";
import { addInHistory } from "../../redux/historyReducer/HistoryReducer";
import CalculateForm from "./CalculateForm";

interface myProps {
    addInHistory: typeof addInHistory
}

const CalculateFormContainer = (props: myProps) => {

    return(
        <CalculateForm addInHistory={props.addInHistory}/>
    )
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps,{addInHistory})(CalculateFormContainer)