import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from './logo.ico' 
import {Search} from "./Search"

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="" />
            <nav className="header__nav">
                <div className="header__nav-item">
                    <Link to="/" className="header__nav-item a">Home</Link>
                </div>
                <div className="header__nav-item">
                    <Link to="/library" className="header__nav-item a">Library</Link>
                </div>
                <div className="header__nav-item">
                    <Link to="/" className="header__nav-item a">Home</Link>
                </div>
                <div className="header__nav-item">
                    <Link to="/" className="header__nav-item a">Home</Link>
                </div>
                <Search/>
            </nav>
        </div>
    )
}

export default Header