import React, { useState } from 'react';
import { RiSunFill, RiMoonClearFill, RiArrowUpSLine } from 'react-icons/ri';
import { ToggleThemeBtnBox, CloseBtnBox, ScrollTopBtnBox } from './styles';
import { useThemeState, useToggleTheme } from 'hooks/ThemeProvider';
import { useCallback } from 'react';
import { useEffect } from 'react';
import throttle from 'utils/throttle';

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
  const [visible, setVisible] = useState(false);

  const moveTop = useCallback(() => {
    if (!window) return;
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const onScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, 300);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <ScrollTopBtnBox visible={visible} onClick={moveTop}>
      <i>
        <RiArrowUpSLine />
      </i>
      <p>MOVE TOP</p>
    </ScrollTopBtnBox>
  );
}
