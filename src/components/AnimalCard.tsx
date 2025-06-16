import type { Animal } from "../models/Animals";
import { Link } from "react-router";
import { FallbackImage } from "./FallbackImage";
import { getAnimalStatus } from "../helpers/getAnimalStatus";

interface Props {
  animal: Animal;
}

export const AnimalCard = ({ animal }: Props) => {
  const status = getAnimalStatus(animal.lastFed);

  const statusText = {
    mätt: "Mätt",
    snartHungrig: "Snart mat-dags",
    hungrig: "Hungrig",
  };

  const statusColor = {
    mätt: "🟢",
    snartHungrig: "🟡",
    hungrig: "🔴",
  };

  return (
    <Link to={`/animals/${animal.id}`} className="animal-card-link">
      <div className="animal-card">
        <FallbackImage src={animal.imageUrl} alt={animal.name} />
        <div className="status">
          <h2>{animal.name}</h2>
          <span className={`status ${status}`}>
            {statusColor[status]} {statusText[status]}
          </span>
        </div>
        <p>{animal.shortDescription}</p>
      </div>
    </Link>
  );
};
