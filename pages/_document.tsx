/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta name="author" content="Conrad" />
          <meta name="description" content="Wongeun Yoo" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Conrad.maker" />
          <meta property="og:title" content="Conrad.maker" />
          <meta property="og:description" content="피할수 없기에 즐기는 유원근입니다." />
          <meta
            property="og:image"
            content="https://i.ibb.co/VBNRqWj/linkedin-banner-image-1.png"
          />
          <meta property="og:url" content="https://wongeun.xyz" />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="Conrad.maker" />
          <meta property="twitter:title" content="Conrad.maker" />
          <meta
            property="twitter:description"
            content="피할수 없기에 즐기는 유원근입니다."
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/VBNRqWj/linkedin-banner-image-1.png"
          />
          <meta property="twitter:url" content="https://wongeun.xyz" />
          <meta name="theme-color" content="#7a57d1" />

          {/* 폰트 */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          {/* css-reset */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
            integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;