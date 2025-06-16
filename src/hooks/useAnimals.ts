import { useContext, useEffect, useState } from "react";
import type { Animal } from "../models/Animals";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalActionType } from "../reducers/animalsReducer";

export const useAnimals = () => {
  const { animals, dispatch } = useContext(AnimalContext);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(
          "https://animals.azurewebsites.net/api/animals"
        );
        const apiAnimals: Animal[] = await response.json();

        const saved = localStorage.getItem("fedAnimals");
        let finalAnimals = apiAnimals;

        if (saved) {
          const savedAnimals: Animal[] = JSON.parse(saved);

          finalAnimals = apiAnimals.map((animal) => {
            const savedAnimal = savedAnimals.find((a) => a.id === animal.id);
            return savedAnimal
              ? { ...animal, lastFed: savedAnimal.lastFed }
              : animal;
          });
        }

        dispatch({ type: AnimalActionType.INIT, payload: finalAnimals });
        setHasFetched(true);
      } catch (error) {
        console.error("fel vid hämtning av djur", error);
      }
    };

    if (!hasFetched && animals.length === 0) {
      fetchAnimals();
    }
  }, [dispatch, hasFetched, animals.length]);

  return { animals, hasFetched };
};
