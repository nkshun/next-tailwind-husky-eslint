import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/styles/responsive.css';
import { fontVariants } from '@/styles/variants.css';
import { vars } from '@/styles/vars.css';

export const container = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const leftWrapper = style({
    display: 'flex',
    alignItems: 'center',
});

export const navberWrapper = style([
    {
        marginLeft: vars.space[24],
        display: 'none',
    },
    responsiveStyle({
        desktop: {
            display: 'block',
        },
    }),
]);

export const navber = style([
    fontVariants['20m'],
    {
        display: 'flex',
        flexDirection: 'column',
        padding: vars.space[24],
        backgroundColor: vars.color.white,
        ':hover': {
            color: vars.color.primary,
        },
        ':first-child': {
            marginTop: vars.space[16],
        },
    },
]);

// 子要素をネストでスタイリングすると崩壊は、globalStyleで行うことで矯正する設計になっている
globalStyle(`${navber} > li`, {
    ...responsiveStyle({
        desktop: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'transparent',
            padding: '0px',
            ':last-child': {
                marginRight: vars.space[24],
            },
            ':first-child': {
                marginTop: '0px',
            },
        },
    }),
});

export const humbergerWrapper = style(
    responsiveStyle({
        desktop: {
            display: 'none',
        },
    })
);

export const humbergerButton = style({
    padding: vars.space[32],
    color: vars.color.gray,
    borderRadius: '6px',
    ':hover': {
        backgroundColor: vars.color.white,
    },
});

export const hunbergerSvg = style({
    stroke: 'currentColor',
    height: '24px',
    width: '24px',
});

const humbergerModalBase = style([
    {
        width: '100%',
    },
    responsiveStyle({
        desktop: {
            width: 'auto',
        },
    }),
]);

export const leftItemsInMobalWrapper = style([
    humbergerModalBase,
    {
        marginTop: vars.space[8],
    },
]);

export const rightItemsInMobalWrapper = style([
    humbergerModalBase,
    {
        borderTopWidth: '1px',
        borderColor: vars.color.gray,
    },
]);

export const leftItemsInMobal = style([
    navber,
    {
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    },
]);

export const rightItemsInMobal = style([
    navber,
    {
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
    },
]);
