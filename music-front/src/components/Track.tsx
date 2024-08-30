import styles from "./styles/Track.module.css"
import { Itrack } from "../types/"
import DeleteTrack from "./UI/DeleteTrack"
import { useDispatch } from "react-redux"
import { trackActions } from "../redux/store"

const Track = (props: Itrack) => {
    const apiUrl = import.meta.env.VITE_APP_API
    const dispatch = useDispatch()
    const setTrack = () => dispatch(trackActions.setTrack(props))

    return (
        <div className={styles.track}>
            <img onClick={setTrack} className={styles.picture} src={apiUrl + props.picture} alt="#" />
            <div className={styles.items}>
                <h2 className={styles.item}>{props.name}</h2>
                <p className={styles.item2}>{props.artist}</p>
            </div>
            <DeleteTrack id={props.id}/>
        </div>
    )
}

export {Track}