import clsx from 'clsx';

import * as styles from './header.css';

import { Background } from '@/composents/ui/background';
import { vars } from '@/styles/vars.css';

type HeaderProps = {
    className?: string;
};

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <header className={clsx(styles.header, className)}>
            <Background color={vars.color.base}></Background>
        </header>
    );
};

export default Header;
