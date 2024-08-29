import styles from "./styles/Track.module.css"
import { Itrack } from "../types/"

const Track = (props: Itrack) => {
    const apiUrl = "http://localhost:5000/"

    return (
        <div className={styles.track}>
            <img className={styles.picture} src={apiUrl + props.picture} alt="#" />
            <div>
                <h2 className={styles.item}>{props.name}</h2>
                <p className={styles.item2}>{props.artist}</p>
            </div>
        </div>
    )
}

export {Track}