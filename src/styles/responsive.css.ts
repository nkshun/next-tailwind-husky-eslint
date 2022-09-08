import { StyleRule } from '@vanilla-extract/css';

export const breakpoints = {
    // mobile: 0,
    tablet: 750,
    desktop: 1080,
} as const;

export type Breakpoint = keyof typeof breakpoints;

type ResposiveStyles = Omit<StyleRule, '@media' | '@supports'>;

// mobile first
export const mediaQuery = (breakpoint: Breakpoint) => (style?: ResposiveStyles) =>
    !style || Object.keys(style).length === 0
        ? {}
        : {
              [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: style,
          };

/**
// desktop first
export const mediaQuery =
  (breakpoint: Breakpoint) => (style?: ResposiveStyles) =>
    !style || Object.keys(style).length === 0
      ? {}
      : {
          [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: style,
        };
*/

export const responsiveStyle = (styles: {
    [key in Breakpoint]+?: ResposiveStyles;
}): StyleRule => {
    if (!styles || Object.keys(styles).length === 0) {
        return {};
    }
    const { desktop, tablet } = styles;

    return {
        '@media': {
            // ...mediaQuery('mobile')(mobile),
            ...mediaQuery('tablet')(tablet),
            ...mediaQuery('desktop')(desktop),
        },
    };
};
