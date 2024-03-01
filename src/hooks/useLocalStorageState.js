import { useState } from "react";
import { useEffect } from "react";

/**
 * A custom hook to persist state to local storage. Takes an initial state and a key
 * @param {any} initialState The initial state
 * @param {string} key The local storage key
 * @returns {Array} A stateful value and a function to update it
 */
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
