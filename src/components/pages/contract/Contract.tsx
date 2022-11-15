import { useRouter } from 'next/router';

import { ContractConfirm, ContractForm } from '@/components/features/contract';
import { ContractFormProvider } from '@/components/ui/form/FormProvider';
import { ContractDetailSchema, IContractDetail } from '@/types/contractDetailSchema';

export const Contract = () => {
    const router = useRouter();
    const isConfirm = router.query.confirm;
    return (
        <ContractFormProvider<IContractDetail, typeof ContractDetailSchema>
            options={{
                defaultValues: {
                    is_check_terms: false,
                    cmm_limit_number: '1',
                    subscription_type: 'BUSINESS',
                    payment_method: 'DIRECT_DEBIT',
                    billing_method: 'EMAIL',
                    delivery_address_type: 'SAME',
                },
            }}
            schema={ContractDetailSchema}
        >
            {isConfirm ? <ContractConfirm /> : <ContractForm />}
        </ContractFormProvider>
    );
};
