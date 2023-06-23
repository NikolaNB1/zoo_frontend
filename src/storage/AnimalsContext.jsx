import { createContext } from "react";

const AnimalsContext = createContext({
  animals: [],
  updateAnimal: () => {},
  postAnimal: () => {},
});

export default AnimalsContext;
