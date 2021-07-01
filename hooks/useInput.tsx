import React, { useCallback, useState } from 'react';

export default function useInput(
  initialState = ''
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(initialState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return [value, onChange, setValue];
}
