import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { css } from "../styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {extractedStyles.map((content, index) => (
              <style key={index}>{content}</style>
            ))}
          </>
        ),
      };
    } finally {
    }
  }

  render(): JSX.Element {
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
