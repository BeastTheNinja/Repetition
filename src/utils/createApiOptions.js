// Hjælpefunktion til at formatere dato og priszone til API-kald
// Returnerer objekt med år, måned, dag og priszone (bruges i useApi)
export const createApiOptions = ({
  date = new Date(),
  priceClass = "DK1",
} = {}) => {
  const dato = new Date(date);
  if (Number.isNaN(dato.getTime())) {
    throw new Error("Invalid date");
  }

  const year = dato.getFullYear();
  const month = String(dato.getMonth() + 1).padStart(2, "0");
  const day = String(dato.getDate()).padStart(2, "0");

  return { year, month, day, priceClass };
};
