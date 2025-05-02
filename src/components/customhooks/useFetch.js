import { useEffect, useState } from "react";

function useFetch(url) {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        let data = await response.json(); // Await JSON conversion
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setProducts([]); //  Ensure products are empty on failure
      } finally {
        setLoading(false);
      }
    };

    fetchApi(); //  Call the function
  }, []); //  Depend on URL

  return { products, error, isLoading }
}

export default useFetch;
