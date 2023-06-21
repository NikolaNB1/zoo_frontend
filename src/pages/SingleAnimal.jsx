import { useParams } from "react-router-dom";
import SeeAnimal from "../components/SeeAnimal";
import { useContext } from "react";
import AnimalsContext from "../storage/AnimalsContext";

const SingleAnimal = () => {
  const { animals } = useContext(AnimalsContext);
  const { id } = useParams();
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <SeeAnimal animals={animals} index={id} />
    </div>
  );
};

export default SingleAnimal;
