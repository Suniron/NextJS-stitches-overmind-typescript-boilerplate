import React from "react";
import { createCss } from "@stitches/css";
import Document from "next/document";

import { config } from "css";

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
            {css.getStyles().map((css, index) => {
              //console.log("css ->", index, css); // nb: Uncomment to debug
              return (
                <style key={index}>
                  {css.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "")}
                </style>
              );
            })}
          </>
        ),
      };
    } finally {
    }
  }
}
