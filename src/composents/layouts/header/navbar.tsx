import Link from 'next/link';

import { Background } from '@/composents/ui/background';
import { Button } from '@/composents/ui/button/button';
import { Logo } from '@/composents/ui/logo/logo';
import { NavbarTwoColumns } from '@/composents/ui/navigation';
import { Section } from '@/composents/ui/section/Section';

const Navbar = () => (
    <Background color="bg-gray-100">
        <Section yPadding="py-6">
            <NavbarTwoColumns
                logo={<Logo />}
                rightMenu={
                    <>
                        <li>
                            <Link href="/order">
                                <a>
                                    <Button>お申し込み</Button>
                                </a>
                            </Link>
                        </li>
                    </>
                }
            >
                <li>
                    <Link href="/">
                        <a>商品紹介</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>価格</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>申し込み後の流れ</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>お問い合わせ</a>
                    </Link>
                </li>
            </NavbarTwoColumns>
        </Section>
    </Background>
);

export { Navbar };
