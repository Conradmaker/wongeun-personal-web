import React from 'react';
import { RiSunFill, RiMoonClearFill, RiArrowUpSLine } from 'react-icons/ri';
import { ToggleThemeBtnBox, CloseBtnBox, ScrollTopBtnBox } from './styles';
import { useThemeState, useToggleTheme } from 'hooks/ThemeProvider';
import { useCallback } from 'react';

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

export function ScrollTopBtn(): JSX.Element {
  const moveTop = useCallback(() => {
    if (!window) return;
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <ScrollTopBtnBox onClick={moveTop}>
      <i>
        <RiArrowUpSLine />
      </i>
      <p>MOVE TOP</p>
    </ScrollTopBtnBox>
  );
}
