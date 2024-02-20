import { useState } from "react";
import { useEffect } from "react";

const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorageState;
