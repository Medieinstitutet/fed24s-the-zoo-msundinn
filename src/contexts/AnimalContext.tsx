import { createContext, type Dispatch } from "react";
import type { Animal } from "../models/Animals";
import type { Action } from "../reducers/animalsReducer";

interface IAnimalsContext {
  animals: Animal[];
  dispatch: Dispatch<Action>;
}

export const AnimalContext = createContext<IAnimalsContext>({
  animals: [],
  dispatch: () => {},
});
