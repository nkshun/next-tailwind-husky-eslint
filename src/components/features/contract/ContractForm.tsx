import { ContractFormDetailInput } from './ContractFormDetail';

import { Button } from '@/components/ui/button/Button';
import { Form } from '@/components/ui/form';
import { FormBlock } from '@/components/ui/form/layouts/FormBlock';
import { IContractDetail } from '@/types/contractDetailSchema';

export const ContractForm = () => {
    return (
        <>
            <Form<IContractDetail>
                onSubmit={async values => {
                    console.log('on submit', values);
                }}
                className="w-full max-w-2xl"
            >
                {methods => (
                    <>
                        <ContractFormDetailInput methods={methods} />
                        <FormBlock>
                            <Button type="submit" fill>
                                契約お申し込み
                            </Button>
                        </FormBlock>
                    </>
                )}
            </Form>
        </>
    );
};
