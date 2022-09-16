import "./CreateMissing.css";
import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { fetchRequest } from "../../utils/fetchDry";

const CreateMissing = ({ missingPet, isCreate }) => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [colour, setColour] = useState();
  const [missingSince, setMissingSince] = useState();
  const [missingFrom, setMissingFrom] = useState();
  const [contactDetail, setContactDetail] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isCreate) {
      // Its an update so populate fields with existing data
      setName(missingPet.name);
      setType(missingPet.type);
      setColour(missingPet.colour);
      setMissingSince(missingPet.missingSince);
      setMissingFrom(missingPet.missingFrom);
      setContactDetail(missingPet.contactDetail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let httpVerb;
    let payload;
    if (isCreate) {
      // Its a create record
      httpVerb = "POST";
      payload = {
        name: name,
        type: type,
        colour: colour,
        missingSince: missingSince,
        missingFrom: missingFrom,
        contactDetail: contactDetail,
      };
    } else {
      //Its an update record
      httpVerb = "PUT";
      payload = {
        id: missingPet._id,
        data: {
          name: name,
          type: type,
          colour: colour,
          missingSince: missingSince,
          missingFrom: missingFrom,
          contactDetail: contactDetail,
        },
      };
    }
    const data = await fetchRequest("missing", payload, httpVerb);

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <>
      {isCreate ? (
        <h1>Register Missing Pet</h1>
      ) : (
        <h1>Update {name}'s details</h1>
      )}
      <form onSubmit={handleSubmit} className="missing-pet-form">
        <input
          type="text"
          name="name"
          placeholder="Missing pet's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Missing pet's type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="text"
          name="colour"
          placeholder="Missing pet's colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
          required
        />
       
        <input
          type="date"
          name="missingSince"
          placeholder="Missing since date"
          value={missingSince}
          onChange={(e) => setMissingSince(e.target.value)}
          required
        />
        <input
          type="text"
          name="missingFrom"
          placeholder="Area missing from"
          value={missingFrom}
          onChange={(e) => setMissingFrom(e.target.value)}
          required
        />
        <input
          type="text"
          name="contactDetail"
          placeholder="Contact details"
          value={contactDetail}
          onChange={(e) => setContactDetail(e.target.value)}
        />
        <div className="button-container">
          <Link to="/">
            <button className="button-main">Go Back</button>
          </Link>
          <button className="button-main" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateMissing;