import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

/**
 * FormPropsの型のうち、フォームのデータオブジェクトとバリデート用のスキーマの型は外部から指定する
 *
 *  TFormValues: フォームのデータオブジェクト
 *  Schema     : バリデート用のスキーマ(zodで生成)
 */
type FormProps<TFormValues extends FieldValues, Schema> = {
    className?: string;
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    options?: UseFormProps<TFormValues>;
    id?: string;
    schema?: Schema;
};

export const Form = <
    /**
     * FormPropsに対して指定する型をFormコンポーネント呼び出し元から渡す
     */
    TFormValues extends Record<string, unknown> = Record<string, unknown>,
    Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>({
    onSubmit,
    children,
    className,
    options,
    id,
    schema,
}: FormProps<TFormValues, Schema>) => {
    /**
     * useForm の resolverにzodResolverを渡すことで
     * react-hook-formにてzodによるバリデーションが使えるようにする
     */
    const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) });
    return (
        <form className={clsx('space-y-6', className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
            {/* 子要素はここで定義したuseFormの戻り値を受け取るコンポーネント関数とし、子要素にて。react-hook-formの機能を活用する */}
            {/* { register, formState,,, } 詳しくはreact-hook-formのドキュメント参照 */}
            {children(methods)}
        </form>
    );
};
