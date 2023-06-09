import {NavLink} from "react-router-dom";
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"
import HomePageClasses from "./HomePage.module.css"

interface myProps {

}

const HomePage = (props: myProps) => {
    return (
        <div className={HomePageClasses.wrapper}>
            <div className={HomePageClasses.description}>
                Description
            </div>
            <div className={HomePageClasses.buttons}>
                <div className={HomePageClasses.history}>
                    <NavLink to='/history/' className={ButtonsClasses.ButtonBasicStyles}>history</NavLink>
                </div>
                <div className={HomePageClasses.calculate}>
                    <NavLink to='/calculate/' className={ButtonsClasses.ButtonBasicStyles}>calculate</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HomePage