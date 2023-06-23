import { useEffect, useState } from "react";
import {
  addAnimal,
  editAnimalById,
  getAnimalById,
} from "../service/animalsService";
import { useNavigate, useParams } from "react-router-dom";

const AddAnimalForm = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [animal, setAnimal] = useState({
    name: "",
    type: "",
    habitat: "",
    rare: false,
    count_in_zoo: 0,
    favorite_food: "",
  });

  useEffect(() => {
    document.querySelector(".nav").classList.add("affix");
    if (id) {
      getAnimalById(id).then(({ data }) => {
        setAnimal(data);
      });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChecked = () => {
    setAnimal((prevState) => ({
      ...prevState,
      rare: !prevState.rare,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(animal);
    if (id) {
      editAnimalById(id, animal);
    } else {
      addAnimal(
        animal.name,
        animal.type,
        animal.habitat,
        animal.rare,
        animal.count_in_zoo,
        animal.favorite_food
      );
      setAnimal({
        name: "",
        type: "",
        habitat: "",
        rare: false,
        count_in_zoo: 0,
        favorite_food: "",
      });
    }
    navigate("/animals");
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div
            className="card w-75 container"
            style={{ opacity: "90%", marginTop: "150px" }}
          >
            <h5 className="text-center mb-4">Add new animal in My Zoo</h5>
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter animals name"
                    value={animal.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Type<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter animals type"
                    value={animal.type}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Natural habitat<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="habitat"
                    placeholder="Enter animals habitat"
                    value={animal.habitat}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Favorite food<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    name="favorite_food"
                    placeholder="Enter animals favorite food"
                    value={animal.favorite_food}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Count in zoo<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="number"
                    name="count_in_zoo"
                    placeholder=""
                    value={animal.count_in_zoo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row justify-content-center text-left mt-3">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label htmlFor="rare" className="form-control-label px-3">
                    Rare?
                  </label>
                  <input
                    type="checkbox"
                    name="rare"
                    checked={animal.rare}
                    value={animal.rare}
                    onChange={handleChecked}
                  />
                </div>
              </div>
              <div className="row justify-content-end mt-3">
                <div className="form-group col-sm-6">
                  {!id ? (
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={handleSubmit}
                    >
                      Add animal
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-warning"
                      onClick={handleSubmit}
                    >
                      Edit animal
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddAnimalForm;
