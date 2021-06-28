import React from 'react';
import Link from 'next/link';
import { ToggleThemeBtn } from 'components/Button/RoundBtn';
import { HeaderContainer } from './styles';

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <div className="inner">
        <div className="logo">Conrad.maker</div>
        <ul>
          <Link href="/">
            <li>ABOUT</li>
          </Link>
          <Link href="/works">
            <li>WORKS</li>
          </Link>
          <Link href="/blog">
            <li>BLOG</li>
          </Link>
          <li>GITHUB</li>
          <li>
            <ToggleThemeBtn />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
