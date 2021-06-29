import React from 'react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';
import { ToggleThemeBtnBox, CloseBtnBox } from './styles';
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

type CloseBtnProps = {
  onClick: () => void;
};
export function CloseBtn({ onClick }: CloseBtnProps): JSX.Element {
  return <CloseBtnBox onClick={onClick}>CLOSE</CloseBtnBox>;
}
