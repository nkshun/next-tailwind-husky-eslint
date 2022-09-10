import { Basic } from './basic';

export type WithLayoutProps<T extends object> = {
    title?: string;
} & T;

const Layout = {
    Basic,
};

export default Layout;
