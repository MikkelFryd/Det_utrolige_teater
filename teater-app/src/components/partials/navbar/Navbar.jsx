import { Link } from "react-router-dom"
import Style from './navbar.module.scss'

export const Navbar = () => {


    return (
        <nav className={Style.navbar}>
            <Link to="/">FORSIDE</Link>
            <Link to="/events">FORESTILLINGER & EVENTS</Link>
            <Link to="/actors">SKUESPILLERE</Link>
            <Link to="/login">LOGIN</Link>
        </nav>
    )
}