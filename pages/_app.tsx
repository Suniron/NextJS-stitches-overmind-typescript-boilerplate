import App from "next/app";
import Head from "next/head";
import React from "react";
// import AppLayout from "components/AppLayout";
// import { config, Provider } from "css";
// import { createCss, TCss } from "@stitches/css";
import { createOvermind, createOvermindSSR, rehydrate } from "overmind";
import * as overmindReact from "overmind-react";
import * as overmindStore from "store";

export default class MyApp extends App<{
  // serverCss: TCss<typeof config>;
}> {
  overmind = createOvermind(overmindStore.config);
  // CLIENT: On initial route
  // SERVER: On initial route
  constructor(props) {
    super(props);

    const mutations = props.pageProps.mutations || [];

    if (typeof window !== "undefined") {
      // On the client we just instantiate the Overmind instance and run
      // the "changePage" action

      this.overmind.actions.changePage(mutations);
    } else {
      // On the server we rehydrate the mutations to an SSR instance of Overmind,
      // as we do not want to run any additional logic here
      this.overmind = createOvermindSSR(overmindStore.config);
      rehydrate(this.overmind.state, mutations);
    }
  }
  // CLIENT: After initial route, on page change
  // SERVER: never
  componentDidUpdate(): void {
    // This runs whenever the client routes to a new page
    this.overmind.actions.changePage(this.props.pageProps.mutations || []);
  }
  // CLIENT: On every page change
  // SERVER: On initial route

  render(): JSX.Element {
    const { Component, pageProps /*, serverCss*/ } = this.props;

    return (
      <overmindReact.Provider value={this.overmind}>
        {/* <Provider css={serverCss || createCss(config)}> */}
        <Head>
          <title>The wbesite title</title>

          <link
            href="https://unpkg.com/tailwindcss/dist/base.min.css"
            rel="stylesheet"
            key="tailwindcss"
          />
          <link rel="icon" href="favicon.ico" />

          <meta name="creator" content="Etienne BLANC" />
          <meta charSet="utf-8" />
          <meta lang="fr" />
          <meta name="description" content="The website description" />
        </Head>

        {/* <AppLayout> */}
        <Component {...pageProps} />
        {/* </AppLayout> */}
        {/* </Provider> */}
      </overmindReact.Provider>
    );
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
