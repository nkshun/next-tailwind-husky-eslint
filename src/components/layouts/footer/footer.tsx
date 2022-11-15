import Link from 'next/link';

import { FooterCopyright } from './FooterCopyright';

import { Background } from '@/components/ui/background';
import { Section } from '@/components/ui/section/Section';
import { AppConfig } from '@/configs/appConfig';

const Footer = () => (
    <Background color="bg-gray-100">
        <Section>
            <FooterCopyright
                siteName={AppConfig.site_name}
                verticalLinks={
                    <>
                        <li>
                            <Link href="/">
                                <a>Terms Of Service</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                    </>
                }
            />
        </Section>
    </Background>
);

export { Footer };
