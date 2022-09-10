import { ReactNode } from 'react';

import { Footer } from '../../footer';
import { Navbar } from '../../header/navbar';
import { Meta } from '../../meta';

import { AppConfig } from '@/configs/AppConfig';

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
