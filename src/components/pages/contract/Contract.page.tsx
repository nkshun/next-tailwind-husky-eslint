import { Contract } from './Contract';

import Layout from '@/components/layouts/frame';
import { Background } from '@/components/ui/background';
import { Section } from '@/components/ui/section/Section';

export const ContractPage = () => {
    return (
        <Layout.Basic>
            <Background color="bg-gray-100">
                <Section title="契約お申し込み" yPadding="py-20" center>
                    <Contract />
                </Section>
            </Background>
        </Layout.Basic>
    );
};
