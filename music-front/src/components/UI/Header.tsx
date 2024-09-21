import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Header.css'
import MenuIcon from './icons/Menu'


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleOpen = () => {
        setMenuActive(!menuActive)
    };

    return (
        <div className="header">
            <button className="menu_button" onClick={handleOpen}>
                <MenuIcon/>
            </button>
            {menuActive ?  (
                <div className="menu_hidden">
                    <p  className="header__nav-item">
                        <Link to="/" className="header__nav-item a">Home</Link>
                    </p>
                    <p className="header__nav-item">
                        <Link to="/library" className="header__nav-item a">Library</Link>
                    </p>
                </div>
            ): null}
        </div>
    )
}

export default Header