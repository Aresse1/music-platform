import '../styles/Header.css'
import logo from './logo.ico' 

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="" />
            <nav className="header__nav">
                <div className="header__nav-item">
                    <a className="header__nav-item a" href="/">Home</a>
                </div>
                <div className="header__nav-item">
                    <a className="header__nav-item a" href="/library">Library</a>
                </div>
                <div className="header__nav-item">
                    <a className="header__nav-item a" href="/library">Library</a>
                </div>
                <div className="header__nav-item">
                    <a className="header__nav-item a" href="/library">Library</a>
                </div>
            </nav>
        </div>
    )
}

export default Header