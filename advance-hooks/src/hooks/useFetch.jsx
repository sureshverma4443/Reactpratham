import { useEffect, useState } from "react";
import { useLoading } from "./useLoading"; // ✅ will now work

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { loading, setLoading } = useLoading(true);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const result = await response.json();
        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url, setLoading]);

  return { data, loading, error };
}
