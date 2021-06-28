import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import { useThemeState } from 'hooks/ThemeProvider';
import { LayoutContainer } from './styles';
import theme from 'styles/theme';
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps): JSX.Element {
  const currentTheme = useThemeState();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  );
}
