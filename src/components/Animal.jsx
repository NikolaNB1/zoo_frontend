import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../storage/UserContext";

const Animal = ({ animal, index, handleDelete }) => {
  const { loggedIn } = useContext(UserContext);
  return (
    <tr key={index}>
      <td>{animal.name}</td>
      <td>{animal.type}</td>
      <td>{animal.habitat}</td>
      <td>{animal.rare !== 0 ? "Yes" : "No"}</td>
      <td>{animal.count_in_zoo}</td>
      <td>{animal.favorite_food}</td>
      <td>
        <Link className="btn btn-outline-success" to={`/animals/${index}`}>
          See Animal
        </Link>
      </td>
      <td>
        <Link className="btn btn-outline-warning" to={`edit/${animal.id}`}>
          Edit Animal
        </Link>
      </td>
      <td>
        {/* {loggedIn ? ( */}
        <button
          className="btn btn-outline-danger"
          type="delete"
          onClick={() => handleDelete(animal.id)}
        >
          Delete Animal
        </button>
        {/* ) : null} */}
      </td>
    </tr>
  );
};
export default Animal;
