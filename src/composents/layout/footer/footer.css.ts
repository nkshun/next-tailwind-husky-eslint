import { responsiveStyle } from '@hospital-search/ui/shared/styles/responsive.css';
import { fontVariants } from '@hospital-search/ui/shared/styles/variants.css';
import { vars } from '@hospital-search/ui/shared/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const footer = style({
    width: '100%',
});

export const top = style({
    backgroundColor: vars.color.base,
});

export const topInner = style([
    {
        display: 'flex',
        gap: vars.space[40],
        maxWidth: '1080px',

        margin: '0 auto',
        padding: `${vars.space[64]} ${vars.space[32]}`,
    },
    responsiveStyle({
        tablet: {
            flexDirection: 'column',
            padding: `${vars.space[56]} ${vars.space[24]}`,
            gap: vars.space[24],
            alignItems: 'center',
        },
    }),
]);

export const leftContent = style([
    {
        border: `2px solid ${vars.color.primary}`,
        borderRadius: '8px',
        maxWidth: '624px',
        minWidth: '480px',
        backgroundColor: vars.color.white,
    },
    responsiveStyle({
        tablet: {
            minWidth: 0,
            maxWidth: '344px',
        },
    }),
]);

export const leftContentInner = style([
    {
        display: 'flex',
        flexDirection: 'column',
        padding: vars.space[48],
        gap: vars.space[32],
    },
    responsiveStyle({
        tablet: {
            padding: vars.space[40],
        },
    }),
]);

export const leftContentTextAndIcon = style([
    {
        display: 'flex',
        gap: vars.space[32],
    },
    responsiveStyle({
        tablet: {
            flexDirection: 'column',
        },
    }),
]);

export const leftContentTitle = style([
    fontVariants['24r'],
    responsiveStyle({
        tablet: {
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '36px',
            letterSpacing: 0,
        },
    }),
]);

export const leftContentText = style([
    {
        color: vars.color.gray,
        maxWidth: '275px',
        minWidth: '175px',
    },
    responsiveStyle({
        tablet: {
            maxWidth: '375px',
            minWidth: 0,
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '22.5px',
            letterSpacing: 0,
            textAlign: 'justify',
        },
    }),
]);

export const rightContent = style([
    {
        display: 'flex',
        flexDirection: 'column',
        gap: vars.space[32],
    },
    responsiveStyle({
        tablet: {
            gap: vars.space[24],
        },
    }),
]);

export const topScrollLink = style([
    {
        margin: '0 0 0 auto',
    },
    responsiveStyle({
        tablet: {
            width: '100%',
        },
    }),
]);

export const topScrollLinkButton = style([
    responsiveStyle({
        tablet: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: `${vars.space[16]} ${vars.space[24]}`,
        },
    }),
]);

export const arrowTopIconWrapper = style({
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: vars.color.primary,
});

export const arrowTopIcon = style({
    marginBottom: '1px',
});

export const middle = style({
    borderTop: `1px solid ${vars.color.line}`,
});

export const middleInnerPC = style([
    {
        maxWidth: '1080px',
        margin: '0 auto',
        padding: `${vars.space[64]} ${vars.space[32]}`,
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr',
    },
    responsiveStyle({
        tablet: {
            display: 'none',
        },
    }),
]);

export const middleInnerSP = style([
    {
        display: 'none',
    },
    responsiveStyle({
        tablet: {
            margin: '0 auto',
            padding: `${vars.space[48]} ${vars.space[40]} ${vars.space[56]} ${vars.space[40]}`,
            display: 'flex',
            flexDirection: 'column',
            gap: vars.space[40],
        },
    }),
]);

export const linkButtonArea = style([
    {
        marginTop: vars.space[40],
        display: 'flex',
        flexDirection: 'column',
        gap: vars.space[16],
    },
    responsiveStyle({
        tablet: {
            marginTop: vars.space[8],
            marginBottom: vars.space[24],
        },
    }),
]);

export const linkButtonWrapper = style([
    {
        width: '175px',
    },
    responsiveStyle({
        tablet: {
            width: '100%',
        },
    }),
]);

export const linkButton = style([
    {
        width: '100%',
    },
    responsiveStyle({
        tablet: {
            padding: `${vars.space[16]} 0`,
        },
    }),
]);

export const innerLinkList = style({
    width: '288px',
});

export const listTitle = style([fontVariants['14b']]);

export const listItem = style({
    display: 'flex',
    margin: `${vars.space[8]} 0`,
    ':first-child': {
        margin: `0 0 ${vars.space[8]} 0`,
    },
    ':last-child': {
        margin: `${vars.space[8]} 0 0 0`,
    },
});

export const logo = style([
    responsiveStyle({
        tablet: {
            margin: `${vars.space[48]} ${vars.space[40]} 0 ${vars.space[40]}`,
        },
    }),
]);

export const bottom = style({
    borderTop: `1px solid ${vars.color.line}`,
});

export const bottomInner = style([
    {
        maxWidth: '1080px',
        margin: '0 auto',
        padding: `${vars.space[24]} ${vars.space[32]}`,
        display: 'flex',
        justifyContent: 'space-between',
    },
    responsiveStyle({
        tablet: {
            flexDirection: 'column',
        },
    }),
]);

export const bottomLinkList = style([
    {
        display: 'flex',
        gap: vars.space[16],
    },
    responsiveStyle({
        tablet: {
            flexWrap: 'wrap',
        },
    }),
]);

export const bottomLinkListItem = style([
    {
        textDecoration: 'underLine',
        color: vars.color.gray,
    },
    responsiveStyle({
        tablet: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '18px',
            letterSpacing: 0,
            whiteSpace: 'nowrap',
        },
    }),
]);

export const copylight = style([
    fontVariants['10m'],
    {
        color: vars.color.gray,
    },
    responsiveStyle({
        tablet: {
            textAlign: 'center',
            margin: `${vars.space[24]} 0 ${vars.space[32]} 0`,
        },
    }),
]);
