import { Link} from "react-router-dom";


const Track = (props) => {
    return (
        <Link to={`/tracks/${props.id}`}>
        <div>
            <img src={props.picture} alt="#" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.artist}</p>
            </div>
            <p>{props.audio}</p>
        </div>
        </Link>
        
    )
}

export {Track}