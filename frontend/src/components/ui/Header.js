import React, {useState} from 'react'
import logo from '../img/DUNE.svg'
import menuIcon from '../img/menu.png';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <header>
            <img className="nav-logo" src={logo} alt="logo" />
            <nav className="navbar">
                <ul className="nav-menu" id={showLinks ? "hidden" : ""}>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Documentation</a></li>
                    <li><a href="/#">Contact</a></li>
                </ul>
            </nav>
            <img className="menu-icon" src={menuIcon} onClick={()=>setShowLinks(!showLinks)} alt="menu-icon" />
      </header>
    )
}

export default Header
