import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import * as styles from './basic.css';

import type { WithLayoutProps } from '../';

type Props = WithLayoutProps<{
    children?: React.ReactNode;
}>;

export const Basic: React.FC<Props> = ({ title, children }) => {
    return (
        <div className={styles.basic}>
            <Head>{title && <title>{title}</title>}</Head>
            <div className={styles.mainContent}>{children}</div>
            <Toaster />
        </div>
    );
};
