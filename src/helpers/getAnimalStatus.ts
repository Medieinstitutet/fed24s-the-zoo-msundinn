export const getAnimalStatus = (
  lastFed: string
): "mätt" | "snartHungrig" | "hungrig" => {
  const lastFedTime = new Date(lastFed).getTime();
  const now = new Date().getTime();
  const hours = (now - lastFedTime) / (1000 * 60 * 60);

  if (hours >= 5) return "hungrig";
  if (hours >= 3) return "snartHungrig";
  return "mätt";
};
