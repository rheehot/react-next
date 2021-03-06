import * as React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'


export default class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }
  render() {
    const { publicRuntimeConfig } = getConfig()
    return (
      <html lang="ko">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Yuni-Q react-next" />
          <meta name="theme-color" content="black" />
          <link rel="manifest" href={`${publicRuntimeConfig.staticFolder}/manifest.json`}/>
          {/* <link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/style.css`}/>/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

