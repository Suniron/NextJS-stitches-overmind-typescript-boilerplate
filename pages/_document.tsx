import React from "react";
import { createCss } from "@stitches/css";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { config } from "../styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const css = createCss(config);
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} serverCss={css} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style>{css.getStyles()}</style>
          </>
        ),
      };
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
