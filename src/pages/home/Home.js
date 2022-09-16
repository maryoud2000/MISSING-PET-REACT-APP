import { Link } from "react-router-dom";
import { useState } from "react";
import MissingPetList from "../../components/missingPetList/MissingPetList.js";
import "./Home.css";

const Home = ({ updatePetHandler, createPetHandler }) => {
  const [filterOrigin, setFilterOrigin] = useState({});

  const filterOriginHandler = () => {
      setFilterOrigin({ origin: "myMP", value: "All" });  
  };

  return (
    <>
      <section className="home-container">
        <section className="search-container">
          <div>
              <button
                onClick={() => filterOriginHandler()}
                className="button-main"
              >
                All Missing Pets
              </button>
            <Link to="/register">
              <button
                onClick={() => createPetHandler(true)}
                className="button-main"
              >
                Register Missing Pet
              </button>
            </Link>
          </div>
        </section>
        <MissingPetList
          filterOrigin={filterOrigin}
          updatePetHandler={updatePetHandler}
        />
      </section>
    </>
  );
};

export default Home;