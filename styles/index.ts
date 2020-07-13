// css.ts
import { createStyled } from "@stitches/styled";
//import { createTokens, createCss } from "@stitches/css";
import { createTailwindCss } from "@stitches/tailwind";
// Treeshake by including only specific utils
// import { text, flex } from "@stitches/tailwind/utils"
import * as utils from "@stitches/tailwind/utils";
// Treeshake by including only specific theme
// import { colors, spacing } from "@stitches/tailwind/theme"
import * as theme from "@stitches/tailwind/theme";

export const css = createTailwindCss({
  screens: {
    tablet: (cssRule): string => `@media (min-width: 768px) { ${cssRule} }`,
    laptop: (cssRule): string => `@media (min-width: 1024px) { ${cssRule} }`,
  },
  theme,
  utils,
});

export const styled = createStyled(css);
