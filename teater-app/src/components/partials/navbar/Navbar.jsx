import { Link } from "react-router-dom"

export const Navbar = () => {


    return (
        <nav>
            <Link to="/">FORSIDE</Link>
            <Link to="/performances">FORESTILLINGER & EVENTS</Link>
            <Link to="/actors">SKUESPILLERE</Link>
            <Link to="/login">LOGIN</Link>
        </nav>
    )
}