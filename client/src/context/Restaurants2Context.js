import React, { createContext, useState } from "react";

export const Restaurants2Context = createContext();

export const Restaurants2ContextProvider = ({ children }) => {

  const [restaurants2, setRestaurants2] = useState([]);
  const [selectedRestaurant2, setSelectedRestaurant2] = useState("");

  const addRestaurant2 = (restaurant2) => {
    setRestaurants2([...restaurants2, restaurant2]);
  };

  const deleteRestaurant2 = (id) => {
    let data = restaurants2.filter((restaurant2) => restaurant2.id !== id);
    setRestaurants2(data);
  };

  return (
    <Restaurants2Context.Provider
      value={{
        restaurants2,
        setRestaurants2,
        addRestaurant2,
        deleteRestaurant2,
        selectedRestaurant2,
        setSelectedRestaurant2,
      }}
    >
      {children}
    </Restaurants2Context.Provider>
  );

};





