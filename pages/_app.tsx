import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle } from 'styled-components';
import UserThemeProvider from 'hooks/ThemeProvider';
import GlobalModalStateProvider from 'hooks/ModalStateProvider';

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
    position:relative;
  }
  .page__section{
    padding-top:60px;
  }
  .no-click {
    pointer-events: none;
  }
  .invisible{
    opacity: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalModalStateProvider>
      <UserThemeProvider>
        <Global />
        <Component {...pageProps} />
      </UserThemeProvider>
    </GlobalModalStateProvider>
  );
}

export default MyApp;
