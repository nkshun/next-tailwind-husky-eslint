import { globalStyle } from '@vanilla-extract/css';

import { responsiveStyle } from './responsive.css';
import { vars } from './vars.css';

globalStyle('html', {
    height: '100%',
    textSizeAdjust: '100%',
    boxSizing: 'border-box',
    touchAction: 'manipulation',
    fontFeatureSettings: "'case' 1, 'rlig' 1, 'calt' 0",
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
});

globalStyle('*', {
    fontFamily: "'Noto Sans JP', sans-serif, -apple-system, BlinkMacSystemFont, Helvetica, Arial",
    margin: 0,
    boxSizing: 'border-box',
});

// SP・PCの出し分け
globalStyle(
    '*[data-sp]',
    responsiveStyle({
        tablet: {
            display: 'inherit',
        },
        desktop: {
            display: 'none',
        },
    })
);

globalStyle(
    '*[data-pc]',
    responsiveStyle({
        tablet: {
            display: 'none',
        },
        desktop: {
            display: 'inherit',
        },
    })
);

globalStyle('html body', {
    margin: 0,
    color: vars.color.black,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22.5px',
    letterSpacing: 0,
});

globalStyle('a', {
    color: 'inherit',
    textDecoration: 'inherit',
});

globalStyle('ul,li', {
    padding: 0,
    listStyle: 'none',
});
