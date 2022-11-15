import className from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

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

    const navClass = className('w-full', 'md:w-auto', 'md:block', {
        hidden: !showMenu,
    });

    return (
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
                <Link href="/">
                    <a>{props.logo}</a>
                </Link>

                <nav className="ml-6 hidden md:block">
                    <ul className="navbar ">{props.children}</ul>
                </nav>
            </div>

            <div className="md:hidden">
                <button onClick={handleShowMenu} className="relative md:hidden h-5 w-6" type="button">
                    <span
                        className={`${
                            showMenu ? 'transform rotate-45 top-2 w-7 transition duration-300' : 'top-0 w-6'
                        } h-0.5 inline-block transition-all absolute right-0 bg-black`}
                    ></span>
                    <span
                        className={`${
                            showMenu ? 'hidden' : 'top-2 w-6'
                        } h-0.5 inline-block transition-all absolute right-0 bg-black`}
                    ></span>
                    <span
                        className={`${
                            showMenu ? 'transform -rotate-45 top-2 w-7 transition duration-300' : 'top-4 w-6'
                        } h-0.5 inline-block transition-all absolute right-0 bg-black`}
                    ></span>
                </button>
            </div>

            <nav className={`mt-2 md:hidden ${navClass}`}>
                <ul className="navbar rounded-t">{props.children}</ul>
            </nav>

            <div className={`border-t border-gray-200 ${navClass}`}>
                <ul className="navbar rounded-b">{props.rightMenu}</ul>
            </div>

            <style jsx>
                {`
                    .navbar {
                        @apply flex flex-col font-medium text-gray-700 p-5 bg-white;
                    }

                    .navbar :global(a) {
                        @apply inline-block w-full;
                    }

                    .navbar :global(li:not(:first-child)) {
                        @apply mt-3;
                    }

                    .navbar :global(a .btn) {
                        @apply w-full;
                    }

                    .navbar :global(a:hover) {
                        @apply text-primary-600;
                    }

                    @screen md {
                        .navbar {
                            @apply flex-row items-center p-0 bg-transparent;
                        }

                        .navbar :global(li:not(:first-child)) {
                            @apply mt-0;
                        }

                        .navbar :global(li:not(:last-child)) {
                            @apply mr-5;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export { NavbarTwoColumns };
