import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetSearchValueCallback = Dispatch<SetStateAction<string>>;

export const useDebouncedValue = (delay: number): [string, string, SetSearchValueCallback] => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);

  useEffect(() => {
    const onChange = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(onChange);
    };
  }, [searchValue, delay]);

  return [debouncedValue, searchValue, setSearchValue];
};
