import axios from "axios";
import { Link } from "react-router-dom";
import classes from "../styles/DeleteButton.module.css";

interface DeleteTrackProps {
  id: string;
}

const DeleteTrack: React.FC<DeleteTrackProps> = ({ id }) => {
  const apiUrl = import.meta.env.VITE_APP_API

  const handleDelete = async () => {
    try {
     await axios.delete(`${apiUrl}tracks/${id}`);


      
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div>
      <Link className={classes.button} type="button" to="/library" onClick={handleDelete}>
        <p className={classes.icon}>❌</p>
      </Link>
    </div>
  );
};

export default DeleteTrack;