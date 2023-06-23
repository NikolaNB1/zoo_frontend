import Animal from "./Animal";

const AnimalRow = ({ animals }) => {
  return (
    <div>
      <table
        className="table table-striped table-hover"
        style={{
          width: "max-content",
          textAlign: "center",
          marginTop: "130px",
          opacity: "85%",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Habitat</th>
            <th>Rare</th>
            <th>No of type in zoo</th>
            <th>Favorite food</th>
            <th>View</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AnimalRow;
