import * as z from 'zod';

/**
 * 契約のために必要なデータのスキーマ
 */
export const ContractDetailSchema = z
    .object({
        // 契約者ID
        subscriber_id: z
            .string()
            .regex(/^(?!(_|-)).*/, {
                message: 'アンダーバーやハイフンは先頭で使用できません',
            })
            .regex(/^[0-9a-zA-Z-_]*$/, {
                message: '全角文字やその他の記号は使用できません',
            })
            .min(8, { message: '8文字以上で入力してください' })
            .max(20, { message: '20文字以下で入力してください' })
            .nonempty({ message: '必須項目です' }),

        // 利用規約チェック
        is_check_terms: z.boolean().refine(val => val === true, '同意いただけない場合はお申し込みいただけません。'),

        // だいちゃんの契約数
        cmm_limit_number: z.string().refine(v => !Number.isNaN(Number(v)), {
            message: '半角数字を入力してください',
        }),

        // 契約者種別
        subscription_type: z.enum(['BUSINESS', 'PERSON']),

        // 支払い方法 [口座引き落とし、 請求書]
        payment_method: z.enum(['DIRECT_DEBIT', 'BILL']),

        // 請求方法
        billing_method: z.enum(['EMAIL', 'POST']),

        /**
         * だいちゃんの担当者様情報
         */

        // 氏名
        in_charge_first_name: z.string().nonempty({ message: '必須項目です' }),
        in_charge_last_name: z.string().nonempty({ message: '必須項目です' }),

        // 電話番号
        in_charge_tel: z.string().regex(/^0\d{9,10}$/, {
            message: '正しい電話番号の形式で入力してください',
        }),

        // メール
        in_charge_email: z
            .string()
            .email({ message: '正しいメールアドレスの形式で入力してください' })
            .nonempty({ message: '必須項目です' }),

        // メール確認用
        in_charge_email_confirm: z
            .string()
            .email({ message: '正しいメールアドレスの形式で入力してください' })
            .nonempty({ message: '必須項目です' }),

        /**
         * 経理担当者様情報
         */

        // 氏名
        accountant_first_name: z.string().optional(),
        accountant_last_name: z.string().optional(),

        // 電話番号
        accountant_tel: z
            .string()
            .regex(/^0\d{9,10}$/, {
                message: '正しい電話番号の形式で入力してください',
            })
            .optional(),

        // メール
        accountant_email: z.string().email({ message: '正しいメールアドレスの形式で入力してください' }).optional(),

        // メール確認用
        accountant_email_confirm: z
            .string()
            .email({ message: '正しいメールアドレスの形式で入力してください' })
            .optional(),

        /**
         * 会社情報
         */
        company_name: z.string().nonempty({ message: '必須項目です' }),

        // 会社住所
        company_zip_code: z.string().nonempty({ message: '必須項目です' }),
        company_prefectures_city_town: z.string().nonempty({ message: '必須項目です' }),
        company_other_addresses: z.string().nonempty({ message: '必須項目です' }),

        // だいちゃんの送付先種別
        delivery_address_type: z.enum(['SAME', 'DIFFER']),

        // だいちゃん発送先住所（会社住所と別にある場合）
        delivery_zip_code: z.string().optional(),
        delivery_prefectures_city_town: z.string().optional(),
        delivery_other_addresses: z.string().optional(),

        /**
         * 補足
         */
        remarks: z.string().optional(),
    })
    .refine(data => data.in_charge_email === data.in_charge_email_confirm, {
        message: 'メールアドレスが一致しません。',
        path: ['adminEmailConfirm'], // Set the path of this error on the confirmEmail field.
    })
    .refine(data => data.accountant_email === data.accountant_email_confirm, {
        message: 'メールアドレスが一致しません。',
        path: ['accountantEmailConfirm'], // Set the path of this error on the confirmEmail field.
    });

export type IContractDetail = z.infer<typeof ContractDetailSchema>;

export type InChargeProfile = Pick<
    IContractDetail,
    'in_charge_first_name' | 'in_charge_last_name' | 'in_charge_tel' | 'in_charge_email' | 'in_charge_email_confirm'
>;

export type AccountantProfile = Pick<
    IContractDetail,
    | 'accountant_first_name'
    | 'accountant_last_name'
    | 'accountant_tel'
    | 'accountant_email'
    | 'accountant_email_confirm'
>;

export type Contracts = Pick<
    IContractDetail,
    'cmm_limit_number' | 'subscription_type' | 'payment_method' | 'billing_method'
>;

export type Company = Pick<
    IContractDetail,
    | 'company_name'
    | 'company_zip_code'
    | 'company_prefectures_city_town'
    | 'company_other_addresses'
    | 'delivery_address_type'
    | 'delivery_zip_code'
    | 'delivery_prefectures_city_town'
    | 'delivery_other_addresses'
>;
