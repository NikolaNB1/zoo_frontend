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
export const getAnimalById = (id) => {
  return API.get(`/animals/${id}`);
};

export const editAnimalById = (id, animal) => {
  return API.put(`/animals/${id}`, animal);
};
export const deleteAnimalById = (id) => {
  return API.delete(`/animals/${id}`);
};
