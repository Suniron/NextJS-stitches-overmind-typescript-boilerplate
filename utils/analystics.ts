import ReactGA from "react-ga";
export const initGA = () => {
  //console.log("GA init"); // uncomment to debug
  ReactGA.initialize("UA-YOUR-GOOGLE-ANALYSTICS-ID-1");
};
export const logPageView = () => {
  //console.log(`Logging pageview for ${window.location.pathname}`); // uncomment to debug
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
