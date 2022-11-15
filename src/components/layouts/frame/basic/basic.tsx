import { ReactNode } from 'react';

import { Meta } from '../../Meta';
import { Footer } from '../../footer';
import { Navbar } from '../../header/Navbar';

import { AppConfig } from '@/configs/appConfig';

type Props = {
    children: ReactNode;
};

const Basic: React.FC<Props> = ({ children }) => (
    <div className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
);

export { Basic };
