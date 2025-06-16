import { useParams } from "react-router";
import { useAnimals } from "../hooks/useAnimals";
import { FallbackImage } from "../components/FallbackImage";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalActionType } from "../reducers/animalsReducer";

const getLastFed = (lastfed: string): number => {
  const lastFedTime = new Date(lastfed).getTime();
  const now = new Date().getTime();
  const diff = now - lastFedTime;
  const hours = diff / (1000 * 60 * 60);
  return hours;
};

export const AnimalDetailsPage = () => {
  const { id } = useParams();
  const { animals } = useAnimals();
  const { dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) {
    return <p>Djuret kunde inte hittas.</p>;
  }

  const hoursSinceFed = getLastFed(animal.lastFed);
  const canFeed = hoursSinceFed >= 4;

  const handleFeed = () => {
    const now = new Date().toISOString();

    localStorage.setItem(`lastFed-${animal.id}`, now);

    dispatch({
      type: AnimalActionType.FEED,
      payload: { id: animal.id, lastFed: now },
    });
  };

  return (
    <div className="detailed-animal">
      <div className="animal-image-btn">
        <FallbackImage
          className="animal-img"
          src={animal.imageUrl}
          alt={animal.name}
        />
        <button className="feed-btn" onClick={handleFeed} disabled={!canFeed}>
          Mata mig
        </button>
        {hoursSinceFed >= 3 && hoursSinceFed < 4 && (
          <p className="soon-hungry-msg">Djuret behöver snart matas</p>
        )}
      </div>
      <div className="animal-details">
        <h1>{animal.name}</h1>
        <p>{animal.longDescription}</p>
      </div>
    </div>
  );
};
