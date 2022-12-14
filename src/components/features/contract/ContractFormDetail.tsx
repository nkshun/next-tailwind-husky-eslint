import axios, { AxiosError } from 'axios';
import { FC, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { usePostalJp } from 'use-postal-jp';

import { FieldWrapper, FormSection, InputField, TextAreaField } from '@/components/ui/form';
import { CheckBoxField } from '@/components/ui/form/fields/CheckboxField';
import { InputButtonField } from '@/components/ui/form/fields/InputFieldButton';
import { RadioBtn } from '@/components/ui/form/fields/RadioButtonField';
import { FormBlock } from '@/components/ui/form/layouts/FormBlock';
import { IContractDetail } from '@/types/contractDetailSchema';

type IContractFormDetailInput = {
    methods: UseFormReturn<IContractDetail>;
};

export const ContractFormDetailInput: FC<IContractFormDetailInput> = ({ methods }) => {
    const { register, watch, formState, setValue, clearErrors } = methods;

    const [companyAddress] = usePostalJp(
        methods.watch('company_zip_code'),
        methods.watch('company_zip_code')?.length >= 7
    );

    const [deliveryAddress] = usePostalJp(
        methods.watch('delivery_zip_code') || '',
        (methods.watch('delivery_zip_code')?.length || 0) >= 7
    );

    useEffect(() => {
        clearErrors('company_prefectures_city_town');
        setValue(
            'company_prefectures_city_town',
            `${companyAddress?.prefecture || ''}${companyAddress?.address1 || ''}${companyAddress?.address2 || ''}`
        );
    }, [companyAddress, setValue, clearErrors]);

    useEffect(() => {
        clearErrors('delivery_prefectures_city_town');
        setValue(
            'delivery_prefectures_city_town',
            `${deliveryAddress?.prefecture || ''}${deliveryAddress?.address1 || ''}${deliveryAddress?.address2 || ''}`
        );
    }, [deliveryAddress, setValue, clearErrors]);

    const onCheckSubscriberId = async (id: IContractDetail['subscriber_id']) => {
        await axios
            .head(`${process.env.NEXT_PUBLIC_CMM2_SUBSCRIPTION_FORM_API}/dev/subscribers/${id}`, {
                timeout: 100000,
                withCredentials: true,
                headers: {
                    Authorization: `Basic ${process.env.NEXT_PUBLIC_BASIC_AUTH_TOKEN}`,
                    'Context-Type': 'application/json',
                },
            })
            .catch((e: AxiosError<{ error: string }>) => {
                // ???????????????
                console.log(JSON.stringify(e, null, 2));
                console.log(`${process.env.NEXT_PUBLIC_CMM2_SUBSCRIPTION_FORM_API}/subscribers/${id}`);
                return e.status;
            });
    };

    return (
        <>
            <FormSection>
                <FormBlock>
                    <CheckBoxField
                        registration={register('is_check_terms')}
                        error={formState.errors['is_check_terms']}
                        require
                    >
                        ???????????????????????????
                    </CheckBoxField>
                </FormBlock>
                <FormBlock>
                    <InputButtonField
                        registration={register('subscriber_id')}
                        error={formState.errors['subscriber_id']}
                        label="?????????ID"
                        description="?????????????????????????????????-???????????????????????????_?????????????????????????????????????????????ID?????????????????????????????????????????????????????????????????????????????????????????????????????????"
                        require
                        onClick={() => onCheckSubscriberId(watch('subscriber_id'))}
                    >
                        ????????????
                    </InputButtonField>
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="???????????????" require>
                        <RadioBtn
                            registration={register('subscription_type')}
                            error={formState.errors['subscription_type']}
                            label="????????????"
                            value="BUSINESS"
                        />
                        <RadioBtn
                            registration={register('subscription_type')}
                            error={formState.errors['subscription_type']}
                            label="????????????"
                            value="PERSON"
                        />
                    </FieldWrapper>
                </FormBlock>

                <FormBlock>
                    <InputField
                        registration={register('cmm_limit_number')}
                        error={formState.errors['cmm_limit_number']}
                        label="?????????????????????????????????"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="??????????????????????????????" require>
                        <RadioBtn
                            registration={register('payment_method')}
                            error={formState.errors['payment_method']}
                            label="???????????????"
                            value="DIRECT_DEBIT"
                        />
                        <RadioBtn
                            registration={register('payment_method')}
                            error={formState.errors['payment_method']}
                            label="?????????(??????110???)"
                            value="BILL"
                        />
                    </FieldWrapper>
                </FormBlock>
                {watch('payment_method') === 'BILL' && (
                    <FormBlock>
                        <FieldWrapper label="????????????????????????" require>
                            <RadioBtn
                                registration={register('billing_method')}
                                error={formState.errors['billing_method']}
                                label="?????????"
                                value="EMAIL"
                            />
                            <RadioBtn
                                registration={register('billing_method')}
                                error={formState.errors['billing_method']}
                                label="??????"
                                value="POST"
                            />
                        </FieldWrapper>
                    </FormBlock>
                )}
            </FormSection>

            <FormSection title="???????????????????????????????????????">
                <FormBlock>
                    <InputField
                        registration={register('in_charge_first_name')}
                        error={formState.errors['in_charge_first_name']}
                        label="???"
                        placeholder="??????"
                        require
                        half
                    />
                    <InputField
                        registration={register('in_charge_last_name')}
                        error={formState.errors['in_charge_last_name']}
                        label="???"
                        placeholder="??????"
                        require
                        half
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_email')}
                        error={formState.errors['in_charge_email']}
                        label="?????????????????????"
                        type="email"
                        placeholder="xxxxxx@xxxx.com"
                        description="????????????????????????????????????????????????????????????????????????"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_email_confirm')}
                        error={formState.errors['in_charge_email_confirm']}
                        label="?????????????????????????????????"
                        type="email"
                        placeholder="xxxxxx@xxxx.com"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_tel')}
                        error={formState.errors['in_charge_tel']}
                        label="????????????"
                        placeholder="08011112222"
                        require
                    />
                </FormBlock>
            </FormSection>

            <FormSection
                title="?????????????????????"
                description="????????????????????????????????????????????????????????????????????????????????????????????????"
            >
                <FormBlock>
                    <InputField
                        registration={register('accountant_first_name')}
                        error={formState.errors['accountant_first_name']}
                        label="???"
                        placeholder="??????"
                        half
                    />
                    <InputField
                        registration={register('accountant_last_name')}
                        error={formState.errors['accountant_last_name']}
                        label="???"
                        placeholder="??????"
                        half
                    />
                </FormBlock>
                {methods.watch('accountant_first_name') && (
                    <>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_email')}
                                error={formState.errors['accountant_email']}
                                label="?????????????????????"
                                type="email"
                                placeholder="xxxxxx@xxxx.com"
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_email_confirm')}
                                error={formState.errors['accountant_email_confirm']}
                                label="?????????????????????????????????"
                                type="email"
                                placeholder="xxxxxx@xxxx.com"
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_tel')}
                                error={formState.errors['accountant_tel']}
                                label="????????????"
                                placeholder="08011112222"
                            />
                        </FormBlock>
                    </>
                )}
            </FormSection>

            <FormSection title="????????????">
                <FormBlock>
                    <InputField
                        registration={register('company_name')}
                        error={formState.errors['company_name']}
                        label="?????????"
                        placeholder="????????????????????????"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('company_zip_code')}
                        error={formState.errors['company_zip_code']}
                        label="????????????"
                        placeholder="1112222"
                        half
                        require
                    />
                    <InputField
                        registration={register('company_prefectures_city_town')}
                        error={formState.errors['company_prefectures_city_town']}
                        label="???????????? ????????????"
                        half
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('company_other_addresses')}
                        error={formState.errors['company_other_addresses']}
                        label="???????????????"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="????????????????????????????????????" require>
                        <RadioBtn
                            registration={register('delivery_address_type')}
                            error={formState.errors['delivery_address_type']}
                            label="???????????????????????????"
                            value="SAME"
                        />
                        <RadioBtn
                            registration={register('delivery_address_type')}
                            error={formState.errors['delivery_address_type']}
                            label="????????????"
                            value="DIFFER"
                        />
                    </FieldWrapper>
                </FormBlock>
                {methods.watch('delivery_address_type') === 'DIFFER' && (
                    <>
                        <FormBlock>
                            <InputField
                                registration={register('delivery_zip_code')}
                                error={formState.errors['delivery_zip_code']}
                                label="????????????"
                                placeholder="1112222"
                                half
                            />
                            <InputField
                                registration={register('delivery_prefectures_city_town')}
                                error={formState.errors['delivery_prefectures_city_town']}
                                label="???????????? ????????????"
                                half
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('delivery_other_addresses')}
                                error={formState.errors['delivery_other_addresses']}
                                label="???????????????"
                            />
                        </FormBlock>
                    </>
                )}
            </FormSection>
            <FormSection>
                <FormBlock>
                    <TextAreaField
                        registration={register('remarks')}
                        error={formState.errors['remarks']}
                        label="??????"
                    />
                </FormBlock>
            </FormSection>
        </>
    );
};
