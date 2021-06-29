import React, { createContext, useContext, useEffect, useState } from 'react';

const resolveTheme = (): 'light' | 'dark' => {
  let theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  if (!theme) {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
    theme = matches ? 'dark' : 'light';
  }
  return theme as 'light' | 'dark';
};

const ThemeState = createContext<'dark' | 'light' | null>(null);
const ThemeDispatch = createContext<null | (() => void)>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export default function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setCurrentTheme(resolveTheme());
  }, []);

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
