import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";

const CitiesContext = createContext();

const BASE_URL = `http://localhost:8000`;

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading the data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function UseCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "Using the context(CitiesContext) out side of the  Context Provider(CitiesProvider)"
    );
  return context;
}
