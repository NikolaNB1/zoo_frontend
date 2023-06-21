import { useContext, useEffect, useState } from "react";
import { getAnimals } from "../service/animalsService";
import AnimalsContext from "../storage/AnimalsContext";
import AnimalRow from "../components/AnimalRow";

const Animals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const { animals, updateAnimal } = useContext(AnimalsContext);

  useEffect(() => {
    document.querySelector(".nav").classList.add("affix");
    getAnimals(currentPage).then(({ data }) => {
      updateAnimal(data.data);
      setLastPage(data.last_page);
    });
  }, [currentPage]);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <AnimalRow animals={animals} />
      </div>
      <div className=" d-flex justify-content-center m-3">
        <nav aria-label="Page navigation example" style={{ opacity: "80%" }}>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">Page {currentPage}</span>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={goToNextPage}
                disabled={currentPage === lastPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Animals;
