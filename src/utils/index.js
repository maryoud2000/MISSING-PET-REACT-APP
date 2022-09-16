// Fetch requests here
  
  //create missing pet
  export const createMissingPet = async (
    name,
    type,
    colour,
    missingSince,
    missingFrom,
  ) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}missing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          type: type,
          colour: colour,
          userId: userId,
          missingSince: missingSince,
          missingFrom: missingFrom,
        }),
      });
      const data = await response.json();
  
      // setMissingPet(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  // List all missing pet
  export const listMissingPets = async (
    filterKey,
    filterVal,
    setMissingPets
  ) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_REST_API}missing/filtered`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filterKey: filterKey,
            filterVal: filterVal,
          }),
        }
      );
  
      const data = await response.json();
      setMissingPets(data);
    } catch (error) {
      console.log(error);
    }
  };