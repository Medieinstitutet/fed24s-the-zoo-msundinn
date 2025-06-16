import { useReducer } from "react";
import { AnimalReducer } from "../reducers/animalsReducer";
import { AnimalContext } from "../contexts/AnimalContext";

import { Outlet } from "react-router";

export const AnimalsApp = () => {
  const [animals, dispatch] = useReducer(AnimalReducer, []);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      <Outlet />
    </AnimalContext.Provider>
  );
};
