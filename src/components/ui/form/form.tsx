import clsx from 'clsx';
import * as React from 'react';
import { UseFormReturn, SubmitHandler, FieldValues, useFormContext } from 'react-hook-form';

/**
 * FormPropsの型のうち、フォームのデータオブジェクトとバリデート用のスキーマの型は外部から指定する
 *
 *  TFormValues: フォームのデータオブジェクト
 *  Schema     : バリデート用のスキーマ(zodで生成)
 */
type FormProps<TFormValues extends FieldValues> = {
    onSubmit: SubmitHandler<TFormValues>;
    children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
    className?: string;
    id?: string;
};

export const Form = <TFormValues extends FieldValues>({
    onSubmit,
    children,
    className,
    id,
}: FormProps<TFormValues>) => {
    const methods = useFormContext<TFormValues>();
    return (
        <form className={clsx('space-y-6', className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
            {/* 子要素はここで定義したuseFormの戻り値を受け取るコンポーネント関数とし、子要素にて。react-hook-formの機能を活用する */}
            {/* { register, formState,,, } 詳しくはreact-hook-formのドキュメント参照 */}
            {children(methods)}
        </form>
    );
};
