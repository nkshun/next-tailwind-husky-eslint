import { fontVariants } from '@hospital-search/ui/shared/styles/variants.css';
import { vars } from '@hospital-search/ui/shared/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const header = style({
    background: vars.color.white,
    borderBottom: `1px solid ${vars.color.line}`,
    padding: `${vars.space[16]} ${vars.space[32]}`,
    display: 'flex',
    alignItems: 'center',
});

export const title = style([fontVariants['14b']]);
