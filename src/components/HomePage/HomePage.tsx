import {NavLink} from "react-router-dom";
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"
import HomePageClasses from "./HomePage.module.css"

interface myProps {

}

const HomePage = (props: myProps) => {
    return (
        <div className={HomePageClasses.wrapper}>
            <div className={HomePageClasses.description}>
                Hello dear friend!<br/>
                This simple application can be used for a specific purpose:
                to calculate the payment for water heating. <br/>
                The calculator used is only suitable for everyone who lives in <span>"Пик комфорт"</span> apartments. <br/>
                The application also has a history of your results; however,
                it keeps your data locally which means you can not see your history using another device or browser.
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