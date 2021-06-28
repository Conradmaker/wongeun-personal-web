import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeState = createContext<'dark' | 'light' | null>(null);
const ThemeDispatch = createContext<null | (() => void)>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const onTogggleTheme = React.useCallback(() => {
    setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ThemeState.Provider value={currentTheme}>
      <ThemeDispatch.Provider value={onTogggleTheme}>{children}</ThemeDispatch.Provider>
    </ThemeState.Provider>
  );
}

export const useThemeState = (): 'light' | 'dark' => {
  const context = useContext(ThemeState);
  if (!context) throw 'Can not find Context';
  return context;
};

export const useToggleTheme = (): (() => void) => {
  const dispatch = useContext(ThemeDispatch);
  if (!dispatch) throw 'Can not find Context';
  return dispatch;
};
