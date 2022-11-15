import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

/**
 * 以下の型を外部から指定する
 *
 *  TFormValues: フォームの入力データオブジェクト型
 *  Schema     : バリデート用のスキーマ(zodで生成)
 */
type FormProviderProps<TFormValues extends FieldValues, Schema> = {
    children: React.ReactNode;
    options?: UseFormProps<TFormValues>;
    schema?: Schema;
};

export const ContractFormProvider = <
    TFormValues extends FieldValues,
    Schema extends ZodType<unknown, ZodTypeDef, unknown>
>({
    children,
    schema,
    options,
}: FormProviderProps<TFormValues, Schema>) => {
    /**
     * useForm の resolverにzodResolverを渡すことで
     * react-hook-formにてzodによるバリデーションが使えるようにする
     */
    const methods = useForm<TFormValues>({
        ...options,
        resolver: schema && zodResolver(schema),
    });
    /**
     * children内では、useFormContextを利用して
     * methodsを共有できる
     */
    return <FormProvider {...methods}>{children}</FormProvider>;
};
