// css.ts
import { createStyled } from "@stitches/styled";
//import { createTokens, createCss } from "@stitches/css";
import { createConfig } from "@stitches/tailwind";
// Treeshake by including only specific utils
// import { text, flex } from "@stitches/tailwind/utils"
import * as utils from "@stitches/tailwind/utils";
// Treeshake by including only specific theme
// import { colors, spacing } from "@stitches/tailwind/theme"
import * as theme from "@stitches/tailwind/theme";
import { createTokens, hotReloadingCache } from "@stitches/css";

const tokens = createTokens({
  colors: {
    MY_CUSTOM_COLOR_1: "#E2E8F0",
  },
});

const config = createConfig({
  tokens,
  screens: {
    tablet: (cssRule): string => `@media (min-width: 768px) { ${cssRule} }`,
    laptop: (cssRule): string => `@media (min-width: 1024px) { ${cssRule} }`,
  },
  theme: {
    ...theme,
    flex: {
      ...theme.flex,
      col: "column", // To fix flex-direction: column
    },
  },
  utils,
});

hotReloadingCache.clear(); // to fix screens problem

const { Provider, useCss, styled } = createStyled<typeof config>();

export { config, Provider, useCss, styled };
