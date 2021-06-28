import React from 'react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { ToggleThemeBtnBox } from './styles';
import { useThemeState, useToggleTheme } from 'hooks/ThemeProvider';

export function ToggleThemeBtn(): JSX.Element {
  const onToggleTheme = useToggleTheme();
  const currentTheme = useThemeState();

  return (
    <ToggleThemeBtnBox onClick={onToggleTheme} currentTheme={currentTheme}>
      {currentTheme === 'light' ? <RiSunFill /> : <RiMoonClearFill />}
    </ToggleThemeBtnBox>
  );
}
