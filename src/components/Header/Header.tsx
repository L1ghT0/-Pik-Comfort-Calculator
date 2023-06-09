import {NavLink} from "react-router-dom"
import HeaderClasses from "./Header.module.css"


interface myProps {

}

const Header = (props: myProps) => {
    return (
        <header className={HeaderClasses.header_page}>
            <div >
                <NavLink to='/'>Home</NavLink>
            </div>
        </header>
    )
}

export default Header