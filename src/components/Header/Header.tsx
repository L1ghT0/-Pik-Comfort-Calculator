import {NavLink} from "react-router-dom"
import HeaderClasses from "./Header.module.css"
import ButtonsClasses from "./../../common/buttons/Buttons.module.css"


interface myProps {

}

const Header = (props: myProps) => {
    return (
        <header className={HeaderClasses.header_page}>
            <div>
                <NavLink to='/' className={ButtonsClasses.ButtonBasicStyles}>Home</NavLink>
            </div>
        </header>
    )
}

export default Header