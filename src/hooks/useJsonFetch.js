import { useState, useEffect } from "react";

// custom hook
export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();

        setData(result);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [{ data, isLoading, hasError }];
}
