import "./MissingPetCard.css";
import { Link } from "react-router-dom";


const MissingPetCard = ({
  pet,
  petFoundHandler,
  updatePetHandler,
}) => {


  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p><strong>Missing pet type:</strong> {pet.type}</p>
      <p><strong>Missing pet colour:</strong> {pet.colour}</p>
      <p><strong>Missing since:</strong> {pet.missingSince}</p>
      <p><strong>Missing from:</strong> {pet.missingFrom}</p>
      <p><strong>Contact details:</strong> {pet.contactDetail}</p>
      <div className="card-buttons">
            <button
              onClick={() => petFoundHandler(pet._id)}
              className="button-alt"
            >
              Mark as found
            </button>
           : (
            <h3>Pet Found</h3>
          )
          <Link to="/register">
            <i
              onClick={() => updatePetHandler(pet, false)}
              className="fa-solid fa-file-pen"
            ></i>
          </Link>
      </div>
    </div>
  );
};

export default MissingPetCard;