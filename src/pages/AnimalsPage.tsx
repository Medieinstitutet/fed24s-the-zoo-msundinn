import { AnimalCard } from "../components/AnimalCard";
import { useAnimals } from "../hooks/useAnimals";

export const AnimalsPage = () => {
  const { animals, hasFetched } = useAnimals();

  return (
    <>
      <img src="/h1.png" alt="Våra djur" className="h1-image" />
      {!hasFetched && <p>Laddar...</p>}
      <ul className="animal-list">
        {animals.map((animal) => (
          <li key={animal.id}>
            <AnimalCard animal={animal} />
          </li>
        ))}
      </ul>
    </>
  );
};
