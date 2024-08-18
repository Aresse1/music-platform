import { Link } from "react-router-dom"
import styles from '../styles/BackButton.module.css'


const BackButton = () => {
    return (
        <div>
            <Link type="button" className={styles.button} to="/library">
            <p className={styles.icon}>❮</p>
            </Link>
        </div>
    )
}

export default BackButton