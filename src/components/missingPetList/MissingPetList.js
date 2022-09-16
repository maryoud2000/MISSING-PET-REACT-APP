import "./MissingPetList.css";
import { useState, useEffect } from "react";
import { fetchRequest } from "../../utils/fetchDry";
import MissingPetCard from "../missingPetCard/MissingPetCard.js";

const MissingPetList = ({ filterOrigin, updatePetHandler }) => {
  const [mps, setMps] = useState([]);
  const [listHeader, setListHeader] = useState();

  const getMps = async () => {
    let payload;
    let endpoint;
    
      setListHeader("All Missing Pets");
      endpoint = "missing/filtered";
      payload = {
        filterKey: "publicVisible",
        filterVal: true,
      };

    const data = await fetchRequest(endpoint, payload, "POST");

    setMps(data.mps);
  };

  useEffect(() => {
    getMps();
  }, [filterOrigin, mps]);

  const petFoundHandler = async (id) => {
    const payload = {
      filterKey: "_id",
      filterVal: id,
      updateKey: "publicVisible",
      updateVal: false,
    };
    const data = await fetchRequest("missing", payload, "PATCH");
  };

  return (
    <div>
      <h1>{listHeader}</h1>
      <section className="pet-list">
        {mps.map((pet, index) => (
          <MissingPetCard
            key={index}
            pets={pet}
            petFoundHandler={petFoundHandler}
            // updatePetHandler={updatePetHandler}
          />
        ))}
      </section>
    </div>
  );
};

export default MissingPetList;