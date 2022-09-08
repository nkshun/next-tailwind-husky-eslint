import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    color: {
        // Main color
        primary: '#5ab59b',
        lightPrimary: '#7ccfb7',
        darkPrimary: '#4d9c85',
        // Text color
        black: '#484848',
        gray: '#737373',
        lightGray: '#cdcdcd',
        // Background color
        cream: '#fffef5',
        whiteGray: '#e8e8e8',
        lime: '#ecfaf0',
        base: '#fafafa',

        // Overlay Color
        black50: 'rgba(72, 72, 72, 0.5)',
        black8: 'rgba(72, 72, 72, 0.08)',
        glay8: 'rgba(115, 115, 115, 0.08)',

        // Secondary color
        disable: '#cdcdcd',
        err: '#b55a5a',

        line: '#e8e8e8',
        white: '#ffffff',
    },
    space: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        72: '72px',
    },
    shadow: {
        1: '0px 4px 8px rgba(120, 120, 120, 0.08)',
        2: '0px 8px 16px rgba(72, 72, 72, 0.08)',
    },
});
