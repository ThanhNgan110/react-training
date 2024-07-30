import { useState, useEffect } from 'react';

const useDebouncedValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      // cleanup up when component unmount
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebouncedValue;
