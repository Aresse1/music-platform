import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import Home from './icons/HeaderPhone/Home'
import NoneLiked from './icons/Liked/NoneLiked'
import Settings from './icons/HeaderPhone/Settings'




const Header = () => {

    return (
        <div className={styles.header}>
            <div>
                <Link to="/"><Home/></Link>
            </div>
            <div>
                <Link to="/library"><NoneLiked/></Link>
            </div>
            <div>
                <Link to="/settings"><Settings/></Link>
            </div>
        </div>
    )
}

export default Header