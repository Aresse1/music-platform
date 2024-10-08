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
        <div onClick={setTrack} className={styles.track}>
            <img  className={styles.picture} src={apiUrl + props.picture} alt="#" />
            <div className={styles.items}>
                <p className={styles.item}>{props.name}</p>
                <p className={styles.item2}>{props.artist}</p>
            </div>
            <DeleteTrack id={props.id}/>
        </div>
    )
}

export {Track}