import Link from 'next/link';

import { Background } from '@/components/ui/background';
import { Button } from '@/components/ui/button/button';
import { Logo } from '@/components/ui/logo/logo';
import { NavbarTwoColumns } from '@/components/ui/navigation';
import { Section } from '@/components/ui/section/Section';

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
