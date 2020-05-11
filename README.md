# What is in this boilerplate

## Languages

Typescript,
Tailwind,
JSX

## Frameworks

### React frameworks

NextJS (back/front) <https://nextjs.org/>

React (front) <https://reactjs.org/>

### Style

Stitches (css/styled/Tailwind) <https://github.com/christianalfoni/stitches/tree/master/packages/tailwind>

### Store

OvermindJS <https://overmindjs.org/>

### Google Analystics

1. Get vour ID at <https://analytics.google.com/analytics/web/> (Administration panel)
2. You have to put your ID into `utils/analystics.ts`

## Important to read

### Stitches

1. I have a bug with the custom config of Stitches: you can't use tokens and screens configuration for now.

2. Somes settings seems to be not work with Stitches like `css.flex("col")` and i have to put `style={{flexDirection: "column"}}` in components.
