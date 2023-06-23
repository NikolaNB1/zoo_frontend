import { useState } from "react";
import { addAnimal } from "../service/animalsService";
import AnimalsContext from "./AnimalsContext";

const AnimalProvider = ({ children }) => {
  const [animalState, setAnimalState] = useState([]);

  const postNewAnimal = (animal) => {
    const existingAnimal = animalState.find((c) => c.name === animal.name);
    if (existingAnimal) {
      return;
    }
    addAnimal(animal).then(({ data }) => {
      setAnimalState((prevState) => [...prevState, data]);
    });
  };

  const animalContext = {
    animals: animalState,
    updateAnimal: setAnimalState,
    postAnimal: postNewAnimal,
  };
  return (
    <AnimalsContext.Provider value={animalContext}>
      {children}
    </AnimalsContext.Provider>
  );
};

export default AnimalProvider;
