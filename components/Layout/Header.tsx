import React from 'react';
import Link from 'next/link';
import { RiGithubLine } from 'react-icons/ri';
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
          <li className="git__link">
            <a href="https://github.com/Conradmaker" target="_blank">
              <RiGithubLine />
            </a>
            <span>GITHUB</span>
          </li>
          <li>
            <ToggleThemeBtn />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
