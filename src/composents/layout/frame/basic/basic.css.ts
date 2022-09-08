import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const basic = style({
    display: 'flex',
    minHeight: '100vh',
    background: vars.color.base,
});

export const mainContent = style({
    paddingLeft: '220px',
    width: '100%',
});
