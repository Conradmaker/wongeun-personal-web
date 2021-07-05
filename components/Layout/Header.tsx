import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiCloseFill, RiGithubLine } from 'react-icons/ri';
import { ToggleThemeBtn } from 'components/Button/RoundBtn';
import { HeaderContainer } from './styles';
import { FaHamburger } from 'react-icons/fa';
import { useState } from 'react';
import { useSetModalOpenContext } from 'hooks/ModalStateProvider';

export default function Header(): JSX.Element {
  const router = useRouter();
  const toggleGlobalModal = useSetModalOpenContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const onToggleMobileMenu = React.useCallback(() => {
    setMobileMenuOpen(prev => !prev);
    if (document.documentElement.clientWidth <= 770) toggleGlobalModal(prev => !prev);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    toggleGlobalModal(false);
  }, [router.asPath]);

  return (
    <HeaderContainer mobileMenuOpen={mobileMenuOpen}>
      <div className="inner">
        <div className="logo">Conrad.maker</div>
        <div className="menu__btn" onClick={onToggleMobileMenu}>
          {mobileMenuOpen ? <RiCloseFill /> : <FaHamburger />}
        </div>
        <ul>
          <Link href="/">
            <li onClick={onToggleMobileMenu}>ABOUT</li>
          </Link>
          <Link href="/works">
            <li onClick={onToggleMobileMenu}>WORKS</li>
          </Link>
          <Link href="/blog">
            <li onClick={onToggleMobileMenu}>BLOG</li>
          </Link>
          <li
            className="git__link"
            onClick={() => window.open('https://github.com/Conradmaker')}
          >
            <RiGithubLine />
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
