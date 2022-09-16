import "./index.css";
import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import CreateMissing from "./pages/createMissing/CreateMissing";

const App = () => {
  const [isCreate, setIsCreate] = useState(true);
  const [missingPet, setMissingPet] = useState();

  const updatePetHandler = (pet, isCreate) => {
    if (!isCreate) {
      setIsCreate(false);
      setMissingPet(pet);
    }
  };

  const createPetHandler = () => {
    setIsCreate(true);
    setMissingPet(null);
  };

  return (
    <div className="app-container">
      <main className="container">
        <Routes>
          <Route path="/" element={
              <Home
                updatePetHandler={updatePetHandler}
                createPetHandler={createPetHandler}
              />
            }
          />
          <Route
            path="/register"
            element={
              <CreateMissing
                isCreate={isCreate}
                setMissingPet={setMissingPet}
                missingPetn={missingPet}
                updatePetHandler={updatePetHandler}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;