import { Navbar } from "../navbar/Navbar"
import Logo from '../../../assets/images/Logo.svg'
import Style from './header.module.scss'
import { Search } from "../search/Search"


export const Header = props => {


    return (
        <header className={Style.header}>
            <img src={Logo} alt="Logo" />
            <div className={Style.navcontainer}>
                <Search setSearchData={props.setSearchData}/>
                <Navbar />
            </div>
        </header>
    )
}