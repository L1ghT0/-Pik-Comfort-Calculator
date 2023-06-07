import {NavLink} from "react-router-dom";

interface myProps{

}

const HomePage = (props: myProps) => {
    return (
        <div>
            <div>
                description
            </div>
            <div>
                <NavLink to='/calculate/'>calculate</NavLink>
            </div>
            <div>
                <NavLink to='/history/'>history</NavLink>
            </div>
        </div>
    )
}

export default HomePage