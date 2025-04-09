const variablesStyles = '@import "./src/scss/common/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
const mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
const resetStyles = '@import "./src/scss/common/_reset.scss"';
const globalsStyles = '@import "./src/scss/common/_globals.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles,
  globalsStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');
