import Library from "../Library"
import BasicModal from "../UI/Modal"
import styles from '../styles/LibraryPage.module.css'

const LibraryPage = () => {
    
    return (
        <div className={styles.container}>
            <h1 >Library</h1>
            <Library/>
            <BasicModal/>
        </div>
    )
}

export {LibraryPage}