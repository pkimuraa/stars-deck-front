import { useState, useEffect, useCallback } from "react";
import api from "./api";

/*
 *  Data fetch custom hook
 *  Inspired and improved from https://www.robinwieruch.de/react-hooks-fetch-data
 */
export function useApiRequest(path, initialValue) {
  const valueState = useState(initialValue);
  const errorState = useState(false);
  const loadingState = useState(false);

  const [value, setValue] = valueState;
  const [error, setError] = errorState;
  const [loading, setLoading] = loadingState;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(path);
      setValue(data);
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }, [path, setValue, setError, setLoading]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [{ data: value, isLoading: loading, error: error }, fetchData];
}

export default useApiRequest;
