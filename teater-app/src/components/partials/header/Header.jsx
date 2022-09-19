import { Navbar } from "../navbar/Navbar"
import Logo from '../../../assets/images/Logo.svg'
import { Search } from "../search/Search"
import Style from './header.module.scss'


export const Header = () => {

    return (
        <header className={Style.header}>
            <img src={Logo} alt="Logo" />
            <div className={Style.navcontainer}>
                <Search />
                <Navbar />
            </div>
        </header>
    )
}