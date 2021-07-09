import React, { useRef } from 'react';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import throttle from 'utils/throttle';
import { ResumeLayoutContainer } from './styles';
import { useState } from 'react';
import ResumeScrollIndicator from 'components/Resume/ResumeScrollIndicator';

const Global = createGlobalStyle`
  html{
  height:100vh
  }
  body{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  @media (max-width: 770px) {
    body{
    position:static;
    top: 0;
    left: 0;
    right: 0;
  }
  }
`;

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onWhell = throttle((e: WheelEvent) => {
      const delta = e.deltaY > 0 ? -1 : 1;
      setOffset(prev => prev + delta);
    }, 800);

    window.addEventListener('wheel', onWhell);
    return () => {
      window.removeEventListener('wheel', onWhell);
    };
  }, []);

  useEffect(() => {
    if (offset === 1) return setOffset(0);
    if (offset === -5) return setOffset(-4);
    const clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    setScrollTop(clientHeight * offset);

    setWidth(
      ((clientHeight * (offset * -1) + clientHeight) /
        (ref.current as HTMLDivElement).scrollHeight) *
        100
    );
  }, [offset]);

  return (
    <>
      <ResumeScrollIndicator width={width} />
      <ResumeLayoutContainer ref={ref} scrollTop={scrollTop}>
        <Global />
        {children}
      </ResumeLayoutContainer>
    </>
  );
}
