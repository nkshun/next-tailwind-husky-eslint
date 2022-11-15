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
                // エラー処理
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
                        利用規約に同意する
                    </CheckBoxField>
                </FormBlock>
                <FormBlock>
                    <InputButtonField
                        registration={register('subscriber_id')}
                        error={formState.errors['subscriber_id']}
                        label="契約者ID"
                        description="半角英数字、ハイフン「-」、アンダーバー「_」を組み合わせたご希望の契約者IDを記入してください。だいちゃんご利用前のログイン処理で必要になります。"
                        require
                        onClick={() => onCheckSubscriberId(watch('subscriber_id'))}
                    >
                        確認する
                    </InputButtonField>
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="ご購入種別" require>
                        <RadioBtn
                            registration={register('subscription_type')}
                            error={formState.errors['subscription_type']}
                            label="法人契約"
                            value="BUSINESS"
                        />
                        <RadioBtn
                            registration={register('subscription_type')}
                            error={formState.errors['subscription_type']}
                            label="個人契約"
                            value="PERSON"
                        />
                    </FieldWrapper>
                </FormBlock>

                <FormBlock>
                    <InputField
                        registration={register('cmm_limit_number')}
                        error={formState.errors['cmm_limit_number']}
                        label="だいちゃん購入希望台数"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="ご希望のお支払い方法" require>
                        <RadioBtn
                            registration={register('payment_method')}
                            error={formState.errors['payment_method']}
                            label="引き落とし"
                            value="DIRECT_DEBIT"
                        />
                        <RadioBtn
                            registration={register('payment_method')}
                            error={formState.errors['payment_method']}
                            label="請求書(別途110円)"
                            value="BILL"
                        />
                    </FieldWrapper>
                </FormBlock>
                {watch('payment_method') === 'BILL' && (
                    <FormBlock>
                        <FieldWrapper label="請求書の送付方法" require>
                            <RadioBtn
                                registration={register('billing_method')}
                                error={formState.errors['billing_method']}
                                label="メール"
                                value="EMAIL"
                            />
                            <RadioBtn
                                registration={register('billing_method')}
                                error={formState.errors['billing_method']}
                                label="郵送"
                                value="POST"
                            />
                        </FieldWrapper>
                    </FormBlock>
                )}
            </FormSection>

            <FormSection title="だいちゃんのご担当者様情報">
                <FormBlock>
                    <InputField
                        registration={register('in_charge_first_name')}
                        error={formState.errors['in_charge_first_name']}
                        label="氏"
                        placeholder="田中"
                        require
                        half
                    />
                    <InputField
                        registration={register('in_charge_last_name')}
                        error={formState.errors['in_charge_last_name']}
                        label="名"
                        placeholder="太郎"
                        require
                        half
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_email')}
                        error={formState.errors['in_charge_email']}
                        label="メールアドレス"
                        type="email"
                        placeholder="xxxxxx@xxxx.com"
                        description="契約申込完了お知らせメールを送付するアドレスです"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_email_confirm')}
                        error={formState.errors['in_charge_email_confirm']}
                        label="メールアドレス（確認）"
                        type="email"
                        placeholder="xxxxxx@xxxx.com"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('in_charge_tel')}
                        error={formState.errors['in_charge_tel']}
                        label="電話番号"
                        placeholder="08011112222"
                        require
                    />
                </FormBlock>
            </FormSection>

            <FormSection
                title="経理ご担当者様"
                description="※お支払い関係のご連絡先が異なる場合のみご記入お願いいたします。"
            >
                <FormBlock>
                    <InputField
                        registration={register('accountant_first_name')}
                        error={formState.errors['accountant_first_name']}
                        label="氏"
                        placeholder="田中"
                        half
                    />
                    <InputField
                        registration={register('accountant_last_name')}
                        error={formState.errors['accountant_last_name']}
                        label="名"
                        placeholder="太郎"
                        half
                    />
                </FormBlock>
                {methods.watch('accountant_first_name') && (
                    <>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_email')}
                                error={formState.errors['accountant_email']}
                                label="メールアドレス"
                                type="email"
                                placeholder="xxxxxx@xxxx.com"
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_email_confirm')}
                                error={formState.errors['accountant_email_confirm']}
                                label="メールアドレス（確認）"
                                type="email"
                                placeholder="xxxxxx@xxxx.com"
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('accountant_tel')}
                                error={formState.errors['accountant_tel']}
                                label="電話番号"
                                placeholder="08011112222"
                            />
                        </FormBlock>
                    </>
                )}
            </FormSection>

            <FormSection title="会社情報">
                <FormBlock>
                    <InputField
                        registration={register('company_name')}
                        error={formState.errors['company_name']}
                        label="会社名"
                        placeholder="社会福祉法人◯◯"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('company_zip_code')}
                        error={formState.errors['company_zip_code']}
                        label="郵便番号"
                        placeholder="1112222"
                        half
                        require
                    />
                    <InputField
                        registration={register('company_prefectures_city_town')}
                        error={formState.errors['company_prefectures_city_town']}
                        label="都道府県 市町村区"
                        half
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <InputField
                        registration={register('company_other_addresses')}
                        error={formState.errors['company_other_addresses']}
                        label="以降の住所"
                        require
                    />
                </FormBlock>
                <FormBlock>
                    <FieldWrapper label="だいちゃんのお届け先住所" require>
                        <RadioBtn
                            registration={register('delivery_address_type')}
                            error={formState.errors['delivery_address_type']}
                            label="上記会社住所と同じ"
                            value="SAME"
                        />
                        <RadioBtn
                            registration={register('delivery_address_type')}
                            error={formState.errors['delivery_address_type']}
                            label="別の住所"
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
                                label="郵便番号"
                                placeholder="1112222"
                                half
                            />
                            <InputField
                                registration={register('delivery_prefectures_city_town')}
                                error={formState.errors['delivery_prefectures_city_town']}
                                label="都道府県 市町村区"
                                half
                            />
                        </FormBlock>
                        <FormBlock>
                            <InputField
                                registration={register('delivery_other_addresses')}
                                error={formState.errors['delivery_other_addresses']}
                                label="以降の住所"
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
                        label="備考"
                    />
                </FormBlock>
            </FormSection>
        </>
    );
};
