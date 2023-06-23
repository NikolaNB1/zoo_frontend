import { useEffect } from "react";
import AddAnimalForm from "../components/AddAnimalForm";

const AddAnimal = () => {
  useEffect(() => {
    document.querySelector(".nav").classList.add("affix");
  }, []);

  return (
    <div>
      <AddAnimalForm />
    </div>
  );
};
export default AddAnimal;
