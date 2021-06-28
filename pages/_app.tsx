import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle } from 'styled-components';
import UserThemeProvider from 'hooks/ThemeProvider';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
  }
  html {
    font-family: 'Montserrat', sans-serif;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  body{
    min-height: 100vh;
  }
  .inner{
    max-width:1048px;
    margin: 0 auto;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserThemeProvider>
      <Global />
      <Component {...pageProps} />
    </UserThemeProvider>
  );
}

export default MyApp;
