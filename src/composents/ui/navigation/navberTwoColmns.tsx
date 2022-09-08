import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

import * as styles from './navberTwoColumns.css';

type INavbarProps = {
    logo: ReactNode;
    children: ReactNode;
    rightMenu: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <Link href="/">
                    <a>{props.logo}</a>
                </Link>

                <nav className={styles.navberWrapper}>
                    <ul className={styles.navber}>{props.children}</ul>
                </nav>
            </div>

            <div className={styles.humbergerWrapper}>
                <button className={styles.humbergerButton} onClick={handleShowMenu} type="button">
                    <svg
                        className={styles.hunbergerSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <nav className={clsx(styles.leftItemsInMobalWrapper, { hidden: !showMenu })}>
                <ul className={clsx(styles.leftItemsInMobal)}>{props.children}</ul>
            </nav>

            <div className={clsx(styles.rightItemsInMobalWrapper, { hidden: !showMenu })}>
                <ul className={styles.rightItemsInMobal}>{props.rightMenu}</ul>
            </div>
        </div>
    );
};

export { NavbarTwoColumns };
