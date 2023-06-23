const SeeAnimal = ({ animals, index }) => {
  let animal = animals[index];

  return (
    <div
      className="container"
      style={{
        opacity: "80%",
        marginTop: "200px",
        width: "500px",
      }}
    >
      <div
        className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        style={{ backgroundColor: "white" }}
      >
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">
            {animal.name}
          </strong>
          <h3 className="mb-0">{animal.type}</h3>
          <div className="mb-1 text-body-secondary">
            Habitat: {animal.habitat}
          </div>
          <ul className="stats">
            <li>
              <var>{animal.rare !== 0 ? "Yes" : "No"}</var>
              <label>Rare</label>
            </li>
            <li>
              <var>{animal.count_in_zoo}</var>
              <label>No of type in zoo:</label>
            </li>
            <li>
              <var>{animal.favorite_food}</var>
              <label>Favorite food:</label>
            </li>
          </ul>
        </div>
        <div className="col-auto d-none d-lg-block"></div>
      </div>
    </div>
  );
};

export default SeeAnimal;
