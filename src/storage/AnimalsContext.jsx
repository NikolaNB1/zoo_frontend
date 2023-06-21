import { createContext } from "react";

const AnimalsContext = createContext({
  animals: [],
  updateAnimal: () => {},
  addAnimal: () => {},
});

export default AnimalsContext;
