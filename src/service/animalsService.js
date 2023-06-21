import { API } from "../shared/api";

export const getAnimals = (currentPage) => {
  return API.get(`/animals?page=${currentPage}`);
};
export const addAnimal = (
  name,
  type,
  habitat,
  rare,
  count_in_zoo,
  favorite_food
) => {
  return API.post("/animals", {
    name,
    type,
    habitat,
    rare,
    count_in_zoo,
    favorite_food,
  });
};
