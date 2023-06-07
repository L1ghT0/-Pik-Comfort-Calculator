import { NavLink } from "react-router-dom"

interface myProps{

}

const Header = (props: myProps) => {
    return (
        <div>
            <header>
                <NavLink to='/'>Home</NavLink>
            </header>
        </div>
    )
}

export default Header