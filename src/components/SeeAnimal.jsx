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
        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        style={{ backgroundColor: "white" }}
      >
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">
            {animal.name}
          </strong>
          <h3 class="mb-0">{animal.type}</h3>
          <div class="mb-1 text-body-secondary">Habitat: {animal.habitat}</div>
          <p class="card-text mb-auto">
            Rare: {animal.rare !== 0 ? "Yes" : "No"}
          </p>
          <p class="card-text mb-auto">
            No of type in zoo: {animal.count_in_zoo}
          </p>
          <p class="card-text mb-auto">Favorite food: {animal.favorite_food}</p>
        </div>
        <div class="col-auto d-none d-lg-block"></div>
      </div>
    </div>
  );
};

export default SeeAnimal;
