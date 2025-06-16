import type { Animal } from "../models/Animals";

export enum AnimalActionType {
  FEED,
  INIT,
}

export type Action =
  | {
      type: AnimalActionType.INIT;
      payload: Animal[];
    }
  | {
      type: AnimalActionType.FEED;
      payload: { id: number; lastFed: string };
    };

export const AnimalReducer = (animals: Animal[], action: Action): Animal[] => {
  switch (action.type) {
    case AnimalActionType.INIT:
      return action.payload;

    case AnimalActionType.FEED: {
      const updatedAnimals = animals.map((a) =>
        a.id === action.payload.id
          ? { ...a, lastFed: action.payload.lastFed }
          : a
      );

      localStorage.setItem("fedAnimals", JSON.stringify(updatedAnimals));

      return updatedAnimals;
    }

    default:
      return animals;
  }
};
