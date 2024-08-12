import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory} from "react-router-dom";

const DeleteTrack = () => {
  const { id } = useParams();
  const apiUrl = "http://localhost:5000/";


  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${apiUrl}tracks/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Track</button>
    </div>
  );
};

export default DeleteTrack;