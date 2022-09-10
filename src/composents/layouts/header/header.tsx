import { Navbar } from './navbar';

type HeaderProps = {
    className?: string;
};

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <header className={className}>
            <Navbar />
        </header>
    );
};

export default Header;
