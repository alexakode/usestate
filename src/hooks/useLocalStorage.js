import { useState, useEffect } from "react";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState((key, initialValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
