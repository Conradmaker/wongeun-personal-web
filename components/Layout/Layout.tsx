import React from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import { useThemeState } from 'hooks/ThemeProvider';
import { LayoutContainer } from './styles';
import theme from 'styles/theme';
import { useModalOpenContext } from 'hooks/ModalStateProvider';

const Global = createGlobalStyle<{ globalModalOpen: boolean }>`
  ${({ globalModalOpen }) =>
    globalModalOpen &&
    css`
      html {
        overflow: hidden;
        padding-right: 15px;
      }
    `}
`;

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps): JSX.Element {
  const currentTheme = useThemeState();
  const globalModalOpen = useModalOpenContext();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Global globalModalOpen={globalModalOpen} />
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
}
