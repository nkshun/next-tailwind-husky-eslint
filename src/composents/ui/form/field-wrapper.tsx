import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    error?: FieldError | undefined;
    description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

/**
 * 以下を主な目的とするラッパーコンポーネント
 *  - フォーム部品に共通で存在するべきラベルとエラー表示を共通化できる
 *  - useControllerを使わなくていい
 *  - registerメソッドの引数の文字列が型安全になる
 */
export const FieldWrapper = (props: FieldWrapperProps) => {
    const { label, className, error, children } = props;
    return (
        <div>
            <label className={clsx('block text-sm font-medium text-gray-700', className)}>
                {label}
                <div className="mt-1">{children}</div>
            </label>
            {error?.message && (
                <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
                    {error.message}
                </div>
            )}
        </div>
    );
};
